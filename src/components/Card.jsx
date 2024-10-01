import React from 'react';

export const Card = ({ title, description, year, image }) => {
  // buat if jika tahunnya diatas 2020 maka tampil new, jika tidak maka tampil stock sale
  const carStatus = year > 2020 ? "New" : "Stock Sale";

  return (
    <div className="max-w-sm min-h-[450px] flex flex-col overflow-hidden rounded-lg shadow-lg bg-white mb-6">
      <img src={image} alt={title} className="w-full h-48" />
      <div className="p-4 text-center flex flex-col">
        <h5 className="text-2xl font-bold mb-2">{title}</h5>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <p className="text-gray-500">{carStatus}</p>
        <div className='pt-4'>
          <button className='bg-blue-500 p-2 rounded-lg text-white'>Details</button>
        </div>
      </div>
    </div>
  );
};