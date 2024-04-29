import React, { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="flex flex-row items-center gap-1">
      <span>Imagem</span>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default UploadImage;
