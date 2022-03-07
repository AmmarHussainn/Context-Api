import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
   const [IsError,setIsError] = useState(false);
  return(
    <>
    <h1>{text || 'Ammar Husssain'}</h1>
    {text && <h1>"Alpga"</h1>}


   <button className='btn' onClick={()=>setIsError(!IsError)}>Toggle Error</button>
    {IsError && <h1>Error....</h1>}
    {IsError ? <h1>Error....</h1> : <h1>No Error....</h1>}
    </>
  );
};

export default ShortCircuit;
