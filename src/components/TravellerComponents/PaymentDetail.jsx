import React from "react";

const PaymentDetail = ({ vehicleSelected, confirmBooking, searchData }) => {
    const vehicleData = vehicleSelected;

    return (
        <>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-12 theiaStickySidebar booking-details">
                <div className="booking-title">
                    <h3>Booking Details</h3>
                </div>
                <div className="booking-info">

                    <div className="col-md-12 col-sm-6  d-flex">
                        <label className="col-sm-6"><strong>Booking Type: </strong></label>
                        <label className="col-sm-6">{searchData.module_name}</label>
                    </div>
                    <div className="col-md-12 col-sm-6 d-flex padding-0">
                        <label className="col-sm-6"><strong>Vehicle Type : </strong></label>
                        <label className="col-sm-6">{vehicleData.vehicle_type}</label>
                    </div>

                    {vehicleData.min_distance != undefined && <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Distance (km): </strong></label>
                        <label className="col-sm-6"> {vehicleData.min_distance}</label>
                    </div>
                    }
                    {vehicleData.per_km_charge != undefined && <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Per Km charge: </strong></label>
                        <label className="col-sm-6"> <i className="fa fa-inr"></i> {vehicleData.per_km_charge}</label>
                    </div>
                    }

                    {vehicleData.minimum_charge > 0 && <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Cost : </strong></label>
                        <label className="col-sm-6"><i className="fa fa-inr"></i> {vehicleData.minimum_charge}</label>
                    </div>
                    }
                    <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>GST Charge@0% : </strong></label>
                        <label className="col-sm-6"><i className="fa fa-inr"></i> 0</label>
                    </div>

                    {vehicleData.driver_allowns > 0 && <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Driver Allowns </strong></label>
                        <label className="col-sm-6"><i className="fa fa-inr"></i> {vehicleData.driver_allowns}</label>
                    </div>
                    }

                    {/* <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Night Charge: </strong></label>
                        <label className="col-sm-6"><i className="fa fa-inr"></i> 0</label>
                    </div> */}
                    <div className="col-md-12 col-sm-6 d-flex">
                        <label className="col-sm-6"><strong>Total Trip Fare : </strong></label>
                        <label className="col-sm-6"><i className="fa fa-inr"></i> {vehicleData.totalbill}</label>
                    </div>

                    <div className="payment-btn">
                        <button className="btn btn-primary submit-review w-100" type="button" data-bs-toggle="modal" data-bs-target="#pages_edit" onClick={confirmBooking}>Confirm Booking</button>
                    </div>

                </div>


            </div>
        </>

    )
}

export default PaymentDetail;