import React,{useState} from "react";

import LocalForm from "../components/HomeComponents/LocalForm";
import PointToPointForm from "../components/HomeComponents/PointToPointForm";
import TransferForm from "../components/HomeComponents/TransferForm";
import OutstationForm from "../components/HomeComponents/OutstationForm";
import PopularFleet from "../components/HomeComponents/PopularFleet";

// import {getAllcityList} from '../services/city/index';


const Home = () => {
  const [selectModule, setSelectModule] = useState('1');

  const handleClick = (evt,value) => {
      setSelectModule(value);
  }

  return (
    <>

      <section className="banner-section banner-slider">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-6" >
                <p className="explore-text"> <span><i className="fa-solid fa-thumbs-up me-2"></i></span>100% Trusted Cab Booking platform in Bihar</p>
                <h1>Find Your Best Cab <br />
                  <span>for Booking</span></h1>
                  <p style={{'font-size':'18px', 'color':'blue'}}>Call At : 8294202824 , 6205198331</p>
                  {/* <span className="whatsapp-m"> <a target="_blank" href="https://api.whatsapp.com/send?phone=8294202824"> <img src="assets/img/icons8-whatsapp-48.png" className="img-fluid" alt="Logo" /> </a></span>
                  <span className="call-m"> <a target="_blank" href="tel:6205198331"> <img src="assets/img/icons8-telephone-64.png" className="img-fluid" alt="Logo" /> </a></span> */}

              </div>
              <div className="col-lg-6">
                <div className="banner-imgs">
                  <img src="assets/img/car-right.png" className="img-fluid aos" alt="bannerimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section popular-services popular-explore pt-0 search-form">
        <div className="container">


          <div className="row justify-content-center">
            <div className="col-lg-12" >
              <div className="listing-tabs-group">
                <ul className="nav listing-buttons gap-3" data-bs-tabs="tabs" style={{ zIndex: '99' }}>
                  <li>
                    <a className={(selectModule=='1')? 'active' : ''} aria-current="true" data-bs-toggle="tab" name='local'
                    onClick={(e) => {
                        handleClick(e,'1')
                    }}>
                      <span>
                        <img src="assets/img/icons/airport-transfer.png" alt="Local" />
                      </span>
                      Local Hire
                    </a>
                  </li>
                   <li>
                    <a className={(selectModule=='2')? 'active' : ''} data-bs-toggle="tab" name='pointtopoint' 
                      onClick={(e) => {
                        handleClick(e,'2')
                    }} >
                      <span>
                        <img src="assets/img/icons/airport-transfer.png" alt="pointTopoint" />
                      </span>
                      One Way
                    </a>
                  </li>
                  <li>
                    <a className={(selectModule=='4')? 'active' : ''} data-bs-toggle="tab" name='outstation' 
                      onClick={(e) => {
                        handleClick(e,'4')
                    }} >
                      <span>
                        <img src="assets/img/icons/airport-transfer.png" alt="outstation" />
                      </span>
                      Outstation
                    </a>
                  </li>
                {/*  <li>
                    <a data-bs-toggle="tab" href="#outstation">
                      <span>
                        <img src="assets/img/icons/airport-transfer.png" alt="pointTopoint" />
                      </span>
                      Outstation
                    </a>
                  </li>
                  <li>
                    <a data-bs-toggle="tab" href="#transfer">
                      <span>
                        <img src="assets/img/icons/airport-transfer1.png" alt="transfer" />
                      </span>
                      Airport Transfer
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            {selectModule=='1' && <LocalForm  masterPackageId={selectModule} /> }           
            {selectModule=='2' && <PointToPointForm masterPackageId={selectModule} /> }
            {selectModule=='4' && <OutstationForm masterPackageId={selectModule} /> }
            {/* <OutstationForm />
            <TransferForm /> */}

          </div>
        </div>
      </section>

      <section className="section services">
        <div className="service-right">
          <img src="assets/img/bg/service-right.svg" className="img-fluid" alt="services right" />
        </div>
        <div className="container">

          <div className="section-heading">
            <h2>How It Works</h2>
            <p>If you are in the mood of exploring the different tourist spots of India, the best way to do this is by making an online cab booking.</p>
          </div>

          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12" >
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <img className="icon-img bg-secondary" src="assets/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>1. Choose Locations</h3>
                    <p>Local, Outstation, Transfer or Point to Point
                      simply select your trip type with Location.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" >
                <div className="services-group">
                  <div className="services-icon border-warning">
                    <img className="icon-img bg-warning" src="assets/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>2. Select Your Car</h3>
                    <p>Choose from wide range of cabs that will suit your travel needs.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" >
                <div className="services-group">
                  <div className="services-icon border-dark">
                    <img className="icon-img bg-dark" src="assets/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>3. Book your Car</h3>
                    <p>Confirm your booking by securely Pay with flexible payment options. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section facts-number">
        <div className="facts-left">
          <img src="assets/img/bg/facts-left.png" className="img-fluid" alt="facts left" />
        </div>
        <div className="facts-right">
          <img src="assets/img/bg/facts-right.png" className="img-fluid" alt="facts right" />
        </div>
        <div className="container">

          <div className="section-heading" >
            <h2 className="title text-white">Facts By The Numbers</h2>
            <p className="description text-white">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>

          <div className="counter-group">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 d-flex" >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <img src="assets/img/icons/bx-heart.svg" alt />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">1</span>K+</h4>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <img src="assets/img/icons/bx-car.svg" alt />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">100</span>+</h4>
                      <p>Count of Cars</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <img src="assets/img/icons/bx-headphone.svg" alt />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">10</span>+</h4>
                      <p>Car Center Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <img src="assets/img/icons/bx-history.svg" alt />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">200</span>K+</h4>
                      <p>Total Kilometer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      

      <section className="section popular-services ">
        <div className="container">

          <div className="section-heading" >
            <h2>Our Popular Fleets</h2>
            <p>Triloki Cabs leading Taxi Service Provider in Bihar for Sedan, SUV, and Corporate Fleets</p>
          </div>
<PopularFleet />
        </div>
      </section>


      <section className="section why-choose popular-explore">
        <div className="choose-left">
          <img src="assets/img/bg/choose-left.png" className="img-fluid" alt="Why Choose Us" />
        </div>
        <div className="container">

          <div className="section-heading">
            <h2>Why Choose Us</h2>
            <p>Making a difference</p>
          </div>

          <div className="why-choose-group">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 d-flex" >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-black">
                      <img src="assets/img/icons/bx-user-check.svg" alt />
                    </div>
                    <div className="choose-content">
                      <h4>Easy & Fast Booking</h4>
                      {/* <!--<p>Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality.</p>--> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex" >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-secondary">
                      <img src="assets/img/icons/bx-user-check.svg" alt />
                    </div>
                    <div className="choose-content">
                      <h4>Many Pickup Location</h4>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 d-flex" >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-primary">
                      <img src="assets/img/icons/bx-user-check.svg" alt />
                    </div>
                    <div className="choose-content">
                      <h4>Customer Satisfaction</h4>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section about-testimonial testimonials-section">
        <div className="container">

          <div className="section-heading" >
            <h2 className="title text-white">What People say about us? </h2>
            <p className="description text-white">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>

          <div className="owl-carousel about-testimonials testimonial-group mb-0 owl-theme">

            <div className="testimonial-item d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="quotes-head"></div>
                  <div className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="review-details">
                      <h6>Rabien Ustoc</h6>
                      <div className="list-rating">
                        <div className="list-rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>


            <div className="testimonial-item d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="quotes-head"></div>
                  <div className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="assets/img/profiles/avatar-03.jpg" className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="review-details">
                      <h6>Valerie L. Ellis</h6>
                      <div className="list-rating">
                        <div className="list-rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>


            <div className="testimonial-item d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="quotes-head"></div>
                  <div className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="assets/img/profiles/avatar-04.jpg" className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="review-details">
                      <h6>Laverne Marier</h6>
                      <div className="list-rating">
                        <div className="list-rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>


            <div className="testimonial-item d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="quotes-head"></div>
                  <div className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="assets/img/profiles/avatar-06.jpg" className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="review-details">
                      <h6>Sydney Salmons</h6>
                      <div className="list-rating">
                        <div className="list-rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>


            <div className="testimonial-item d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="quotes-head"></div>
                  <div className="review-box">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="assets/img/profiles/avatar-07.jpg" className="img-fluid" alt="img" />
                      </div>
                    </div>
                    <div className="review-details">
                      <h6>Lucas Moquin</h6>
                      <div className="list-rating">
                        <div className="list-rating-star">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                        </div>
                        <p><span>(5.0)</span></p>
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section faq-section bg-light-primary">
        <div className="container">

          <div className="section-heading" >
            <h2>Frequently Asked Questions </h2>
            <p>About Triloki Cabs Patna</p>
          </div>

          <div className="faq-info">
            <div className="faq-card bg-white" >
              <h4 className="">
                <a className="collapsed" >How many types of cabs are available in Patna?</a>
              </h4>
              <div className="">
                <p>There are around 3 (SEDAN, SUV, HATCHBACK etc.) types of cabs available in Patna. </p>
              </div>
            </div>
            <div className="faq-card bg-white" >
              <h4 className="">
                <a >In which areas do you operate?</a>
              </h4>
              <div>
                <p>Triloki Cabs oprate cabs in all over India. </p>
              </div>
            </div>
            <div className="faq-card bg-white" >
              <h4 className="">
                <a>Do I need to carry any ID proof to avail cab services on Triloki Caabs?</a>
              </h4>
              <div>
                <p>Yes, you need to carry a photo ID proof to help the driver identify you at the time of check-in.</p>
              </div>
            </div>
            <div className="faq-card bg-white" >
              <h4 className="">
                <a>Does the payment include all road trip expenses like toll charges, parking charges etc.?</a>
              </h4>
              <div>
                <p>No. The cab payment is exclusive of road trip expenses like toll charges, permit charges, parking fees, entry fees, service tax and any other government-levied taxes. All such payments are to be made directly to the driver by the user as and when needed. </p>
              </div>
            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Home;