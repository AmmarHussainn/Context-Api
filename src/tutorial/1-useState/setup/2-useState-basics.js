import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState('Random Title');
  const handleClick = ()=>{
   console.log("sdfdf")
    if (text === 'Random Title') {

      setText('Updated Title');
    }
    else{
      setText('Random Title');
    }
  };
  return (<React.Fragment>
    <h1>{text}</h1>
    <button onClick={handleClick} className='btn'>
    Click mee too See the update
    </button>
  </React.Fragment>)
};

export default UseStateBasics;
