import { selectCurrentToken } from "./model/selectors";
import authApi from "./api/authApi";
import { logOut, setCredentials } from "./model/authSlice";
import authReducer from "./model/authSlice";
import PersistLogin from "./ui/PersistLogin";
import RequireAuth from "./ui/RequireAuth";
import { RegisterInitState } from "./model/registerInitState";
import { reducer } from "./model/registerReducer";
import { useRegisterMutation } from "./api/register.api";
import { useLoginMutation } from "./api/login.api";

export { RequireAuth, selectCurrentToken, authApi, logOut, setCredentials, authReducer, PersistLogin, RegisterInitState, reducer, useRegisterMutation, useLoginMutation };
