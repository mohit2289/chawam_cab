//import logo from './logo.svg';
//import './App.css';
import React , { Component }  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cablisting from "./pages/Cablisting";
import TravellerDetails from "./pages/TravellerDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import Ticket from "./pages/Ticket";
import AttachTaxi from "./pages/AttachTaxi";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import Layout from "./components/Layout/Layout";
import Gallery from "./pages/Gallery";
//import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Cancellation from "./pages/Cancellation";
import Policy from "./pages/Policy";
import Termscondition from "./pages/Termscondition";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Aboutus from "./components/aboutus";

function App() {
  return (
    <div>
       <Header />
     <Routes>      
        
            <Route index  path="/" element={<Home />} />
            <Route path="/Cablisting" element={<Cablisting />} />
            <Route path="/traveller-details" element={<TravellerDetails />} />
            <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
            <Route path="/ticket-details" element={<Ticket />} />
            <Route path="/attach-taxi" element={<AttachTaxi />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/Gallery" element={<Gallery />} />
            {/* <Route path="/AboutUs" element={<AboutUs />} />  */}
            <Route path="/ContactUs" element={<ContactUs />} /> 
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/policy" element={<Policy />} />
         
            <Route path="/termscondition" element={<Termscondition />} />
            <Route  path="/aboutus" element={<Aboutus />}
        ></Route>
       </Routes>
<Footer/>
       
        {/* <Routes>
          <Route path="/cancellation" element={<Cancellation />} />
        </Routes>
    */}
    </div>
  );
}

export default App;
