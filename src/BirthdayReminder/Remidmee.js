import React,{useState} from "react";


const BirthdayReminder = ()=>{
    const data = [
        { id: 1, name: 'john' ,messege : "Happy Birthday" },
        { id: 2, name: 'peter',messege : "Happy Birthday" },
        { id: 3, name: 'susan' ,messege : "Happy Birthday" },
        { id: 4, name: 'anna', messege : "Happy Birthday" },
      ];
      
    const [user,setUser] = useState(data)
 return(
     <>
      {user.map((user)=>{
          const {id,name,messege} = user
          return(
              <div key={id} className="item">
             <h4>{name} </h4>
            <h4>{messege}</h4>
              </div>
          )
      })}
      <button onClick={()=>setUser([])} className="btn">Click mee To Remove all wishes</button>
     </>
 )

}
export default BirthdayReminder