import React from 'react'

export const Fungsi = () => {
  function square(number){
    return number*number;
  }
  let mySquare = square(12);
  
    return (
    <div>Fungsi {mySquare}</div>
  )
}
