import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
 const navigate =useNavigate();

 const next=() => {navigate("/movie")};
 const nextone=() => {navigate("/app")};

  return (<div>
    <div id='title'>BooK MY SHoW</div>
    <div id='login'>
     <label id='text1'>Email ID:</label>
  <br/>
  <input 
  type="email" 
  class="form-control" 
  name='email'
  id='all'
  placeholder="Enter your Email ID"/>
  <br/>

  <label id='text1'>Password:</label><br/>
  <input 
  type="password" 
  class="form-control" 
  name='password'
  id='all'
  placeholder="Enter your Password"/>
  <br/>

<button onClick={next}>Login</button>
<button onClick={nextone}>Sign UP</button>
  </div>
      </div>
  );
}