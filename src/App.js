import React from 'react';
import Form from './components/Form';
import Signup from './components/Signup';
import { Route,Routes } from 'react-router-dom';
import Weather from './components/Weather';
import './new.css'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Form/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/maincourse' element={<Weather/>}></Route>
    </Routes>
    </>
  )
}

export default App
