import React, { useState } from 'react';

const UseStateCounter = () => {
 const [value, setValue] = useState(0);
 const increaseCounter =()=>{
  setValue(value+1)
 }
 const resetCounter = ()=>{
   console.log("eewwe")
    setValue(0)
 }
const DecreaseCounter =()=>{
  setValue(value-1)
}

const  complexFunc =()=>{
  setTimeout(()=>{
  //  setValue(value +1)
  setValue((prevState)=>{
   return prevState +1
  })
  },2000)
}
  return (
    <>
    <section style={{margin :'4rem 0'}}>
     <h2>regular counter</h2>
     <h1>{value}</h1>
     <button className='btn' onClick={DecreaseCounter} >decrease</button>
     <button className='btn' onClick={resetCounter}>Rest</button>
     <button className='btn' onClick={increaseCounter}>increase</button>


     <h2>More Cpmlex Function</h2>
     <h1>{value}</h1>
     <button onClick={complexFunc} className='btn'>Update Me Later</button>
    </section>
    </>
  )
};

export default UseStateCounter;
