// import { useState } from 'react';

import { useEffect, useState } from "react";

// interface UseBase64Hook {
//    convert: (file: File | string, action: 'encode' | 'decode', filename?: string) => Promise<string | File | undefined>;
// }

// const useBase64 = (): UseBase64Hook => {
//    const fileToBase64 = (file: File): Promise<string | undefined> => {
//       return new Promise((resolve, reject) => {
//          const reader = new FileReader();
//          reader.onloadend = () => resolve(reader.result as string);
//          reader.onerror = reject;
//          reader.readAsDataURL(file);
//       });
//    };

//    const base64ToFile = (dataurl: string, filename: string): File => {
//       const arr = dataurl.split(',');
//       const mime = arr[0].match(/:(.*?);/)[1];
//       const bstr = atob(arr[1]);
//       let n = bstr.length;
//       const u8arr = new Uint8Array(n)
//       while (n--) {
//          u8arr[n] = bstr.charCodeAt(n);
//       }
//       return new File([u8arr], filename, { type: mime });
//    };

//    const convert = async (file: File | string, action: 'encode' | 'decode', filename?: string): Promise<string | File | undefined> => {
//       if (action === 'encode' && file instanceof File) {
//          return await fileToBase64(file);
//       } else if (action === 'decode' && typeof file === 'string' && filename) {
//          return base64ToFile(file, filename);
//       }
//    };

//    return { convert };
// };

// export default useBase64;

const useBase64 = (file: File | null): string | null => {
   const [base64, setBase64] = useState<string | null>(null);

   useEffect(() => {
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => setBase64(reader.result as string);
      reader.onerror = () => setBase64(null);
      reader.readAsDataURL(file);
   }, [file]);

   return base64;
};

export default useBase64;