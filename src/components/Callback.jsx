import React, { useState } from 'react'

//mengirim data ke anak

const ChildComponent =({onMessage})=> {
    const sendMessegeToParent = () => {
        const childMassage = "Helo Parent!";
        onMessage(childMassage);
    };
    return(
        <div>
            <button onClick={sendMessegeToParent}>Send Messege to Parent </button>
        </div>
    );
};

export const Callback = () => {
    //callback adalah parent component
    const[messege, setMessege] = useState("");

    const handleMessegeFromChiled = (childMassage)=>{
        setMessege(`Messege from child : ${childMassage}`); //kalo buttonnya di pencet maka akan tampil ini
    }
  return (
    <div>
        Callback
        <h2>{messege}</h2>
        <ChildComponent onMessage={handleMessegeFromChiled}/>
    </div>
  );
};
