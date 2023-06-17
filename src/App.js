import React, { useState } from 'react';
import Form from './components/Form';
import Signup from './components/Signup';
import { Route,Routes } from 'react-router-dom';
import Weather from './components/Weather';
import { Link } from 'react-router-dom';
import './new.css'
const App = () => {
  const[log,upd]=useState(1)
  return (
    <>
   { log?
    <Link to='/form'>To login </Link>:''
   }
    
    <Routes>
      <Route path='/form' element={<Form data={upd}/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/maincourse' element={<Weather/>}></Route>
    </Routes>
    </>
  )
}

export default App
