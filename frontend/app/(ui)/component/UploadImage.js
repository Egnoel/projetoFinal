import Image from 'next/image';
import React, { useState } from 'react';

const UploadImage = ({ setImages }) => {
  const [files, setFiles] = useState([]);
  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
    // Convert selected files to URLs and update the parent component's state
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...urls]);
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
