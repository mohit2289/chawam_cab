import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 

export default function PopularFleet() { 
return ( 
	<div style={{ display: 'block', padding: 30, backgroundColor:'#F2F7F6' }}> 
	<div className='row'>
 <div className="rental-car-item col-sm-4">
                  <div className="listing-item mb-0 ">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="rental-car-item col-sm-4">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/sedan.png" className="img-fluid" alt="Sedan" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>12 / Per KM</span>
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
                          <a href="listing-details.html">SEDAN (4+1)</a>
                        </h3>
                        <h6>(Dzire, Etios Or Similar)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rental-car-item col-sm-4">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/Inova1.png" className="img-fluid" alt="Inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>18 / Per KM</span>
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
                          <a href="listing-details.html">Inova</a>
                        </h3>
                        <h6>(Or Similar)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="rental-car-item col-sm-4">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/Scorpio.png" className="img-fluid" alt="Scorpio-Ertiga" />
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
                          <a href="listing-details.html">Scorpio/Ertiga</a>
                        </h3>
                        <h6>(Or Similar)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="rental-car-item col-sm-4">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/tampu-traveler.png" className="img-fluid" alt="Tempu-Travels" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>30 / Per KM</span>
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
                          <a href="listing-details.html">Tempu / Travels</a>
                        </h3>
                        <h6>(Minimum 250km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
				</div>

	<h4>React-Bootstrap Carousel Component</h4> 
	<Carousel> 
		<Carousel.Item interval={1500} style={{display:'flex'}}> 

		<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

		
		</Carousel.Item> 
		<Carousel.Item interval={1500} style={{display:'flex'}}> 

		<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

				<div className="rental-car-item col-sm-3">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <a href="listing-details.html">
                        <img src="assets/img/cars/crysta-inova.png" className="img-fluid" alt="crysta-inova" />
                      </a>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text"><i className="fa fa-inr"></i>20 / Per KM</span>
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
                          <a href="listing-details.html">Crysta/Inova</a>
                        </h3>
                        <h6>(Minimum 200km)</h6>
                      </div>
                      <div className="listing-details-group Center text-center">
                        From: Patna
                      </div>
                      <div className="listing-button">
                        <a href="listing-details.html" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>

		
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}
