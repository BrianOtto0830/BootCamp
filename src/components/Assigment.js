import React from 'react';
import '../App.css';
import gambar from '../asset/kodingakademi.png';

export const Assignment = () => {
  return (
    <div>
      <div className="Parent">
        <img src={gambar} alt="Deskripsi gambar" className='Gambar' />
        <button className='Login'>Login</button>
        
      </div>
      <div className='Tulisan'>
        <h1>Selamat Datang di React App pertama saya</h1>
        <i>Copyright 2022</i>
      </div>
    </div>
  );
};
