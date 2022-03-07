import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setValue] = useState(0);
  useEffect(()=>{
    console.log('cell Effected');
    document.title  =` New Message(${value})`
  },[value])
console.log('render componenet');
  return(
    <>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value +1)}>click mee</button>
    </>
  ) 
};

export default UseEffectBasics;
