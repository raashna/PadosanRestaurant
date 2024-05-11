import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Gallery, Home, FoodChart } from "./components/pages";
import MovingGif from "./components/butterfly";
import Popup from "./components/popup";
import Footer from "./components/footer";
import {Helmet} from "react-helmet";


function App() {
  return (
    <>
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foodChart" element={<FoodChart />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <MovingGif></MovingGif>
      <Popup></Popup>
      <Footer></Footer>
      <div>
     
      </div>
    </>
  );
}

export default App;