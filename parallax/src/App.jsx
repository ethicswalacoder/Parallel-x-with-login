import React from 'react';

import Body from './Body';
import NavBar from './NavBar';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import Signin from './Signin';

function App() {
 

  return (
   <div>
     <NavBar />
    <Body/> 
    <Routes>
        <Route path="/login" element={<Login/>}  />
        <Route path="/signin" element={<Signin/>} />
        </Routes>
  
   </div>
  )
}

export default App
