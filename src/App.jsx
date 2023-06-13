import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom"; 
import NavBar from   "./components/NavBar"
import DigitalMarketing from "./components/Services/DigitalMarketing/DigitalMarketing";
import Branding from "./components/Services/Branding/Branding";
import './App.css'
import AppDevelopment from "./components/Services/App Development/AppDevelopment";
import WebDevelopment from "./components/Services/WebDevelopment/WebDevelopment";
import GraphicDesign from "./components/Services/Graphic Design/GraphicDesign";
import Aboutus from "./components/AboutUs/Aboutus";
import Contactus from "./components/ContactUs/Contactus";
import NewHome from "./components/NewHome/NewHome";
import Services2 from "./components/Services/Services2";

const App = () => {

  
  return (
    <>
       <BrowserRouter>
      <Routes>
        {/* Routes to Main components */}
        <Route path="/" element={<NewHome/>} /> 
        <Route path="/aboutus" element={<Aboutus/>}/>  
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/services" element={<Services2/>} /> 
        {/* Routes for Services */}
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/graphicdesign" element={<GraphicDesign/>} />
      </Routes>
        <NavBar/>
      </BrowserRouter>   
  </>
  )
}
export default App
