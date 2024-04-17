import { useState, useEffect } from 'react';
import sharp from 'sharp';

async function optimizeImage(file: File) {
   const buffer = await file.arrayBuffer();
   const optimizedBuffer = await sharp(Buffer.from(buffer))
      .resize({ width: 800 }) // зменшуємо ширину до 800px
      .webp({ quality: 80 }) // конвертуємо у webp з якістю 80
      .toBuffer(); // повертаємо оптимізоване зображення як Buffer
   return new File([optimizedBuffer], file.name, { type: 'image/webp' });
}

function useImageToBlob(selectedFile: File | null) {
   const [blob, setBlob] = useState<Blob | null>(null);

   const convertImageToBlob = async (imageFile: File) => {
      const optimizedImage = await optimizeImage(imageFile);
      const reader = new FileReader();
      reader.onloadend = () => {
         if (reader.result) {
            setBlob(new Blob([reader.result as ArrayBuffer]));
         } else {
            return null;
         }
      };
      reader.onerror = () => null;
      reader.readAsArrayBuffer(optimizedImage);
   };

   useEffect(() => {
      if (selectedFile) {
         convertImageToBlob(selectedFile);
      }
   }, [selectedFile]);

   return { blob };
}

export default useImageToBlob;
