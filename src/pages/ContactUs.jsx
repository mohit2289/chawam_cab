import React from "react";

const ContactUs = () => {
    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Contact Us</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <section className="booking-section">
                <div className="container">

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-booking" role="tabpanel" aria-labelledby="pills-booking-tab">
                           
                                <div className="booking-title">
                                    <h3>Contact us</h3>
                                </div>
                            <div>
                            <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header bg-defolt bg-warning text-white"><i class="fa fa-envelope"></i> Contact us.
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required/> 
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="6" required></textarea>
                        </div>
                        <div class="mx-auto">
                        <button type="submit" class="btn btn-primary text-right">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-4">
            <div class="card bg-light mb-3">
                <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-home"></i> Address</div>
                <div class="card-body">
                <p>Triloki Travels </p>
                    <p>L. I.C. 77, Chitragupt Nagar Kankarbagh </p>
                    <p>Patna -800020</p>
                    <p>Bihar</p>
                    <p>Email : contact@trilokicabs.com</p>
                    <p>Tel. +91 829 4202 824, 620 5198 331</p>

                </div>

            </div>
        </div>
    </div>

                            </div>
                              
                           

                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default ContactUs;