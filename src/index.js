import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Details from './Details';
import Movies from './Movies';
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Routes>
             <Route path='/' element={<Login />}/>
             <Route path='/app' element={<App />}/>
             <Route path='/details' element={<Details/>}/>
             <Route path='/movie' element={<Movies/>}/>
        </Routes>
    </BrowserRouter>
    
);

reportWebVitals();
