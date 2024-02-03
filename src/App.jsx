import { useState } from 'react'
import {Navbar} from "./components/Navbar"
import './App.css'
import {Route,Routes} from "react-router-dom"

//import butterfly from '/public/butterfly2.gif'
//<a id="pic0" href="javascript:hidebutterfly()"><img src={butterfly} name="p1" border="0"></img></a>

import { About , Contact , Gallery, Home, Menu} from "./components/pages"
import MovingGif from './components/butterfly'
import Popup from './components/popup'
function App() {
 
  return (
    <>
     <div className='App'>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/menu" element = {<Menu/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
        
      </Routes>
       </div>
      <MovingGif></MovingGif>
      <Popup></Popup>
      
     
    </>
  )
}

export default App