import React from 'react'

export const ReactJSES6 = () => {

    class Retangle{
        constructor(height, widht){
            this.height= height;
            this.widht=widht;
        }
        keliling(){
            return 2*(this.height + this.widht);
        }
    }
    const myRetagle = new Retangle(10,5);
    
    console.log(myRetagle.height);
    console.log(myRetagle.widht);

    console.log('Keliling dari my Retangle : ' + myRetagle.keliling());

    function stringLength(str){
        let length =str.length;
        console.log('Length of the string : ', length);
        return length;
    }

    stringLength("abcde");

    // cara cara arrow fungsi
    var hello =function(){
        return "Hello World";
    };

    const halo =()=>{
        return "Hello World";
    };
    halo();

    const helo = (val) => "Helo" + val;
    helo("otto");

    const tampilNama =()=>{
        const nama = "Otto";
        return <div>{nama}</div>;
    }

    // cara pakai array find
    const array1 = [5, 12, 8, 130, 43];
    function bigger10(item){
        return item > 10;
    }
    console.log(array1.find(bigger10));

    // kalo pake transform pada arrow function
    const found = array1.find(Element => Element > 10);
    console.log("Kalau pakai transform : " +found);

    //array filter function
    const words = ['gianyar', 'limit', 'elite', 'jonathan', 'denpasar', 'surabaya'];
    const result = words.filter(words => words.length >6);
    console.log(result);

    //javascript array map
    const array= [1, 4, 9, 16];
    const map1= array.map((x)=> x * 2); //yang ada di array dikalikan 2 nilainya
    console.log(map1);

    //caranya lebih panjang dari yang diatas tapi fungsinya sama
    const number= [1,4,9,16];
    const newNumber = number.map(function(number){
        return number *2 ;
    });
    console.log(newNumber);

    const myArray = ['apple', 'banana', 'orange'];
    const myList = myArray.map((item)=> <p>{item}</p>)

    const items =[
        {
            id : 1,
            title : 'Topi Army',
            category : 'Topi',
            price : 150000,
        },
        {
            id: 2,
            title : 'Kaos Polos Pendek',
            category : 'Kaos',
            price : 89000
        }
    ]
    const myItems = items.map((item)=> item.category)
    console.log(myItems);

    //destructuring
    const vihicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vihicles;
    console.log(car);

    //contoh lainnya
    const x = [1,2,3,4,5];
    const [z, y] = x;
    console.log(z);
    console.log(y);

    //kalau object
    const obj = {a : 1, b: 2};
    const {a, b} = obj;
    console.log(a);
    console.log(b);

    //Copy Array with spread operator
    const fruits =['stroberi', 'mangga'];
    const fruitscopy = [...fruits]; //mengambil sisa dari fruits

    const numbers = [1,2,3,4,5];
    const [one, two, ...rest] = numbers; //mengambil data array setelah 1 dan 2
    

  return (
    <div>ReactJSES6
        <div>
            <p>
                Keliling dari kotaknya : {myRetagle.keliling()}
            </p>
            {tampilNama()}                      
        </div>
    </div>
  )
}
