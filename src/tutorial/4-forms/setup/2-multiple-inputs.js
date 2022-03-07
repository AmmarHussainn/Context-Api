import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person,setPerson] = useState({ firstName:'', email :'', age:'' });
  const [people, setPeople] = useState([]);
  const [User, setUser] =  useState({UserName : '', Password : ''});
 const handleChange =(e)=>{
      const name = e.target.name
      const value = e.target.value
      setPerson({...person,[name]:value})
      console.log(name,value)
    }
 const handleSubmit = (e)=>{
   e.preventDefault();
   console.log(e,"event rigger")
   console.log(person,"hey I am the current value standing on your input")
   if (person.firstName && person.age && person.email) {
     const newPerson = {...person,id: new Date().getTime().toString()}
     setPeople([...people,newPerson])
     setPerson({firstName:'',email:'',age:''})
   }
 }
 const handleChangeForUser =(e)=>{
   e.preventDefault();
    const name = e.target.name
    const value = e.target.value
    
    setUser({...User,[name]:value})
    console.log(name,value)
 

 }
 const handleSubmitUser = (e)=>{
  e.preventDefault();
  console.log(e,"event rigger")
  console.log(User,"hey I am the current value standing on your input")
  if (User.UserName && User.Password) {
    const newUser = {...User,id: new Date().getTime().toString()}
    setPeople([...people,newUser])
    setUser({UserName:'',Password:''})
  }
}
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
               onChange={handleChange}
            />
          </div>
          <div className='form-control'>
          <label htmlFor='age'>Age : </label>
          <input
            type='age'
            id='age'
            name='age'
            value={person.age}
            onChange={handleChange}
          />
        </div>
          <button onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
      <article>
      <div className='form-control'>
      <label htmlFor='UserName'>UserName: </label>
      <input
        type='text'
        id='text'
        name='UserName'
        value={User.UserName}
        onChange={handleChangeForUser}
      />
    </div>
    
    <div className='form-control'>
    <label htmlFor='Password'>Password: </label>
    <input
      type='password'
      id='password'
      name='Password'
      value={User.Password}
      onChange={handleChangeForUser}
    />  </div>
    <button onClick={handleSubmitUser}>Login</button>
      </article>
    </>
  );
};

export default ControlledInputs;
