import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {Select} from 'react-select';
import * as Yup from "yup";
import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import GenericInput from '../../common-components/form-elements/genericInput';

import { getAllcityList } from '../../services/city/index';
import { getAllLocalPackage } from '../../services/localpackage/index';
import { searchVehicle, addCabSearchData } from '../../services/fare/index';
import { useFormik } from "formik";

const vehicleFareContext = createContext();

const LocalForm = (props) => {
      const [cityList, setCityList] = useState([]);
      const [localPackage, setLocalPackage] = useState([]);

      const getAllCityData = async () => {
            const response = await getAllcityList();
            if (response.data) {
                  const cityArr = response.data;
                  const cityObj = cityArr.map(elem => (
                        {
                              id: elem.id,
                              label: elem.name,
                        }
                  ));
                  setCityList(cityObj);
            }
      }

      const getLocalPacakgeData = async () => {
            const response = await getAllLocalPackage();
            if (response.data) {
                  const packages = response.data;
                  const packagesObj = packages.map(elem => (
                        {
                              id: elem.id,
                              label: elem.name,
                        }
                  ));
                  setLocalPackage(packagesObj);
            }
      }

      useEffect(() => {
            getAllCityData();
            getLocalPacakgeData();
      }, [])
      const formik = useFormik({
            initialValues: {
                  username: "",
                  mobile: "",
                  pickup_city: "",
                  package: "",
                  pickup_address: "",
                  pickup_date:"",
                  pickup_time:"",
            },
            validationSchema: Yup.object({
                  username: Yup.string()
                        .min(2, "Mininum 2 characters")
                        .max(15, "Maximum 15 characters")
                        .required("Username is required!"),
                  mobile: Yup.number()
                        .required("Required!"),
                  // pickup_city: Yup.string()
                  //       .required("Required!"),
                  // package: Yup.string()
                  //       .required("Required!"),    
                  pickup_address: Yup.string()
                        .required("Required!"),    

            }),
            onSubmit: values => {
                  console.log(JSON.stringify(values, null, 2));
            }
      });


      return (
            <>
                  <div className="tab-pane active" id="Local">

                        <div className="search-box-banner">

                              <form onSubmit={formik.handleSubmit}>
                                    <div className="row">
                                          <div className="form-group col-sm-4">
                                                <label>Name</label>
                                                <input
                                                      type="text"
                                                      className="form-control"
                                                      name="username"
                                                      placeholder="Name"
                                                      value={formik.values.username}
                                                      onChange={formik.handleChange}
                                                />
                                                {formik.errors.username && formik.touched.username && (
                                                      <p>{formik.errors.username}</p>
                                                )}
                                          </div>
                                          <div className="form-group col-sm-4">
                                                <label>Mobile</label>
                                                <input
                                                      className="form-control"
                                                      type="text"
                                                      placeholder='Mobile'
                                                      name="mobile"
                                                      value={formik.values.mobile}
                                                      onChange={formik.handleChange}
                                                />
                                                {formik.errors.mobile && formik.touched.mobile && (
                                                      <p>{formik.errors.mobile}</p>
                                                )}
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div className="form-group col-sm-4">
                                                <label>Pickup City</label>
                                                <div className="group-img">

                                                      <Select
                                                            id={"pickup_city"}
                                                            name="pickup_city"
                                                            type={"text"}
                                                            value={formik.values.pickup_city}
                                                            //onChange={option => setFieldValue("pickup_city", option)}
                                                            options={cityList}
                                                            onBlur={formik.handleBlur}
                                                      />

                                                      {/* <GenericAutocomplete
                                                            name="pickup_city"
                                                            value={formik.values.pickup_city}
                                                            options={cityList}
                                                            label={'Pickup City'}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}

                                                      /> */}
                                                       {formik.errors.pickup_city && formik.touched.pickup_city && (
                                                            <p>{formik.errors.pickup_city}</p>
                                                      )}
                                                </div>
                                          </div>
                                          <div className="form-group col-sm-4">
                                                <label>Select Package</label>
                                                <GenericAutocomplete
                                                            name="package"
                                                            options={localPackage}
                                                            
                                                />
                                                {formik.errors.package && formik.touched.package && (
                                                            <p>{formik.errors.package}</p>
                                                )}
                                          </div>
                                          <div className="form-group col-sm-4">
                                                <label>Pickup Address</label>
                                                <input type="text" 
                                                      className="form-control"
                                                      name="pickup_address"
                                                      placeholder="Pickup Address"
                                                      value={formik.values.pickup_address}
                                                      onChange={formik.handleChange}
                                                />
                                                 {formik.errors.pickup_address && formik.touched.pickup_address && (
                                                            <p>{formik.errors.pickup_address}</p>
                                                )}
                                          </div>
                                    </div>

                                    <div className="row">
                                          <div className="form-group col-sm-4">
                                                <label>Pickup Date</label>
                                                <GenericInput type='date'
                                                      name="pickup_date"
                                                      
                                                      />
                                          </div>
                                          <div className="form-group col-sm-4">
                                                <label>Pickup Date</label>
                                                <GenericInput 
                                                      type='time'
                                                      id="time"
                                                      name="pickup_time"
                                                      
                                                      
                                                />
                                          </div>
                                    </div>
                                    
                                    <div>
                                          <button  type="submit"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
                                    </div>
                              </form>


                        </div>
                  </div>
            </>

      )
}
export default LocalForm;
export { vehicleFareContext };
