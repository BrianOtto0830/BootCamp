import React from 'react'

export const SwitchCase = () => {
  let fruitType = 'Bananass';

  switch(fruitType){
    case 'Orange':
        console.log('Buah Jeruk');
        break;
    case 'Apples':
        console.log('Buah Apel');
        break;
    case 'Bananass':
        console.log('Buah Pisang');
        break;
    default:
        console.log(`Data tidak ada ${fruitType}.`)
  }
  return;
}
