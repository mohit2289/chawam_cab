import React, { useState } from "react";
import TravellerForm from "../components/TravellerComponents/TravellerForm";
import PaymentDetail from "../components/TravellerComponents/PaymentDetail";
import SearchView from "../components/CabListingComponents/SearchView";
import { saveBooking } from '../services/booking/index';
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';

const TravellerDetails = () => {
    const navigate = useNavigate();

    const { state } = useLocation();
    const { postdata, selectedVehicle } = state;
    const [errors, setErrors] = useState({});
    const [travellerForm, setTravllerForm] = useState({
        'name': postdata.username,
        'mobile': postdata.mobile,
        'email': "",
        'passenger': '',
        'from_address': postdata.pickup_address,
        'to_address': postdata.drop_city,
        'travel_date': postdata.pickup_date,
        'travel_time': postdata.pickup_time,
        'return_date': postdata.return_date,
        'return_time': postdata.return_time,
        'master_package_id': postdata.master_package_id
    })
    const handlerChange = (evt) => {
        const value = evt.target.value;
        setTravllerForm({
            ...travellerForm,
            [evt.target.name]: value
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (travellerForm.name == '') {
              newErrors.name = "Enter username";
              isValid = false;
        }

        if (travellerForm.mobile == '') {
              newErrors.mobile = "Enter Mobile no";
              isValid = false;
        }

        if (travellerForm.email == '') {
          newErrors.email = "Enter email";
          isValid = false;
        }
    
        if (travellerForm.passenger == '') {
          newErrors.passenger = "Enter no of passenger";
          isValid = false;
        }

        if(travellerForm.from_address =='') {
              newErrors.from_address = "Enter Pickup Address";
              isValid = false;
        }

        if(travellerForm.to_address =='' && travellerForm.master_package_id!='1') {
              newErrors.to_address = "Enter drop Address";
              isValid = false;
        }

        if(travellerForm.travel_date =='') {
              newErrors.travel_date = "Select travel Date";
              isValid = false;
        }

        if(travellerForm.travel_time =='') {
              newErrors.travel_time = "Select travel Time";
              isValid = false;
        }

        if(travellerForm.return_date =='' && travellerForm.master_package_id!='1') {
            newErrors.return_date = "Select Return Date";
            isValid = false;
        }

        if(travellerForm.return_time =='' && travellerForm.master_package_id!='1') {
            newErrors.return_time = "Select Return time";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
  };

    const confirmBooking = async () => {
        const bookingDetails = { ...travellerForm, ...selectedVehicle, ...postdata };
        const bookingObj = {
            "master_package_mode_id": bookingDetails.master_packge_mode_id,
            "master_package_id": bookingDetails.master_package_id,
            "master_vehicle_type_id": bookingDetails.vehicle_type_id,
            "base_vehicle_id": bookingDetails.base_vehicle_id,
            "vehicle_master_id": bookingDetails.vehicle_type_id,
            "name": bookingDetails.name,
            "mobile": bookingDetails.mobile,
            "email": bookingDetails.email,
            "passenger": Number(bookingDetails.passenger),
            "pickup_address": bookingDetails.from_address,
            "drop_address": bookingDetails.to_address,
            "pickup_city": bookingDetails.city_id,
            "drop_city": bookingDetails.destination_city,
            "package_id": (bookingDetails.local_pkg_id != undefined) ? bookingDetails.local_pkg_id : null,

            "travel_date": bookingDetails.travel_date,
            "travel_time": bookingDetails.travel_time,

            'return_date': (bookingDetails.return_date!=undefined)?bookingDetails.return_date:null,
            'return_time': (bookingDetails.return_time!=undefined)?bookingDetails.return_time:null,

            "estimated_time": bookingDetails.min_pkg_hrs,
            // "estimated_distance": (bookingDetails.min_pkg_hrs) ? bookingDetails.min_pkg_hrs : 0,
            "estimated_before_discount": 0,
            "estimated_final_price": (bookingDetails.minimum_charge > 0 )? bookingDetails.minimum_charge  :bookingDetails.totalbill ,
            "approx_after_km": (bookingDetails.min_pkg_km != '') ? bookingDetails.min_pkg_km : bookingDetails.minimum_km,
            "approx_after_hour": (bookingDetails.min_pkg_hrs != '') ? bookingDetails.min_pkg_hrs : 0,
            "approx_hour_charge": bookingDetails.per_hr_charge,
            "approx_distance_charge": bookingDetails.per_km_charge,
            "minimum_charge": bookingDetails.minimum_charge,
            "total_tax_price": 0
        }
        if(bookingDetails.master_package_id=='4'){
            bookingObj.approx_after_km = bookingDetails.min_distance;
        }
    
        if(validateForm()){
            const result = await saveBooking(bookingObj);
            const bookingId = result.data.insertId;
            if (bookingId) {
                navigate('/ticket-details', { state: { bookingId: bookingId } });
            }
        }else{
            console.log(errors);
        }
      
    }
    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Traveller Detail</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">

                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <SearchView searchFormData={postdata} />

            <section className="section car-listing">
                <div className="container">
                    <div className="row">
                        <TravellerForm
                            travellerForm={travellerForm}
                            handlerChange={handlerChange}
                            formerrors={errors}
                        />
                        <PaymentDetail vehicleSelected={selectedVehicle}
                            searchData={postdata}
                            confirmBooking={confirmBooking} />

                    </div>
                </div>
            </section>
        </>
    )
}

export default TravellerDetails;