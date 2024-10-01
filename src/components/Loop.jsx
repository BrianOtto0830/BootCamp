import React from 'react'

export const Loop = () => {
  for (let step=0; step<5;step++){
    console.log('Step: ',step);
  }

  const mynumbers =[88, 34, 19,16, 55];
  for (let x in mynumbers){
    console.log(x,':',mynumbers[x]);
  }

  const mycar = {brand:"Honda", type:"SUV", year:2022};
  for (let x in mycar){
    console.log(x,':', mycar[x]);
  }

  return (
    <div>Loop React Js</div>
  )
}
