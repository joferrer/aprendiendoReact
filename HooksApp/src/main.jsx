import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

//import { HooksApp } from './HooksApp'
import { MainApp } from './09-context/MainApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>  
  
  </BrowserRouter>

)
