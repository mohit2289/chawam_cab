import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <div className="footer-top aos" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6">

                                        <div className="footer-widget footer-menu">
                                            <h5 className="footer-title">About Company</h5>
                                            <p className="justify">
                                                Welcome to Triloki Cabs, your premier choice for reliable and comfortable transportation services.
                                                We take pride in providing exceptional taxi services that prioritize safety, convenience, and customer
                                                satisfaction. At Triloki Cabs, we understand the importance of a trustworthy and efficient transportation solution.
                                                Whether you need a ride to the airport, a business meeting, or a leisurely outing, our professional drivers are
                                                dedicated to delivering a seamless and enjoyable ...<Link  to={"/AboutUs"} >Read More</Link>
                                            </p>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-md-6">

                                        <div className="footer-widget footer-menu">
                                            <h5 className="footer-title">Quick links</h5>
                                            <ul>
                                            <li>
                                                    <Link  to={"/AboutUs"} >About Us</Link>
                                                </li>
                                                
                                                <li>
                                                    <Link className="nav-link header-reg" to="/attach-taxi#">Attach Taxi</Link>
                                                </li>

                                                <li>
                                                    <Link  to={"./cancellation"} >Cancellation</Link>
                                                </li>
                                                <li>
                                                    <Link  to={"./policy"} >Privacy Policy</Link>
                                                </li>
                                                <li>
                                                    <Link to={'./termscondition#'}>Terms & Conditions</Link>
                                                </li>
                                                <li>
                                                    <Link  to={"/ContactUs"} >Contact Us</Link>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="footer-contact footer-widget">
                                    <h5 className="footer-title">Contact Info</h5>
                                    <div className="footer-contact-info">
                                        <div className="footer-address">
                                            <span><i className="feather-phone-call"></i></span>
                                            <div className="addr-info">
                                                <a href="tel:+1(888)7601940">+91 829 4202 824, 620 5198 331</a>
                                            </div>
                                        </div>
                                        <div className="footer-address">
                                            <span><i className="feather-mail"></i></span>
                                            <div className="addr-info">
                                                <a href="#">contact@trilokicabs.com/</a>
                                            </div>
                                        </div>
                                        <div className="update-form footer-address">
                                            <div className="addr-info">
                                                L. I.C. 77, Chitragupt Nagar Kankarbagh Patna -800020
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footer-social-widget">
                                        <h6>Connect with us</h6>
                                        <ul className="nav-social">
                                            <li>
                                                <a href="javascript:void(0)" target="_blank"><i className="fa-brands fa-facebook-f fa-facebook fi-icon"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" target="_blank"><i className="fab fa-instagram fi-icon"></i></a>
                                            </li>
                                            {/* <!--<li>
<a href="javascript:void(0)" target="_blank"><i className="fab fa-behance fi-icon"></i></a>
</li>--> */}
                                            <li>
                                                <a href="javascript:void(0)" target="_blank"><i className="fab fa-twitter fi-icon"></i> </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)" target="_blank"><i className="fab fa-linkedin fi-icon"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="container">

                        <div className="copyright">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>© 2023 Trilokicabs.com. All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="copyright-menu">
                                        <div className="vistors-details">
                                            <ul className="d-flex">
                                                <li><a href="#"><img className="img-fluid" src="assets/img/icons/paypal.svg" alt="Paypal" /></a></li>
                                                <li><a href="#"><img className="img-fluid" src="assets/img/icons/visa.svg" alt="Visa" /></a></li>
                                                <li><a href="#"><img className="img-fluid" src="assets/img/icons/master.svg" alt="Master" /></a></li>
                                                <li><a href="#"><img className="img-fluid" src="assets/img/icons/applegpay.svg" alt="applegpay" /></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;