import axios from 'axios';
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setIsUser] = useState('default user')
   
  // useEffect(()=>{
  //   fetch(url)
  //   .then((resp)=>{
  //     if (resp.status >=200 && resp.status <= 299){
  //       console.log(resp.status)
  //       return resp.json()
  //     }
  //     else{
  //       console.log("sdff")
  //       setIsLoading(false);
  //       setIsError(true);
  //       throw new Error(resp.statusText)
  //     }
  //   })
  //   .then(({login})=>{
  //     // const {login , ...rest} =user
  //     setIsUser(login)
  //     setIsLoading(false)
  //   })
  //   .catch((error)=> console.log(error))
  // },[]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const result = await axios(url);
        setIsUser(result.data.login);
        setIsLoading(false)
      }
      catch(error){
        setIsError(true);
        setIsLoading(false)
      }
    }
    fetchData();
  });
  if (isLoading) {
    return (<div>
      <h1>Loading...</h1>
      </div>)
  }
  if (isError) {
    return(
    <div>
    <h1>Error...</h1>
    </div>)
  }

  return(<div>
    <h1>{user}</h1>
    </div>)
};

export default MultipleReturns;
