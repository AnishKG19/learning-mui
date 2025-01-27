import React ,  { Children, useState } from 'react'

import {Typography  , AppBar , Tabs , Tab , Toolbar} from "@mui/material";



import './App.css'
import Layout from '../components2/Layout/Layout';
import Home from "./../pages/Home";
import About from "./../pages/About";

import Contact from "./../pages/Contact";
import Menu from "./../pages/Menu";
import PageNotFound from "./../pages/PageNotFound";

import Banner from "../Images/Banner.jpeg"



import { BrowserRouter ,Routes ,Route } from "react-router-dom"

function App() {
  const [value , setValue ] = useState();
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path = "/" element = {<Home/>}  />
          <Route path = "/about" element = {<About/>}  />
          <Route path = "/contact" element = {<Contact/>}  />
          <Route path = "/menu" element = {<Menu/>}  />
          <Route path = "*" element = {<PageNotFound/>}  />
        </Routes>
      
      </BrowserRouter>

    

    </div>
  )
}

export default App
