import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom"

import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import GenericInput from '../../common-components/form-elements/genericInput';
import { FormHelperText } from '@mui/material';
import { getAllcityList } from '../../services/city/index';
import { getAllLocalPackage } from '../../services/localpackage/index';
import { searchVehicle ,addCabSearchData } from '../../services/fare/index';
//import { useFormik } from "formik";
import { color } from "@mui/system";


const LocalForm = (props) => {
      const navigate = useNavigate();
      const [cityList, setCityList] = useState([]);
      const [localPackage, setLocalPackage] = useState([]);
      const [searchFare, setSearchFare] = useState([]);
      const [errors, setErrors] = useState({});
      const [data, setData] = useState({
            'pickup_city': "",
            'pickup_city_name': "",
            'pickup_address': '',
            'package': "",
            'package_name': "",
            'pickup_date': '',
            'pickup_time': '',
            'username': "",
            'mobile': '',
            'master_packge_id': props.masterPackageId
      });

      const validateForm = () => {
            let isValid = true;
            const newErrors = {};

            if (data.username == '') {
                  newErrors.username = "Enter username";
                  isValid = false;
            }

            if (data.mobile == '') {
                  newErrors.mobile = "Enter Mobile no";
                  isValid = false;
            }

            if (data.pickup_city == '') {
              newErrors.pickup_city = "Select City";
              isValid = false;
            }
        
            if (data.package == '') {
              newErrors.package = "Select Package";
              isValid = false;
            }

            if(data.pickup_address =='') {
                  newErrors.pickup_address = "Enter Pickup Address";
                  isValid = false;
            }

            if(data.pickup_date =='') {
                  newErrors.pickup_date = "Select Pickup Date";
                  isValid = false;
            }

            if(data.pickup_time =='') {
                  newErrors.pickup_time = "Select Pickup Time";
                  isValid = false;
            }
            setErrors(newErrors);
            return isValid;
      };

      useEffect(() => {
            getAllCityData();
            getLocalPacakgeData();
      }, [])

      // const formik = useFormik({
      //       initialValues: data,
      //       validationSchema: validationSchema,
      //       onSubmit: (values) => {
      //             alert(JSON.stringify(values, null, 2));
      //       },
      // });

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
      
      const handlerChange = (evt) => {
            const { name, value } = evt.target;
            // formik.setFieldValue(`${name}`, value);
            setData({
                  ...data,
                  [evt.target.name]: value
            });
      };

      const handleOnChange = (event, value) => {
            // const { textContent } = event.target;
            // formik.setFieldValue(`${event}`, textContent);
            if (event === 'package') {
                  setData({
                        ...data,
                        [event]: value.id, 
                        ['package_name']: value.label, 
                  });
            }
            if (event === 'pickup_city') {
                  if (value) {
                        setData({
                              ...data,
                              [event]: (value.id) ? value.id : '',
                              ['pickup_city_name']: (value.label) ? value.label : '',
                        });
                  } else {
                        setData({
                              ...data,
                              [event]: '',
                        });
                  }
            }
      }

      const onSummit = async () => {
            let postData = {
                  "master_package_id": data.master_packge_id,   ///local module
                  "city_id": data.pickup_city,
                  "local_pkg_id": data.package,
                  "pickup_date": data.pickup_date,
                  "pickup_time": data.pickup_time,
                  "pickup_address": data.pickup_address,
                  "module_name" : "Local",
                  'username': data.username,
                  'mobile': data.mobile,
            }
            data.pickup_datetime = data.pickup_date+' '+data.pickup_time;
            data.module_name = "Local";
            if (validateForm()) {
                 await addCabSearchData(data);
                  const result = await searchVehicle(postData);
                  if (result.data.length > 0) {
                        postData.city_name = result.data[0]['city_name'];
                        postData.local_pkg_name = result.data[0]['local_pkg_name'];
                  }
                  setSearchFare(result);
                  navigate('/Cablisting', { state: { vehicleresult: result, postdata: postData } })
            } else {
                 console.log('errors---',errors);
            }     

      }

      return (
            <>
                  <div className="tab-pane active" id="Local">

                        <div className="row">
                        
                              <div className="search-box-banner">
                              {/* <form > */}
                                    <div className="row">
                                          <div className="form-group col-sm-4">
                                                <label>Enter Name</label>
                                               
                                                      <input type="text" className="form-control"
                                                            name="username"
                                                            placeholder="Enter Name"
                                                            onChange={(e) => {
                                                                  handlerChange(e)
                                                            }} 
                                                            />
                                                      {errors.username && <div style={{color:'red'}}>{errors.username}</div>}

                                               
                                          </div>
                                          <div className="form-group col-sm-4">
                                                <label>Enter Mobile</label>
                                                      <input type="text" className="form-control"
                                                            name="mobile"
                                                            placeholder="Enter Mobile"
                                                            onChange={(e) => {
                                                                  handlerChange(e)
                                                            }} />
                                                      {errors.mobile && <div style={{color:'red'}}>{errors.mobile}</div>}
                                          </div>
                                    </div>
                                    <ul className="align-items-center">
                                          <li className="column-group-main">
                                                <div className="form-group">
                                                      <label>Pickup City</label>
                                                            <GenericAutocomplete
                                                                  name="pickup_city"
                                                                  options={cityList}
                                                                  label={'Pickup City'}
                                                                  onChange={(e, val) => {
                                                                        handleOnChange('pickup_city', val)
                                                                  }}
                                                            />
                                                            {errors.pickup_city && <div style={{color:'red'}}>{errors.pickup_city}</div>}
                                                </div>
                                          </li>

                                          <li className="column-group-main">
                                                <div className="form-group">
                                                      <label>Pickup Address</label>
                                                            <input type="text" className="form-control"
                                                                  name="pickup_address"
                                                                  placeholder="Pickup Address"
                                                                  onChange={(e) => {
                                                                        handlerChange(e)
                                                                  }} />
                                                             {errors.pickup_address && <div style={{color:'red'}}>{errors.pickup_address}</div>}

                                                      
                                                </div>
                                          </li>

                                          <li className="column-group-main">
                                                <div className="form-group">
                                                      <label>Select package</label>
                                               
                                                
                                                      <GenericAutocomplete
                                                            name="package"
                                                            options={localPackage}
                                                            onChange={(e, val) => {
                                                                  handleOnChange('package', val)
                                                            }}
                                                      />
                                                {errors.package && <div style={{color:'red'}}>{errors.package}</div>}

                                                </div>
                                          </li>


                                          <li className="column-group-main">
                                                <div className="form-group">
                                                      <label>Pickup Date & Time</label>
                                                </div>
                                                <div className="form-group-wrapp">
                                                      <div className="form-group date-widget">
                                                            <div className="group-img">
                                                                  <GenericInput type={'date'}
                                                                        name="pickup_date"
                                                                        onChange={(e) => {
                                                                              handlerChange(e)
                                                                        }} />
                                                                  {errors.pickup_date && <div style={{color:'red'}}>{errors.pickup_date}</div>}

                                                            </div>
                                                      </div>
                                                      <div className="form-group">
                                                            <div className="group-img">
                                                                  <GenericInput type={'time'}
                                                                        name="pickup_time"
                                                                        onChange={(e) => {
                                                                              handlerChange(e)
                                                                        }} />
                                                                  {errors.pickup_time && <div style={{color:'red'}}>{errors.pickup_time}</div>}
                                                              </div>
                                                      </div>
                                                </div>
                                          </li>

                                          <li className="column-group-last">
                                                <div className="form-group">
                                                      <div className="search-btn">
                                                      <button className="btn search-button" 
                                                            type="submit" 
                                                             onClick={onSummit}
                                                      > 
                                                            <i className="fa fa-search" aria-hidden="true"></i>Search
                                                      </button>
                                                      </div>
                                                </div>
                                          </li>

                                    </ul>
                              {/* </form> */}
                              </div>
                        

                        </div>
                  </div>
            </>

      )
}
export default LocalForm;
