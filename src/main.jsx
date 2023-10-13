import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {UserContext, useUser} from './Hooks/useUser'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
     <BrowserRouter>
       <App />
     </BrowserRouter>
  </UserContext>
  ,
)
