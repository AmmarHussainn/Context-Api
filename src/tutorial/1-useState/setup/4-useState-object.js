import React, { useState } from 'react';

const UseStateObject = () => {

 const [person, setPerson] = useState({
   name :'Ammar Hussain',
   Age:19,
   messeg : 'Hello world'
 })
  const updateMee =()=>{
    setPerson ({...person,messeg :'Hey I am updated'})
  }
  return(<>
    <h3>{person.name}</h3>
    <h3>{person.Age}</h3>
    <h3>{person.messeg}</h3>
    <button onClick={updateMee}>Click me too change thee message</button>
    </>)
};

export default UseStateObject;
