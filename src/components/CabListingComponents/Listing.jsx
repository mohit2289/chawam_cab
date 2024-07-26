import React from "react";
import { vehicleFareContext } from '../HomeComponents/LocalForm'
import { ImportExport } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Listing = (props) => {
    const navigate = useNavigate();

    const vehicleList = props.vehicleData;
    const searchFormData = props.searchFormData;
    const booknow = (index) =>{
        let selectedVehicleDetails;
        if(index){
          selectedVehicleDetails  = vehicleList.data[index];
        }
         navigate('/traveller-details', { state: { postdata: searchFormData, selectedVehicle: selectedVehicleDetails }});
    }
    return (
        <>
            <div className="col-xl-12 col-lg-12 col-sm-12 col-12 ">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-12" style={{ backgroundColor: '#fff', marginBottom: '10px', padding: '5px', borderRadius: '5px' }} >
                            <div className="sorting-div">
                                <div className="row d-flex align-items-center">
                                    <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                                        <div className="count-search">
                                            <p>Showing <span>1-8</span> of 10 Results</p>
                                        </div>

                                    </div>
                                    <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                                        <div className="product-filter-group">
                                            <div className="sortbyset">
                                                <span className="sortbytitle">Show: </span>
                                                <div className="sorting-select select-one">
                                                    <select className="form-control select">
                                                        <option>5</option>
                                                        <option>10</option>
                                                        <option>15</option>
                                                        <option>20</option>
                                                    </select>
                                                </div>
                                                <div className="sorting-select select-two">
                                                    <select className="form-control select">
                                                        <option>Low to High</option>
                                                        <option>High to Low</option>
                                                    </select>
                                                </div>
                                                <div className="sorting-select select-three">
                                                    <select className="form-control select">
                                                        <option>Popular</option>
                                                        <option>Toyota Camry SE 350</option>
                                                        <option>Audi A3 2019 new</option>
                                                        <option>Ferrari 458 MM Speciale</option>
                                                        <option>Chevrolet Camaro</option>
                                                        <option>Acura Sport Version</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {vehicleList.data.map((item, index) => (
                        <div className="listview-car">
                            <div className="card">
                                <div className="blog-widget d-flex">
                                    <div className="blog-img">
                                        <a href="listing-details.html">
                                        <img src={(item.vehicle_model_image)?'assets/img/cars/'+ item.vehicle_model_image: "assets/img/cars/carpic.jpg"} className="img-fluid" alt="blog-img" />
                                                                                  
                                        </a>
                                    </div>
                                    <div className="bloglist-content w-100">
                                        <div className="card-body">
                                            <div className="blog-list-head d-flex">
                                                <div className="blog-list-title">
                                                    <h3>{item.vehicle_name}</h3>
                                                    <h6>Category : <span>{item.vehicle_type}</span></h6>
                                                </div>
                                                <div className="blog-list-rate">
                                                    <div className="list-rating">
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <i className="fas fa-star filled"></i>
                                                        <span>(5.0)</span>
                                                    </div>
                                                    <h6><i className="fa fa-inr"></i>{item.totalbill} <span>/ {item.local_pkg_name}</span></h6>
                                                    <span>Fare Detail</span>
                                                </div>
                                            </div>
                                            <div className="listing-details-group d-flex">
                                                <div className="col-sm-3"><ul>
                                                    <li>
                                                        <span><i className="fa fa-user"></i></span>
                                                        <p> 4+1</p>
                                                    </li>
                                                    <li>
                                                        <span><i className="fa fa-briefcase"></i></span>
                                                        <p>4</p>
                                                    </li>

                                                    <li>
                                                        <span><i className="fa-solid fa-fan"></i></span>
                                                        <p>AC</p>
                                                    </li>



                                                </ul></div>
                                                <div className="col-sm-6"></div>
                                                <div className="listing-button col-md-3 float-end" style={{ float: 'right' }}>
                                                    <button type="submit" className="btn btn-order" onClick={()=>{booknow(`${index}`)}}><span><i className="feather-calendar me-2"></i></span>Book Now</button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="listview-car">
                        <div className="card">
                            <div className="blog-widget d-flex">
                                <div className="blog-img">
                                    <a href="listing-details.html">
                                        <img src="assets/img/cars/carpic.jpg" className="img-fluid" alt="blog-img" />
                                    </a>
                                </div>
                                <div className="bloglist-content w-100">
                                    <div className="card-body">
                                        <div className="blog-list-head d-flex">
                                            <div className="blog-list-title">
                                                <h3><a href="#"> Maruti Suzuki Swift Dzire OR SIMILAR </a></h3>
                                                <h6>Category : <span>SEDAN</span></h6>
                                            </div>
                                            <div className="blog-list-rate">
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                                <h6><i className="fa fa-inr"></i>800 <span>/ 4Hr-40KM</span></h6>
                                                <span>Faee Detail</span>
                                            </div>
                                        </div>
                                        <div className="listing-details-group d-flex">
                                            <div className="col-sm-3"><ul>
                                                <li>
                                                    <span><i className="fa fa-user"></i></span>
                                                    <p> 4+1</p>
                                                </li>
                                                <li>
                                                    <span><i className="fa fa-briefcase"></i></span>
                                                    <p>4</p>
                                                </li>

                                                <li>
                                                    <span><i className="fa-solid fa-fan"></i></span>
                                                    <p>AC</p>
                                                </li>



                                            </ul></div>
                                            <div className="col-sm-6"></div>
                                            <div className="listing-button col-md-3 float-end" style={{ float: 'right' }}>
                                                <a href="travel-detail.html" type="sumit" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="listview-car">
                        <div className="card">
                            <div className="blog-widget d-flex">
                                <div className="blog-img">
                                    <a href="listing-details.html">
                                        <img src="assets/img/cars/carpic.jpg" className="img-fluid" alt="blog-img" />
                                    </a>
                                </div>
                                <div className="bloglist-content w-100">
                                    <div className="card-body">
                                        <div className="blog-list-head d-flex">
                                            <div className="blog-list-title">
                                                <h3><a href="#"> Maruti Suzuki Swift Dzire OR SIMILAR </a></h3>
                                                <h6>Category : <span>SEDAN</span></h6>
                                            </div>
                                            <div className="blog-list-rate">
                                                <div className="list-rating">
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <i className="fas fa-star filled"></i>
                                                    <span>(5.0)</span>
                                                </div>
                                                <h6><i className="fa fa-inr"></i>800 <span>/ 4Hr-40KM</span></h6>
                                                <span>Faee Detail</span>
                                            </div>
                                        </div>
                                        <div className="listing-details-group d-flex">
                                            <div className="col-sm-3"><ul>
                                                <li>
                                                    <span><i className="fa fa-user"></i></span>
                                                    <p> 4+1</p>
                                                </li>
                                                <li>
                                                    <span><i className="fa fa-briefcase"></i></span>
                                                    <p>4</p>
                                                </li>

                                                <li>
                                                    <span><i className="fa-solid fa-fan"></i></span>
                                                    <p>AC</p>
                                                </li>



                                            </ul></div>
                                            <div className="col-sm-6"></div>
                                            <div className="listing-button col-md-3 float-end" style={{ float: 'right' }}>
                                                <a href="travel-detail.html" type="sumit" className="btn btn-order"><span><i className="feather-calendar me-2"></i></span>Book Now</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>

                {/* <div className="blog-pagination">
                    <nav>
                        <ul className="pagination page-item justify-content-center">
                            <li className="previtem">
                                <a className="page-link" href="#"><i className="fas fa-regular fa-arrow-left me-2"></i> Prev</a>
                            </li>
                            <li className="justify-content-center pagination-center">
                                <div className="page-group">
                                    <ul>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="active page-link" href="#">2 <span className="visually-hidden">(current)</span></a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">5</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nextlink">
                                <a className="page-link" href="#">Next <i className="fas fa-regular fa-arrow-right ms-2"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div> */}

            </div>
        </>
    )
}

export default Listing;