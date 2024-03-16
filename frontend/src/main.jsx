import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './css/general.css'
import './css/home.css'
import './css/glass.css'
import './css/examples.css'
import './css/assignments.css'
import './css/info.css'
import './css/myprofil.css'
import './css/mylearning.css'
import './css/newgrade.css'
import './css/toast.css'
import './css/newtest.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
