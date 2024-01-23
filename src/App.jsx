import { useState } from 'react'
import {Navbar} from "./components/Navbar"
import './App.css'
import {Route,Routes} from "react-router-dom"



import { About , Contact , Gallery, Home, Menu} from "./components/pages"
function App() {
 
  return (
    <>
     <div className='App'>
      <Navbar/>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/menu" element = {<Menu/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
        
      </Routes>

     </div>
    </>
  )
}

export default App