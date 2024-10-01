import React, { useEffect, useState } from 'react'
import gclass from './gclass.jpg'
import benz from './benz.jpg'
import { ExpenseItem } from '../components/ExpenseItem';
import { ExpenseList } from '../components/ExpenseList';
import { Card } from '../components/Card';

//nomer 1 bikin waktu muncul sekali waktu kerender panggil waktu constractor date
//nomer 2 tampilin pake ul li dan map
//nomer 3 buat komponen yang mengembalikan Expense date, description, dan total
//nomer 4 buat layout dari tailwind pake terminary operator


//Untuk nomer 2
const expenses = [
  {
    expense_date : '01-Maret-2022',
    description : 'Bayar Angsuran Motor',
    total : 'Rp. 1.200.000'
  },
  {
    expense_date : '11-Maret-2022',
    description : 'Bayar Air',
    total : 'Rp. 300.000'
  },
];

//untuk nomer 4
const productList = [
  {
    title: 'GL Class',
    description : 'This is our product description GL Class',
    year: 2020,
    image: benz
  },
  {
    title: 'G Class',
    description: 'This is our product description G Class',
    year: 2022,
    image: gclass
  }
]


export const TugasJS4 = () => {
  //nomer 1
  const [bangkokTime, setBangkokTime] = useState('');

  useEffect(() => {
    const updateBangkokTime = () => {
      const currentTime = new Date();
      currentTime.setHours(currentTime.getHours() + 1); // Menambahkan 1 jam
      const formattedTime = currentTime.toLocaleTimeString(); // Mengonversi ke string waktu
      setBangkokTime(formattedTime); // Memperbarui state
    };

    updateBangkokTime(); // Set initial time
    const intervalId = setInterval(updateBangkokTime, 1000); // Update time setiap detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen unmount
  }, []);
  
  return (
    <div>
      TugasJS4 
      <p>Nomer 1</p>
      <h1>The Current Time is : {bangkokTime} GMT+08 (Bangkok Standard Time)</h1>
      <p>Nomer 2</p>
      <ul className="list-disc ml-8">
        {expenses.map((expense, index) => (
          <li key={index}>
            <p>{expense.expense_date}</p>
            <p>{expense.description}</p>
            <p>{expense.total}</p>
          </li>
        ))}
      </ul>
      <p>Nomer 3</p>
      <ExpenseItem></ExpenseItem>
      <p>Nomer 4</p>
      <div className="flex flex-wrap gap-2">
      {productList.map((product, index) => (
        <Card
          key={index}
          title={product.title}
          description={product.description}
          year={product.year} 
          image={product.image}
        />
      ))}
      </div>
      
    </div>
  )
}
