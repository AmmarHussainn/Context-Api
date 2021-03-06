import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = useState(data);
  const removeItem = (id)=>{
   

    setPeople((oldPeople)=>{
    let newPeople = oldPeople.filter((person)=>person.id !== id);
    return newPeople
    })
  };
 return(<>
  {people.map((person)=>{
    const {id,name} =person;
    return (<div key={id} className='item'> 
      <h4>{name}</h4>
      <button onClick={()=>removeItem(id)}>Remove it</button>
      </div>)
  })}
  <button className='btn'onClick={()=>setPeople([])}> click mee to remove all items</button>
  </>)
};

export default UseStateArray;
