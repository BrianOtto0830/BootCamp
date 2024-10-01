import React, { useState } from 'react'

//contoh form menggunakan select
const MyForm = ()=>{
    const[value,setValue]= useState("Coconut");

    const perubahanData=(event)=>{
        setValue(event.target.value);
        console.log(event.target.value);
    }
    const masukkanData =(event)=>{
        alert("Your favorit flavor is : " + value);
        event.preventDefault();
    }
    return(
        <div className='mt-4'>
            <p>Form Select</p>
            <form onSubmit={masukkanData}>
                <label>
                    Pick your favorit flavor: 
                    <select value={value} onChange={perubahanData}>
                        <option value="Grapefruit">Grapefruit</option>
                        <option value="Lime">Lime</option>
                        <option value="Coconut">Coconut</option>
                        <option value="Mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" className='rounded-lg bg-blue-400 p-2 text-white'/>
            </form>
        </div>
    )   
}

export const ReactDOM = () => {
    const[input,setInput]=useState("");
    //onChange
    const handleChange=(event)=>{
        setInput(event.target.value);
        console.log(event.target.value);
    };

    //onClick
    const handleClick=(event)=>{
        console.log(event.target.value);
    };

    //buat button jika di klik maka muncul alert "tombol di klik" dan hasil tampungan dari handleChange
    const handleAlert=(event)=>{
        alert(`tombol di klik ${input}`);
    }

    
  return (
    <div>
        <div>
            <p>Event onChange</p>
        
            <label htmlFor="search">Search: </label>
            <input type="text" id="search" onChange={handleChange} />
        </div>
        <div className='mt-2'>
            <p>Event onClick</p>
            <button onClick={handleClick}>Click Me!!</button>
        </div>   
        <div className='mt-2'>
            <p>Coba metode Alert untuk peringatan</p>
            <button onClick={handleAlert}>Alert Button!</button>
        </div>    
        <MyForm/>

    </div>
  )
}
