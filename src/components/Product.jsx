import React from 'react';

export const Product = ({
  id,
  name,
  description,
  price,
  category,
  stock,
  image,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-5">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-semibold text-gray-900 mb-2">{name}</h5>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-lg font-medium text-gray-900 mb-2">$ {price}</div>
        <p className="text-sm text-gray-500 mb-2">Kategori: {category}</p>
        <p className={`text-sm font-semibold ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {stock > 0 ? `Stok tersedia: ${stock}` : 'Stok habis'}
        </p>
      </div>
    </div>
  );
};
