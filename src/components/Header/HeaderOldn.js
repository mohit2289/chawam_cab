import React, {useEffect,useState} from "react";
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState([]);

  const logout = async() => {
    localStorage.removeItem('userlogin');
    navigate('/');
    window.location.reload();
}

  useEffect(() => {
    const useremail = JSON.parse(localStorage.getItem('userlogin'));
    if (userlogin) {
      setUserlogin(useremail);
    }
  }, []);
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
            
            <span className="call-m"> <a target="_blank" href="tel:9813933404"> <img src="assets/img/icons8-telephone-64.png" className="img-fluid" alt="Logo" /><span className="contact-num"> <strong>+91 98139 33404</strong> </span></a></span>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-reg" to="/attach-taxi"><span><i className="fa-solid fa-taxi"></i></span>Attach Taxi</Link>
                {/* <a  href="/attach-taxi">Attach Taxi</a> */}
              </li>
              {!userlogin && 
              <li className="nav-item">
              <Link className="nav-link header-reg1" to="/Login"><span><i className="fa-regular fa-user"></i></span>Sign In</Link>
                {/* <a className="nav-link header-login " href="/Login" data-bs-toggle="modal" data-bs-target="#pages_edit"><span><i className="fa-regular fa-user"></i></span>Sign In</a> */}
              </li>
              }

              {userlogin && 
              <li className="nav-item">
              <Button varient="contained" color='error' onClick={logout} ><span><i className="fa-regular fa-user"></i></span>Logout</Button>
              </li>
              }

            </ul>
          </nav>
        </div>
        <span className="whatsapp-m"> <a target="_blank" href="https://api.whatsapp.com/send?phone=8294202824"> <img src="assets/img/icons8-whatsapp-48.png" className="img-fluid" alt="Logo" /> </a></span>
      </header>
    </>
  )
}
export default Header;