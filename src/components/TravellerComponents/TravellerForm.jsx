import React from "react";
import GenericInput from '../../common-components/form-elements/genericInput';

const TravellerForm = ({travellerForm, handlerChange,formerrors}) => {

    return (
        <>
            <div className="col-xl-8 col-lg-8 col-sm-12 col-12 ">

                <div className="booking-details ">

                    <div className="booking-form">
                        <div className="booking-title">
                            <h5>Enter Below details</h5>
                        </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Enter Name <span className="text-danger">*</span></label>
                                        <GenericInput type={'text'}
                                            name="name"
                                            placeholder="Entet Name"
                                            value={travellerForm.name}
                                            onChange={(e) => {
                                                handlerChange(e)
                                            }} /> 
                                    {formerrors.name && <div style={{color:'red'}}>{formerrors.name}</div>}
                                  
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Mobile Number <span className="text-danger">*</span></label>
                                        <GenericInput type={'text'}
                                            name="mobile"
                                            placeholder="Enter mobile"
                                            value={travellerForm.mobile}
                                            onChange={(e) => {
                                                handlerChange(e)
                                            }} />   
                                            {formerrors.mobile && <div style={{color:'red'}}>{formerrors.mobile}</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <GenericInput type={'text'}
                                            name="email"
                                            placeholder="Enter email"
                                            onChange={(e) => {
                                                handlerChange(e)
                                            }} /> 
                                          {formerrors.email && <div style={{color:'red'}}>{formerrors.email}</div>}  
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Number of Passengers <span className="text-danger">*</span></label>
                                            <GenericInput type={'text'}
                                                name="passenger"
                                                placeholder="Enter no of passenger"
                                                onChange={(e) => {
                                                    handlerChange(e)
                                                }} />  
                                            {formerrors.passenger && <div style={{color:'red'}}>{formerrors.passenger}</div>} 
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Pickup Address <span className="text-danger">*</span></label>
                                        <GenericInput type={'text'}
                                            name="from_address"
                                            placeholder="Enter pickup address"
                                            value={travellerForm.from_address}
                                            onChange={(e) => {
                                                handlerChange(e)
                                            }} />
                                            {formerrors.from_address && <div style={{color:'red'}}>{formerrors.from_address}</div>}    
                                    </div>
                                </div>
                               { travellerForm.master_package_id ==='2' && <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Drop off Address <span className="text-danger">*</span></label>
                                            <GenericInput type={'text'}
                                                name="to_address"
                                                placeholder="Enter to address"
                                                value={travellerForm.to_address}
                                                onChange={(e) => {
                                                    handlerChange(e)
                                            }} /> 
                                        {formerrors.to_address && <div style={{color:'red'}}>{formerrors.to_address}</div>}    
                                    </div>
                                </div>
                                }
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Pickup Date <span className="text-danger">*</span></label>
                                        <GenericInput type={'date'}
                                                name="travel_date"
                                                placeholder="Enter travel date"
                                                value={travellerForm.travel_date}
                                                onChange={(e) => {
                                                    handlerChange(e)
                                        }} /> 
                                        {formerrors.travel_date && <div style={{color:'red'}}>{formerrors.travel_date}</div>}                            
                                        </div>
                                </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Pickup Time <span className="text-danger">*</span></label>
                                            <GenericInput type={'time'}
                                                    name="travel_time"
                                                    placeholder="Enter time"
                                                    value={travellerForm.travel_time}                                               
                                                    onChange={(e) => {
                                                        handlerChange(e)
                                                }} /> 
                                                {formerrors.travel_time && <div style={{color:'red'}}>{formerrors.travel_time}</div>}                                   
                                            </div>
                                    </div>

                                    {travellerForm.return_date &&  <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Return Date <span className="text-danger">*</span></label>
                                            <GenericInput type={'date'}
                                                    name="return_date"
                                                    placeholder="Enter travel date"
                                                    value={travellerForm.return_date}
                                                    onChange={(e) => {
                                                        handlerChange(e)
                                            }} />
                                            {formerrors.return_date && <div style={{color:'red'}}>{formerrors.return_date}</div>}                               
                                        </div>
                                    </div>
                                    }

                                    {travellerForm.return_time && <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Return Time <span className="text-danger">*</span></label>
                                            <GenericInput type={'time'}
                                                    name="return_time"
                                                    placeholder=""
                                                    value={travellerForm.return_time}                                               
                                                    onChange={(e) => {
                                                        handlerChange(e)
                                                }} />  
                                                 {formerrors.return_time && <div style={{color:'red'}}>{formerrors.return_time}</div>}                                        
                                            </div>
                                    </div> }
                                    
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Payment Mode </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-check-input" defaultChecked   type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Payment to Driver
                                        </label>
                                    </div>
                                    {/* <div className="form-group">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Payment Online
                                        </label>
                                    </div> */}
                                </div>
                            </div>
                            {/* <!-- <div className="payment-btn">
        <button className="btn btn-primary submit-review" type="submit">Go to Payment<i className="fa-solid fa-arrow-right ms-2"></i></button>
        </div>--> */}
                      
                    </div>
                </div>




            </div>
        </>
    )
}

export default TravellerForm;