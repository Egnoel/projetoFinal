import React, { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div>
      <span>Imagem</span>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default UploadImage;
