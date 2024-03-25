import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Main from './Pages/Main'
import AdminDash from './Pages/AdminDash'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import TrainingProgram from './Pages/TrainingProgram'

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/adm' element={<AdminDash/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/train' element={<TrainingProgram/>}/>
</Routes>
</BrowserRouter>
  )
      
  
}

export default App
