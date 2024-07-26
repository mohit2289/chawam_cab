import React from "react";

const Filter = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
                <form action="#" autocomplete="off" className="sidebar-form">

                    <div className="sidebar-heading">
                        <h3>What Are You Looking For</h3>
                    </div>
                    <div className="product-search">
                        <div className="form-custom">
                            <input type="text" className="form-control" id="member_search1" placeholder />
                            <span><img src="assets/img/icons/search.svg" alt="img" /></span>
                        </div>
                    </div>
                    <div className="accordion" id="accordionMain1">
                        <div className="card-header-new" id="headingOne">
                            <h6 className="filter-title">
                                <a href="javascript:void(0);" className="w-100" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Car Category
                                    <span className="float-end"><i className="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </h6>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
                            <div className="card-body-chat">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="checkBoxes1">
                                            <div className="selectBox-cont">
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Tesla
                                                </label>
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Ford
                                                </label>
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Mercediz Benz
                                                </label>
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Audi
                                                </label>

                                                <div className="view-content">
                                                    <div className="viewall-One">
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark"></span> Kia
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark"></span> Honda
                                                        </label>
                                                        <label className="custom_check w-100">
                                                            <input type="checkbox" name="username" />
                                                            <span className="checkmark"></span> Toyota
                                                        </label>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionMain2">
                        <div className="card-header-new" id="headingTwo">
                            <h6 className="filter-title">
                                <a href="javascript:void(0);" className="w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Car Type
                                    <span className="float-end"><i className="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </h6>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                            <div className="card-body-chat">
                                <div id="checkBoxes2">
                                    <div className="selectBox-cont">
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="username" />
                                            <span className="checkmark"></span> Convertible
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="username" />
                                            <span className="checkmark"></span> Crossover
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="username" />
                                            <span className="checkmark"></span> Sedan
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="username" />
                                            <span className="checkmark"></span> Wagon
                                        </label>

                                        <div className="view-content">
                                            <div className="viewall-One">
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Pickup
                                                </label>
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> Wagon
                                                </label>
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span> SUV
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionMain3">
                        <div className="card-header-new" id="headingThree">
                            <h6 className="filter-title">
                                <a href="javascript:void(0);" className="w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    Capacity
                                    <span className="float-end"><i className="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </h6>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample3">
                            <div className="card-body-chat">
                                <div id="checkBoxes3">
                                    <div className="selectBox-cont">
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span> 1-4
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span> 1-6
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span> 4-6
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span>4-8
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span>8+
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span> 10+
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="bystatus" />
                                            <span className="checkmark"></span> 15+
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="accordion" id="accordionMain4">
                        <div className="card-header-new" id="headingFour">
                            <h6 className="filter-title">
                                <a href="javascript:void(0);" className="w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Price
                                    <span className="float-end"><i className="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </h6>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample4">
                            <div className="card-body-chat">
                                <div className="filter-range">
                                    <input type="text" className="input-range" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionMain5">
                        <div className="card-header-new" id="headingFive">
                            <h6 className="filter-title">
                                <a href="javascript:void(0);" className="w-100 collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    Rating
                                    <span className="float-end"><i className="fa-solid fa-chevron-down"></i></span>
                                </a>
                            </h6>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample5">
                            <div className="card-body-chat">
                                <div id="checkBoxes4">
                                    <div className="selectBox-cont">
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="category" />
                                            <span className="checkmark"></span>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="category" />
                                            <span className="checkmark"></span>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="category" />
                                            <span className="checkmark"></span>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </label>
                                        <label className="custom_check w-100">
                                            <input type="checkbox" name="category" />
                                            <span className="checkmark"></span>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </label>
                                        <div className="view-content">
                                            <div className="viewall-Two">
                                                <label className="custom_check w-100">
                                                    <input type="checkbox" name="username" />
                                                    <span className="checkmark"></span>
                                                    <i className="fas fa-star filled"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Filter;