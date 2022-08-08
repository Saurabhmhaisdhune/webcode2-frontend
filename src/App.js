import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

let initialValue={
  name:"",
  email:"",
  password:""
}

function App() {
  const [signdata,setSigndata]=useState(initialValue);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setSigndata({...signdata,[e.target.name]:e.target.value});
  };
  const handleSubmit=()=>{
    axios
    .post("https://saurabhtheater.herokuapp.com/register/data",JSON.stringify(signdata),
    {
      headers:{
        "Content-type":"application/json"
      }})
      .then(()=>setSigndata(initialValue));
    };
    const next=() => {navigate("/")};
  
  return(
  <>
  <div id='title'>BooK MY SHoW</div>
  <div id='login'>
  <h2 id='log'>Sign in</h2>
  <form >
  <label id='text1'>Full Name:</label>
  <br/>
  <input 
  type="text" 
  onChange={handleChange}
  class="form-control" 
  name='name'
  id='all'
  placeholder="Enter your Full Name"/>
  <br/>
  
  <label id='text1'>Email ID:</label>
  <br/>
  <input 
  type="email" 
  onChange={handleChange}
  class="form-control" 
  name='email'
  id='all'
  placeholder="Enter your Email ID"/>
  <br/>

  <label id='text1'>Password:</label><br/>
  <input 
  type="password" 
  onChange={handleChange}
  class="form-control" 
  name='password'
  id='all'
  placeholder="Enter your Password"/>
  <br/>

  <input 
  type="submit"
  onClick={()=>{handleSubmit();next();}} 
  placeholder="Submit"
  />
  
  </form>
  </div>
    </>
      );
}

export default App;
