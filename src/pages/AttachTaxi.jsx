import React , {useEffect, useState} from "react";
import Alert from '@mui/lab/Alert';
import { saveAttachTaxi } from '../services/attachtaxi/index';

const AttachTaxi = () => {
    const [errors, setErrors] = useState({});
    const [successStatus, setSuccessStatus] = useState(false);

    const [attachTaxiForm, setAttachTaxiForm] = useState({
        'driver_name': '',
        'driver_mobile': '',
        'driver_email': '',
        'address': '',
        'state': '',
        'city': '',
        'cab_category': '',
        'cab_name': '',
    })
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (attachTaxiForm.driver_name == '') {
              newErrors.driver_name = "Enter driver name";
              isValid = false;
        }

        if (attachTaxiForm.driver_mobile =='') {
              newErrors.driver_mobile = "Enter Mobile no";
              isValid = false;
        }

        if (attachTaxiForm.driver_email == '') {
          newErrors.driver_email = "Enter email";
          isValid = false;
        }
    
        if (attachTaxiForm.address == '') {
          newErrors.address = "Enter address";
          isValid = false;
        }

        if(attachTaxiForm.state =='') {
              newErrors.state = "Enter state";
              isValid = false;
        }

        if(attachTaxiForm.city =='') {
              newErrors.city = "Enter city";
              isValid = false;
        }

        if(attachTaxiForm.cab_category =='') {
              newErrors.cab_category = "Enter cab category";
              isValid = false;
        }

        if(attachTaxiForm.cab_name =='') {
              newErrors.cab_name = "Enter cab name";
              isValid = false;
        }
        setErrors(newErrors);
        return isValid;
  };

    const handlerChange = (evt) => {
        const value = evt.target.value;
        setAttachTaxiForm({
            ...attachTaxiForm,
            [evt.target.name]: value
        });
    };

    const AttachTaxiFormSubmit = async () => {
        if(validateForm()){
            const postData = attachTaxiForm;
            const resp = await saveAttachTaxi(postData);
            if(resp.data){
                setSuccessStatus(true);
                setAttachTaxiForm({
                    'driver_name': '',
                    'driver_mobile': '',
                    'driver_email': '',
                    'address': '',
                    'state': '',
                    'city': '',
                    'cab_category': '',
                    'cab_name': '',
                });
            }
        }
    }

    return (
        <>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Attach Taxi</h2>
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
                            <div className="booking-details attach-taxi">
                                <div className="booking-title">
                                    <h3>Attach Your Taxi with Triloki Cabs</h3>
                                </div>

                                <div className="booking-form">

                                    <form className="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Enter Name <span className="text-danger">*</span></label>
                                                    <input type="text" 
                                                        name="driver_name" 
                                                        value={attachTaxiForm.driver_name}
                                                        className="form-control" 
                                                        placeholder="Your Name" 
                                                        onChange={(e) => {
                                                            handlerChange(e)
                                                        }}
                                                        />
                                                    {errors.driver_name && <div style={{color:'red'}}>{errors.driver_name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Email Address <span className="text-danger">*</span></label>
                                                    <input type="email" name="driver_email"  className="form-control" placeholder="Your Email"
                                                    value={attachTaxiForm.driver_email}
                                                     onChange={(e) => {
                                                        handlerChange(e)
                                                    }} />
                                                    {errors.driver_email && <div style={{color:'red'}}>{errors.driver_email}</div>}

                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Mobile Number <span className="text-danger">*</span></label>
                                                    <input type="text" name='driver_mobile' className="form-control" placeholder="" 
                                                    value={attachTaxiForm.driver_mobile} 
                                                    onChange={(e) => {
                                                        handlerChange(e)
                                                    }}/>
                                                    {errors.driver_mobile && <div style={{color:'red'}}>{errors.driver_mobile}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Address <span className="text-danger">*</span></label>
                                                    <input type="text" name= "address"  className="form-control" placeholder="Adderss" 
                                                    value={attachTaxiForm.address}
                                                     onChange={(e) => {
                                                        handlerChange(e)
                                                    }}
                                                    />
                                                     {errors.address && <div style={{color:'red'}}>{errors.address}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                    <label>Select State <span className="text-danger">*</span></label>
                                                    <input type="text" name="state" className="form-control" placeholder="State" 
                                                      value={attachTaxiForm.state}
                                                      onChange={(e) => {
                                                        handlerChange(e)
                                                    }}
                                                    />
                                                    {errors.state && <div style={{color:'red'}}>{errors.state}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                    <label>City Name <span className="text-danger">*</span></label>
                                                    <input type="text" name='city' className="form-control" placeholder="City Name"
                                                    value={attachTaxiForm.city}
                                                    onChange={(e) => {
                                                        handlerChange(e)
                                                    }}
                                                     />
                                                      {errors.city && <div style={{color:'red'}}>{errors.city}</div>}
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Cab Category <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Sedan"
                                                    name="cab_category"
                                                    value={attachTaxiForm.cab_category}
                                                      onChange={(e) => {
                                                        handlerChange(e)
                                                    }}
                                                    />
                                                    {errors.cab_category && <div style={{color:'red'}}>{errors.cab_category}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Cab Name <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" placeholder="Cab Name" 
                                                    name="cab_name"
                                                    value={attachTaxiForm.cab_name}
                                                    onChange={(e) => {
                                                      handlerChange(e)
                                                  }}
                                                    />
                                                    {errors.cab_name && <div style={{color:'red'}}>{errors.cab_name}</div>}
                                                </div>
                                            </div>

                                        </div>
                                        {successStatus &&
                                            <Alert severity="success">Data saved successfully.</Alert>
                                        }

                                        <div className="payment-btn">
                                            <button className="btn btn-primary submit-review" onClick={AttachTaxiFormSubmit} type="button">Attach your Taxi<i className="fa-solid fa-arrow-right ms-2"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default AttachTaxi;