import React from 'react'

// nomer 5 yang tampil retail pake filter
// nomer 6 pake kondisi yang exc 3

export const TugasJS3 = () => {

  // function panjangString(str){
  //   console.log('Panjang string ini : ', str.length);
  // }
  // function jumlah (angka1, angka2){
  //   return angka1 + angka2;
  // }
  // function hitung(a, b){
  //   let c = 5;
  //   return (a+b)*c;
  // }
  // nomer 1 ubah fungsi diatas menjadi format arrow function
  const panjangString = (str) =>{
    console.log('Panjang string ini : ', str.length);
  }
  
  const jumlah = (angka1, angka2) => angka1 + angka2; //karena yang direturn 1 baris langsung ditulis tanpa {}

  const hitung = (a,b) =>{
    let c = 5;
    return (a+b)*c;
  }

  //nomer 2 buat class points dengan fungsi penjumlahan
  class Point{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    plus(pointplus){
      return new Point(this.x + pointplus.x, this.y + pointplus.y); //metode untuk menjumlahkan
    }
  }

  const point1 = new Point(3,4); //tampung nilai poin di point1
  const point2 = new Point(2,3); //tampung nilai poin lainnya di point2
  const jumlahkan = point1.plus(point2);

  console.log(`${jumlahkan.x}, ${jumlahkan.y}`);

  //soal nomer 3
  const inventory = [
    {type: "machine", value : 5000},
    {type: "machine", value : 650},
    {type: "duck", value : 10},
    {type: "furniture", value : 1200},
    {type: "machine", value : 77}
  ]
  const values = inventory.map(item=> item.value);//masukin nilai value dari array inventory ke array baru
  console.log(values);
  const sumValues = values.reduce((a,b)=> a+b);//jumlahkan semua array yang ada didalam values menggunakan metode reduce
  console.log(sumValues);

  //soal nomer 4
  function lastElement(arr){
    return arr.findLast(()=>true);//gunakan metode findlast
  }
  const last = lastElement([1,2,1,2]);
  console.log("no 4" , last);

  //soal nomer 5
  const company = [
    {name: "Company 1", category: "Finance", start: 1981, end: 2004},
    {name: "Company 2", category: "Retail", start: 1992, end: 2008},
    {name: "Company 3", category: "Auto", start: 1999, end: 2007},
    {name: "Company 4", category: "Retail", start: 1989, end: 2010},
    {name: "Company 5", category: "Technology", start: 2009, end: 2014}
  ];
  
  //print name dari setiap company dengan menggunakan forEcah
  company.forEach((comp)=>{
    console.log(comp.name);
  });

  // Mendapatkan array nama perusahaan yang mulai setelah 1987
  const filteredCompanies = company.filter(compfilter => compfilter.start > 1987);//filter company yang diatas tahun 1987 mulainya
  for (const comp of filteredCompanies) {
    console.log(comp.name);//cetak nama dari data yang sudah di filter diatas
  }

  //tampilkan nama perusahaan yang categorinya retail
  const retailCompanies = company.filter(compretail => compretail.category === "Retail");
  for(const comp of retailCompanies){
    console.log(comp.name);
  }

  //sort company ascending dari end year
  
  const sortedCompanies = company.toSorted((a, b) => a.end - b.end); // pake tosorted untuk mengurutkan nama company berdasarkan end
  const sortedCompanyEnd = sortedCompanies.map(comp => comp.name); // Mengambil nama perusahaan yang sudah diurutkan di objek sortedcompanies

  console.log(sortedCompanyEnd);

  //bagian nomer 5 akhir
  const person = {
    name: "Costas",
    address : {
      street: "Lalaland 12"
    }
  }
  console.log(`nama: ${person.name} alamat : ${person.address.street}`);

  //suruh destructure properti street dari objek person
  const{
    name,
    address : {street},
  } = person
  console.log('destructure street: ' + street);
  
  //soal ke 6
  const users = [
    {id: 1, name: 'Doni', city: 'Denpasar', age: 35},
    {id: 2, name: 'Tono', city: 'Gianyar', age: 46},
    {id: 3, name: 'Bento', city: 'Surabaya', age: 22},
    {id: 4, name: 'Komang', city: 'Jakarta', age: 16},
  ];

  //buat array find method buat print id: 2
  const user = users.find(data => data.id === 2);//menggunakan metode find array untuk mencari dari awal data users yang idnya = 2
  console.log('user', user) //cetak objek user yang menampung data array yang menggunakan metode find, hanya data yang idnya 2 saja yang ditampilkan
    
  //buat new collection untuk menampilkan city saja sarannya pake users.map
  const myCity = users.map(collection => collection.city);//cara sama seperti diatas tapi hanya menyimpan semua city saja
  console.log('city', myCity);

  //buat new collection untuk menampilkan user dengan umur > 18 sarannya menggunakan users.filter
  const adults = users.filter(usia => usia.age > 18);
  console.log('adults', adults);

  return (
    <div>
      TugasJS3
      <p>nomer1</p>
      <p>panjang string muncul di console{panjangString('Koding Akademi')}</p>
      <p>Jumlah : {jumlah(20,10)}</p>
      <p>hitung : {hitung(3,2)}</p>
      <p>nomer2</p>
      <p>Point : {jumlahkan.x}, {jumlahkan.y}</p>
      <p>nomer3</p>
      <p>jumlah dari valuenya adalah : {sumValues}</p>
      <p>nomer 4</p>
      <p>elemen terakhir dari array adalah : {last}</p>
      <p>nomer 5</p>
      <p>nama perusahaan</p>
      <div>
        <ul>
          {company.map((comp,index)=>(
            <li key={index}>{comp.name}</li>
          ))}
        </ul>
      </div>
      <p>nama perusahaan yang berdiri diatas tahun 1987</p>
      <div>
        <ul>
          {filteredCompanies.map((comp,index)=>(
            <li key={index}>{comp.name}</li>
          ))}
        </ul>
      </div>
      <p>nama perusahaan berkategori retail</p>
      <div>
        <ul>
          {retailCompanies.map((comp,index)=>(
            <li key={index}>{comp.name}</li>
          ))}
        </ul>
      </div>
      <p>urutan nama perusahaan berdasarkan end year nya (Ascending)</p>
      <div>
        <ul>
          <li>{sortedCompanyEnd}</li>
        </ul>
      </div>
      <p>Destructure properti street dari objek person : {street}</p>
      <p>nomer 6</p>
      <p>data array yang ditemukan menggunakan metode find: {`${user.id} ${user.name} ${user.city} ${user.age}`}</p>
      <p>data array yang berisi semua city yang ada menggunakan metode map : {`${myCity}`}</p>
      <p>data array para orang dewasa menggunakan metode filter: </p>
      {adults.map(adults =>(
        <li key={adults.id}>
          {`Nama: ${adults.name} Kota: ${adults.city} Usia: ${adults.age}`}
        </li>
      ))}     
    </div>
  )
}
