import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize',checksize)
  })
  const checksize = ()=>{
    setSize(window.innerWidth)
  }
  return (
    <>
    Window.innerwidth
    <h2>{size}</h2>
    <button onClick={checksize}>Ckeck size</button>
    </>
  )
};

export default UseEffectCleanup;
