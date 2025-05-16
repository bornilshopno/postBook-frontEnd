import { StrictMode } from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './Components/Core/Layout'
import Profile from './Components/MyProfile/Profile'
import ReactDOM from "react-dom/client";
import Routings from './Components/Core/Routings'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
     <Routings></Routings>
    </BrowserRouter>
  </StrictMode>,
)
