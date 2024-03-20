import React from 'react';

const AddProduct = () => {
  return (
    <div className="flex flex-col items-center py-2 border">
      <p>AddProduct</p>
      <div className="flex items-center gap-2">
        <span>Name</span>
        <input
          type="text"
          name="productName"
          id=""
          className="border rounded-md"
        />
      </div>
      <div className="flex items-center gap-2">
        <span>Name</span>
        <input
          type="text"
          name="productName"
          id=""
          className="border rounded-md"
        />
      </div>
      <div className="flex items-center gap-2">
        <span>Name</span>
        <input
          type="text"
          name="productName"
          id=""
          className="border rounded-md"
        />
      </div>
    </div>
  );
};

export default AddProduct;
