import { useState, useEffect } from 'react';

function useImageToBlob(selectedFile: File | null) {
   const [blob, setBlob] = useState<Blob | null>(null);
   // const [error, setError] = useState<string | null>(null);
   // if (!selectedFile) return null;
   
   const convertImageToBlob = (imageFile: File) => {
      const reader = new FileReader();
      reader.onloadend = () => {
         if (reader.result) {
            setBlob(new Blob([reader.result as ArrayBuffer]));
         } else {
            return null;
         }
      };
      reader.onerror = () => null;
      reader.readAsArrayBuffer(imageFile);
   };

   useEffect(() => {
      if (selectedFile) {
         convertImageToBlob(selectedFile);
      }
   }, [selectedFile]);

   return { blob };
}

export default useImageToBlob;
