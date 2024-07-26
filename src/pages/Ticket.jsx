import React,{useEffect,useState} from "react";
import { useLocation } from 'react-router-dom';
import {getBookingDetailsById} from '../services/booking/index';
import moment from 'moment';

const Ticket = () => {
    const { state } = useLocation();
    const { bookingId } = state;
    const [bookingDetails, setBookingDetails] = useState([])
    
    useEffect(() => {
        getBookingDetails();
    }, [])
 
    const getBookingDetails = async() => {
        const result =  await getBookingDetailsById(bookingId);
      
        if(result.data.length > 0){
            result.data[0].travel_date  = moment(result.data[0].travel_date).format('yyyy-MM-DD');
            result.data[0].return_date  = moment(result.data[0].return_date).format('yyyy-MM-DD');
            setBookingDetails(result.data[0]);
        }       
    }

    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Ticket Detail</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invoice-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">

                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-logo">
                                                <img src="assets/img/logo.svg" alt="logo" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="invoice-info">
                                                <h1>Ticket</h1>
                                                <h6>Ticket Number : <span>{bookingDetails.booking_reference}</span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="invoice-item-bill">
                                    <ul>
                                        <li>
                                            <div className="invoice-info">
                                                <h6>{bookingDetails.name}</h6>
                                                <p>
                                                    <br />
                                                    {bookingDetails.email},<br />
                                                    {bookingDetails.pickup_address}<br />
                                                    {bookingDetails.pickup_city_name}
                                                    <br />
                                                    {bookingDetails.mobile}<br />
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="invoice-info">                                               
                                                <p>
                                                    Triloki Travels<br />
                                                    L. I.C. 77, Chitragupt Nagar <br />
                                                    Kankarbagh Patna -800020<br />
                                                    6205198331<br />
                                                    trilokicabs@gmail.com<br />
                                                    www.trilokicabs.com
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="invoice-info">
                                                <p>Issue Date : <span>{bookingDetails.booking_date}</span></p>
                                                <p>Due Date : <span> {bookingDetails.travel_date}</span></p>
                                                <p>Payable Amount (Rs) : <span> {bookingDetails.estimated_final_price}</span></p>
                                                {/* <p>Recurring Invoice : <span> 15 Months</span></p>
                                                <p>PO Number : <span> 54515454</span></p> */}
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div className="invoice-table-wrap">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-center table-hover">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th>Trip Type</th>
                                                            {bookingDetails.local_package_name!=null && <th>Package Name</th> }
                                                            <th>Cab Type</th>
                                                            <th>Pickup Date|Time</th>
                                                            {bookingDetails.master_package_id=='4' && <th>Return Date|Time</th> }
                                                            <th>Pickup City</th>
                                                            {bookingDetails.master_package_id=='4' && <th>Return City</th> }
                                                            {bookingDetails.master_package_id=='1' && <th>Pickup Address</th>}
                                                            {bookingDetails.master_package_id=='2' &&  <th>Drop City</th>}    
                                                            {bookingDetails.master_package_id=='2' &&  <th>Min KM</th>}                                                        
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{bookingDetails.booking_type}</td>
                                                            {bookingDetails.local_package_name!=null && <td>{bookingDetails.local_package_name}</td> }
                                                            <td>{bookingDetails.vehicle_name}</td>
                                                            <td>{bookingDetails.travel_date} | {bookingDetails.travel_time}</td>
                                                            {bookingDetails.master_package_id=='4' && <td>{bookingDetails.return_date} | {bookingDetails.return_time}</td> }
                                                            <td>{bookingDetails.city_name}</td>
                                                            {bookingDetails.master_package_id=='4' && <td>{bookingDetails.drop_address}</td>}
                                                            {bookingDetails.master_package_id=='1' && <td>{bookingDetails.pickup_address}</td> }
                                                            {bookingDetails.master_package_id=='2' &&  <td>{bookingDetails.drop_address}</td>} 
                                                            {bookingDetails.master_package_id=='2' &&  <td>{bookingDetails.approx_after_km}</td>} 
                                                            <td><i className="fa fa-inr">{bookingDetails.estimated_final_price}</i></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="payment-details">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="invoice-terms">
                                                <h6>Payment Details</h6>
                                                <div className="invocie-note">
                                                    <p>Advance Amount <span><i className="fa fa-inr"></i> 0.00</span></p>
                                                    <p>Rest Amount <span><i className="fa fa-inr"></i> {bookingDetails.estimated_final_price}</span></p>
                                                    <p>payment to <span>Driver</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="invoice-total-box">
                                                <div className="invoice-total-inner">
                                                    <p>Fixed Cost <span><i className="fa fa-inr"></i> {bookingDetails.estimated_final_price}</span></p>
                                                    {bookingDetails.master_package_id=='2' || bookingDetails.master_package_id=='4' &&<p>Minimun KM <span>{bookingDetails.approx_after_km}</span></p> }
                                                    <p>Extra Per Km<span><i className="fa fa-inr"></i> {bookingDetails.approx_distance_charge}  </span></p>
                                                    {bookingDetails.master_package_id=='1' && <p>Extra Hour Charge<span><i className="fa fa-inr"></i> {bookingDetails.approx_hour_charge} </span></p> }
                                                    {/* <p>Driver Allowance <span><i className="fa fa-inr"></i> 0.00</span></p>
                                                    <p>Min billable KMs <span> <i className="fa fa-inr"></i> 0.00</span></p>
                                                    <p>State Entry Tax <span> <i className="fa fa-inr"></i> 0.00</span></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="invoice-total">
                                    <h4>Estimated Price <span><i className="fa fa-inr"></i>{bookingDetails.estimated_final_price}</span></h4>
                                </div>
                                <div>

                                    Triloki Cabs Transparency :
                                    <ol className=" list-group-numbered">
                                        <li className="list-group-item">EXCLUDES: TOLL TAX, STATE TAX, NIGHT CHARGES & DRIVER ALLOWANCE</li>
                                        <li className="list-group-item">EXCLUDES: PARKING (IF ANY), AIRPORT CHARGES (IF ANY)</li>

                                    </ol>


                                    Note :
                                    <ol className=" list-group-numbered">
                                        <li className="list-group-item">Additional pickup/drop off charges @ Rs. 200 per additional pickup/drop-off point in radius of 5 kms. (Not allowed beyond 5kms. If allowed then additional charges may be applicable.)
                                        </li>
                                        <li className="list-group-item">Waiting charges @ Rs. 220/hr after 30 mins. Billed on Hourly Basis.</li>




                                        <li className="list-group-item"> AC would be switched off in hilly areas.</li>
                                        <li className="list-group-item"> Balance amount needs to be paid at the beginning of the journey.</li>
                                        <li className="list-group-item"> Online Distance Charges are approximate. Extra Kilometre charges applicable.</li>
                                        <li className="list-group-item"> Conveyance fee will not be counted in the booking amount advance payment.</li>
                                        <li className="list-group-item"> Time & Distance Calculated from point to point Local Booking & Outstation Booking will not be Combine.</li>
                                        <li className="list-group-item"> Cancellation:-If you cancel the booking less than 24 hrs before the pickup time, 15% of the fare amount shall be applicable as cancellation charges. If you cancel your booking less than 4 hrs before the pickup time, No refund shall be applicable.</li>
                                        <li className="list-group-item"> You will receive the chauffeur details in your e-mail,& contact no at least 03 hours prior to the pik up time</li>
                                        <li className="list-group-item">Check Kilometers before you travel That is your Responsibility.</li>
                                        <li className="list-group-item"> In case, if you book cab is tatkal, we will take 2 to 3 hours to confirm it. If the vehicle is available then the booking will be confirmed otherwise your booking will be cancelled.In case your booking is made one hour or two before No Refund.
                                        </li>
                                        <li className="list-group-item"> Rates may increase due to high demand.</li>
                                        <li className="list-group-item">  In case of vehicle accident/break-down the company will provide an alternate vehicle or will refund the advance deposit if booking stands cancelled. The customer will have to wait as much time as the company will take to find another vehicle.
                                        </li>
                                    </ol>

                                </div>
                                <div className="invoice-note-footer">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="invocie-note">

                                            </div>
                                            <div className="invocie-note mb-0">

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="invoice-sign">
                                                <img className="img-fluid d-inline-block" src="assets/img/signature.png" alt="sign" />
                                                <span className="d-block">Authorised Signatory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Ticket;