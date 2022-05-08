import React, { useState } from 'react'
import "./style.css";
const loginPage = () => {

    const [userRegistration, setuserRegistration] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    const [records,setRecords]=useState([]);
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setuserRegistration({...userRegistration,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecord = {...userRegistration,id: new Date().getTime().toString()}
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)
        setuserRegistration({firstname:" ",lastname:"",email:"",password:""})
       
    }
  return (
    <div className="form">
        <form action=" " onSubmit={handleSubmit}>
           
            <div className="input">
            <label htmlFor="email">Email</label>
            <input type="text"
            onChange={handleInput} 
            value={userRegistration.email}
            name="email" id="email">
            </input>
            </div>

            <div className="input">
            <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={handleInput} 
            value={userRegistration.password}
            name="password" id="password">
            </input>
            
            </div>
            <button className="button" type="submit">Sign Up</button>
        </form>
        <div>
         {
             records.map((curElem)=>{
                 const {firstname,lastname,email,phone,password}= curElem;
                 return(
                     <div className="showDataStyle" key={curElem.id}>
                        <p>{curElem.firstname}</p>
                        <p>{curElem.lastname}</p>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                         </div>
                 )
             })
         }
        </div>
     </div>
     
  )
}
export default loginPage
