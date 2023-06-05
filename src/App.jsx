import { Home } from "./components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
//import Services from "./components/Services/Services";
import NavBar from   "./components/NavBar"
import DigitalMarketing from "./components/Services/DigitalMarketing/DigitalMarketing";
import Branding from "./components/Services/Branding/Branding";
import './App.css'
import AppDevelopment from "./components/Services/App Development/AppDevelopment";
import WebDevelopment from "./components/Services/WebDevelopment/WebDevelopment";
import GraphicDesign from "./components/Services/Graphic Design/GraphicDesign";
import Srvcs from "./components/Services/Srvcs";
import Aboutus from "./components/AboutUs/Aboutus";
import Contactus from "./components/ContactUs/Contactus";
import NewHome from "./components/NewHome/NewHome";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/aboutus" element={<Aboutus/>}/>  
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/services" element={<Srvcs/>} /> 
        <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/graphicdesign" element={<GraphicDesign/>} />
      </Routes>
        <NavBar />  
      </BrowserRouter>   
  </>
  )
}

export default App
