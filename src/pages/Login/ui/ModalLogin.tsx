import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Input, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { useAppDispatch } from "@/app/appStore";
import useInput from "@/shared/hooks/useInput";
import useToggle from "@/shared/hooks/useToggle";
import { useLoginMutation } from "@/features/auth/api/login.api";
import { setCredentials } from "@/features/auth";
import { btnAttribs, inputAttribs } from "@/shared/ui/defaultAttribs";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";

const Login = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const from: string = location.state?.from?.pathname || "/";

   const userRef = useRef<HTMLInputElement>(null);
   const errRef = useRef<HTMLInputElement>(null);

   const [pwd, setPwd] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [user, resetUser, userAttribs] = useInput("user", "");
   const [check, toggleCheck] = useToggle("persist", false);
   const [isVisible, setIsVisible] = useState(false);

   const [login, { isLoading }] = useLoginMutation();

   useEffect(() => {
      userRef.current?.focus();
   }, []);

   useEffect(() => {
      setErrMsg("");
   }, [user, pwd]);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         const userData = await login({ user, pwd }).unwrap();
         dispatch(setCredentials({ ...userData }));
         resetUser("");
         setPwd("");
         navigate(from, { replace: true });
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
         if (!err?.originalStatus) {
            setErrMsg("No Server Response");
         } else if (err.originalStatus === 400) {
            setErrMsg("Missing Username or Password");
         } else if (err.originalStatus === 401) {
            setErrMsg("Incorrect login or password");
         } else {
            setErrMsg("Login Failed");
         }
         errRef.current?.focus();
      }
   };

   return (
      <>
         <Modal
            
            hideCloseButton
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            radius="lg"
            classNames={{
               body: "backdrop-opacity-20 backdrop-blur-[100px]  p-10 drop-shadow-2xl",
               base: "bg-[url('/image-7ont60rl.png')] border-1 shadow-3xl border-primary",
               header: "backdrop-opacity-20 backdrop-blur-[100px] drop-shadow-2xl grid justify-center",
               footer: "backdrop-opacity-20 backdrop-blur-[100px] drop-shadow-2xl",
            }}
         >
            <ModalContent>
               {() => (
                  <>
                     <ModalBody>
                        <h1 className="font-bold text-primary text-3xl mb-7 backdrop-opacity-20 backdrop-blur-[100px] drop-shadow-2xl text-center">
                           Увійти
                        </h1>
                        <form className="grid gap-y-2 " onSubmit={handleSubmit}>
                           <Input
                              {...inputAttribs}
                              isInvalid={errMsg ? true : false}
                              errorMessage={errMsg}
                              type="text"
                              label="Username"
                              ref={userRef}
                              {...userAttribs}
                              classNames={{ label: "after:content-['']" }}
                           />
                           <Input
                              {...inputAttribs}
                              isInvalid={errMsg ? true : false}
                              errorMessage={errMsg}
                              type={isVisible ? "text" : "password"}
                              label="Password"
                              onChange={(e) => setPwd(e.target.value)}
                              value={pwd}
                              classNames={{ label: "after:content-['']" }}
                              endContent={
                                 <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                                    {isVisible ? (
                                       <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    ) : (
                                       <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                    )}
                                 </button>
                              }
                           />
                           <Checkbox className="mt-1 mb-[100px]" onChange={toggleCheck} isSelected={check}>
                              <span className="text-sm">Keep me logged in</span>
                           </Checkbox>
                           <Button {...btnAttribs} fullWidth isLoading={isLoading} type="submit">
                              Увійти
                           </Button>
                        </form>
                        <div className="text-sm text-center mt-10">
                           Ще не маєте акаунта? 
                           <span className="text-primary font-semibold">
                              <Link to="/register"> Зареєструватись</Link>
                           </span>
                        </div>
                     </ModalBody>
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   );
};

export default Login;
