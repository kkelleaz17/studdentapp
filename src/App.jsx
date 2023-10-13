import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes,Outlet } from 'react-router-dom'
import NavBar from './Comps/NavBar'
import Footer from './Comps/Footer'
import {useUser} from './Hooks/useUser'
import { useNavigate,useLocation } from 'react-router-dom'
import Login from './Pages/Login'
import Create from './Pages/Create'
import List from './Pages/List'
import Home from './Pages/Home'













function App() {
   
  
  return (
    <>
      <NavBar />
      <div className='h-screen'>
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Create' element={<Create />}/>
            <Route path='/StudentList' element={<List />}/>
            <Route path='*' element={<h1>no page found</h1>}/>
        </Routes>
        </div>

      <Footer />
      </>
  )
}



export default App
