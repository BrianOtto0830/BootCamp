import React, { useState } from 'react'

function User(){
    return <h2>Halo user</h2>;
}

function User2(props){
    return <h2>Halo user {props.nama}, umur anda {props.usia}</h2>
}


export const Jsxdancomponents = () => {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        Jsxdancomponents
        <User/>
        <User2 nama = "Otto" usia = "27"/>
        component state 
        <p>count : {count}</p>
        <button onClick={()=> setCount(count+1)}>Click</button>
        cek tailwind
        <div className="bg-blue-400">
            <p class="text-white">ini penggunaan tailwind</p>
        </div>
    </div>
  )
}
