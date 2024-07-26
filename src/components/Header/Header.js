import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="/" className="navbar-brand logo">
                <img src="assets/img/Triloki_cab_logo.png" className="img-fluid" alt="Logo" />
              </a>
              <a href="/" className="navbar-brand logo-small">
                <img src="assets/img/logo-small.png" className="img-fluid" alt="Logo" />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="/" className="menu-logo">
                  <img src="assets/img/Triloki_cab_logo.png" className="img-fluid" alt="Logo" />
                </a>
                <a id="menu_close" className="menu-close" href="javascript:void(0);"> <i className="fas fa-times"></i></a>
              </div>
              <ul className="main-nav">
                <li className="active"><Link to="/">Home</Link></li>
                <li className=""><Link to="/aboutus">About Us</Link></li>
                {/* <li><a href="/AboutUs">Enquiry</a></li> */}
                <li><Link to="/ContactUs">Contact</Link></li>
              </ul>
            </div>
            <span className="whatsapp-m"> <a target="_blank" href="https://api.whatsapp.com/send?phone=8294202824"> <img src="assets/img/icons8-whatsapp-48.png" className="img-fluid" alt="Logo" /> </a></span>
            <span className="call-m"> <a target="_blank" href="tel:6205198331"> <img src="assets/img/icons8-telephone-64.png" className="img-fluid" alt="Logo" /> </a></span>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-reg" to="/attach-taxi"><span><i className="fa-solid fa-taxi"></i></span>Attach Taxi</Link>
                {/* <a  href="/attach-taxi">Attach Taxi</a> */}
              </li>
              <li className="nav-item">
              <Link className="nav-link header-reg" to="/Login"><span><i className="fa-regular fa-user"></i></span>Sign In</Link>
                {/* <a className="nav-link header-login " href="/Login" data-bs-toggle="modal" data-bs-target="#pages_edit"><span><i className="fa-regular fa-user"></i></span>Sign In</a> */}

              </li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header;