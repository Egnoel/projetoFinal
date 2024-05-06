'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

const UploadImage = ({ setImages }) => {
  const [files, setFiles] = useState([]);
  const handleChange = async (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'chat app');
      try {
        const response = await fetch(
          'https://api.cloudinary.com/v1_1/dameucg7x/image/upload',
          {
            method: 'POST',
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImages((prevImages) => [...prevImages, data.secure_url]);
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
      }
    }
  };
  return (
    <div className="flex flex-row items-center gap-1">
      <span>Imagem</span>
      <input type="file" multiple accept="image/*" onChange={handleChange} />
      <div className="flex flex-row gap-1">
        {files.map((file, index) => (
          <Image
            key={index}
            src={URL.createObjectURL(file)}
            alt={`Uploaded image ${index}`}
            width={8}
            height={8}
            className="object-cover w-8 h-8"
          />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
