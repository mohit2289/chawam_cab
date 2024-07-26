import React from "react";
// import class from "BookingStyle";

const BookingConfirmation = () =>{


return(
<>


    <div className="modal modal-content" style={{textAlign: 'center', width: '25%', margin: '50px auto'}}>
    <div className="modal-body">
    <div className="payment-success">
    <span className="check"><i class="fa-solid fa-check-double"></i></span>
    <h5>Booking Successful</h5>
    <p>You Payment has been successfully done.
    Trasaction id :<span> #5064164454</span>
    </p>
    <div className="order-confirm">
    <a href="booking.html">Go to Order Confirmation<i class="fa-solid fa-arrow-right ms-2"></i></a>
    </div>
    </div>
    </div>
    </div>
   



</>
)
}

export default BookingConfirmation;