import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Gallery, Home, FoodChart } from "./components/pages";
import Popup from "./components/popup";
import Footer from "./components/footer";
import {Helmet} from "react-helmet";
import Login_popup from "./components/pages/Login_popup";
import Header from "./components/Header";
import PlaceOrder from "./components/pages/PlaceOrder";
import FoodBasketFinal from "./components/pages/FoodBasketFinal";


function App() {

  const [showLogin,setShowLogin ] = useState(false)
  return (
    <>
    {showLogin?<Login_popup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
        <Helmet>
          <title>The Padosan</title>
          <meta name="description" content="Nested component" />
        </Helmet>
        <meta name="description" content="Padosan website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foodChart" element={<FoodChart />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login_popup" element={<Login_popup />} />
          <Route path="/header" element={<Header />} />
          <Route path="/FoodBasketFinal" element={<FoodBasketFinal/>} />
          <Route path="/PlaceOrder" element={<PlaceOrder/>} />
        </Routes>
      </div>
      
      
      <Footer></Footer>
      
    </>
  );
}

export default App;