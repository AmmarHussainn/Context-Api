import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName ,setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people, setPeople] =  useState([])

  const handleSubmitEvent = (e)=>{
    e.preventDefault();
    console.log('Hello World')
    console.log(firstName,"first name here")
    console.log(email,"Email here")
    if (firstName && email) {
      const person = {id: new Date().getTime().toString(),firstName,email}
      console.log(people)
      setPeople((people)=>{
        return[...people,person]
      })
    }
    else{
      console.log('Emplty values')
    }
  }

  return <>
  <article>
  <form className='form' onSubmit={handleSubmitEvent}>
    <div className='form-control'>
    <label htmlFor='firstName'>
    Name: 
    </label>
    <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
    <div className='form-control'>
    <label htmlFor='Email'>
    Email: 
    </label>
    <input type='text' id='Email' name='Email' value={email}
     onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    <button type='submit' >add Person</button>
  </form>
  {people.map((person,index)=>{
    const {id, firstName,email} = person
  return(<div className='items' key={id}>
    
    <h4>{firstName}</h4>
    <p>{email}</p>
    </div>)
  })}
  </article>
  </>
};

export default ControlledInputs;
