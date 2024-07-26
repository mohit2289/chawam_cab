import React from "react";
import { Outlet } from 'react-router-dom';

// styles


// components
import Header from "../Header";
import Footer from "../Footer";
//import Sidebar from "../Footer";

// pages
//import Home from "../../pages/home";


// context
//import { useLayoutState } from "../../context/LayoutContext";


function Layout() {
  //var classes = useStyles();

  // global
  //var layoutState = useLayoutState();

  return (
    
        <>
          <Header />
          
          <Outlet />
            
          
            <Footer />
        </>
    
  );
}

export default Layout;
