import React from 'react'

export const TugasJS2 = () => {

  // soal1
  var cityName = "Denpasar";
  var number1 = 200;
  var number2 = 800;

  function tampil(){
    
    return number1 + number2;

  }

  let hasil = tampil();

  // soal2
  console.log(cityName);
  console.log(hasil);
  
  // soal3
  function clone3(nama){
    console.log(`${nama} ${nama} ${nama}`);
  }

  console.log(clone3("doni"));

  // soal4
  const cartItem = {
    itemID : 1,
    itemName : "Shoe Nike",
    itemPrice : "$56",
    itemQuantity : 2,
    cartID : 201
  }

  function button(){
    console.log(cartItem.itemName + ":" + cartItem.itemQuantity);
  }

  // soal5
  console.log("This is Bootcamp");
  console.log('Fullstack Web Developer');
  console.log(`By "Koding Akademi"`);

  // soal6
  const fruits = ["Jambu", "Mangga", "Durian", "Anggur"];
  console.log(fruits);
  
  for (let x in fruits){
    console.log("Jumlah arraynya :" + fruits.length);
  }

  fruits[2] = "Salak";
  console.log(fruits);

  fruits.push("Rambutan");
  console.log(fruits);

  // soal7
  function cekdata (nomer1, nomer2){
    let hasil = nomer1 + nomer2;
    if(hasil < 100){
      return true;
    }else{
      return false;
    }
  }

  // cek soal 7
  console.log(cekdata(40,50));
  console.log(cekdata(60,60));

  // soal 8
  const student = {
    name : 'Wayan Suksme',
    age : 30,
    hobbies : ['baca', 'ngoding', 'tidur'],
  };

  for(let x in student){
    console.log(x,':', student[x]);
  }

  return (
    <div>TugasJS2
      <div>
        {cityName}
      </div>
      <div>
        {hasil}
      </div>
      <div>
        <button onClick={button}>Tampilkan</button>
      </div>
    </div>
  )
}
