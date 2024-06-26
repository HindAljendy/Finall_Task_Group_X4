import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Finall_Task_Group_X4">
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
