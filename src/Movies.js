import React from 'react'
import Cards from './Cards'
import { useNavigate } from 'react-router-dom';


export default function Movies() {
 const navigate =useNavigate();
  return (<div>
     <div id='title'>BooK MY SHoW</div>
     <div id='movielist'>Available Movies on Theater</div>
      <Cards />
      <div id='btnn'>
      <div id='movielist'>click on below button to select movie</div>
      <button id='btn'  onClick={()=>navigate("/details")}>NEXT</button>
      </div>
      </div>
  );
}
