import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function PopularFleet() { 
return ( 
	<div style={{ display: 'block', padding: 30,}}> 
	<div className='row'>
 				<div className="rental-car-item col-sm-4 mt-2">
                  <div className="listing-item mb-0 ">
                    <div className="listing-img">
                      <a href="#">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>16 / Per KM</span>
                        </div>
                        {/* <!--
<div className="list-rating">
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<span>(5.0)</span>
</div>--> */}
                        <h3 className="listing-title">
                          <a href="#">SUV</a>
                        </h3>
                        <h6>(Per Day Limit 250km)</h6>
                        Extra Charge - Driver Night Charge (Rs.300/day)
                        (after 10:00 PM-6:00 AM)
                        Toll Tax, Parking, State Tax
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Delhi NCR
                      </div>
                      <div className="listing-button">
                        <a href="#" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="rental-car-item col-sm-4 mt-2">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="#">
                        <img src="assets/img/cars/sedan.png" className="img-fluid" alt="Sedan" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>13 / Per KM</span>
                        </div>
                        {/* <!--
<div className="list-rating">
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<span>(5.0)</span>
</div>--> */}
                        <h3 className="listing-title">
                          <a href="listing-details.html">SEDAN</a>
                        </h3>
                        <h6>(Per Day Limit 250KM)</h6>
                        Extra Charge - Driver Night Charge (Rs.300/day)
                        (after 10:00 PM-6:00 AM)
                        Toll Tax, Parking, State Tax
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Delhi NCR
                      </div>
                      <div className="listing-button">
                        <a href="#" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rental-car-item col-sm-4 mt-2">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="#">
                        <img src="assets/img/cars/Inova1.png" className="img-fluid" alt="Inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>11 / Per KM</span>
                        </div>
                        {/* <!--
<div className="list-rating">
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<i className="fas fa-star filled"></i>
<span>(5.0)</span>
</div>--> */}
                        <h3 className="listing-title">
                          <a href="listing-details.html">Hatchback</a>
                        </h3>
                        <h6>(Per Day Limit 250KM)</h6>
                        Extra Charge - Driver Night Charge (Rs.300/day)
                        (after 10:00 PM-6:00 AM)
                        Toll Tax, Parking, State Tax
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Delhi NCR
                      </div>
                      <div className="listing-button">
                        <a href="#" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				</div>

	
	</div> 
); 
}
