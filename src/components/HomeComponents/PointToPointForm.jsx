import React , {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { getAllcityList } from '../../services/city/index'
import { searchVehicle ,addCabSearchData, getCityDistance } from '../../services/fare/index';

import GenericAutocomplete from '../../common-components/form-elements/genericAutocomplete';
import GenericInput from '../../common-components/form-elements/genericInput';


const PointToPointForm = (props) => {
    const navigate = useNavigate();

    const [cityList, setCityList] = useState([]);
    const [dropCityList, setDropCityList] = useState([]);
    const [searchFare, setSearchFare] = useState([]);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        'pickup_city': "",
        'pickup_city_name': "",
        'pickup_address': '',
        'drop_city': "",
        'drop_city_name': "",
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
        }else{
            newErrors.username = "";
        }

        if (data.mobile == '') {
            newErrors.mobile = "Enter Mobile no";
            isValid = false;
        }else{
            newErrors.mobile = "";
        }

        if (data.pickup_city == '') {
            newErrors.pickup_city = "Select pickup City";
            isValid = false;
        }
        if (data.drop_city == '') {
            newErrors.drop_city = "Select drop City";
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
  }, [])

  
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
          setDropCityList(cityObj);
    }
}

const handlerChange = (evt) => {
    const value = evt.target.value;
    setData({
          ...data,
          [evt.target.name]: value
    });
};

const handleOnChange = (event, value) => {   
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
    if (event === 'drop_city') {
            if (value) {
                    setData({
                        ...data,
                        [event]: (value.id) ? value.id : '',
                        ['drop_city_name']: (value.label) ? value.label : '',
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
          "master_package_id": data.master_packge_id,   
          "city_id": data.pickup_city,
          "destination_city": data.drop_city,
          "drop_city": data.drop_city_name,
          "pickup_date": data.pickup_date,
          "pickup_time": data.pickup_time,
          "module_name" : "Point To Point",
          'username': data.username,
          'mobile': data.mobile,
          "minimum_km": 0
    }
    data.pickup_datetime = data.pickup_date+' '+data.pickup_time;
    data.module_name = "Point To Point";
    if (validateForm()) {
        await addCabSearchData(data);
        const cityDistance = await getCityDistance({'from_city':data.pickup_city,'to_city':data.drop_city});
        if (cityDistance.data.length > 0) {
            const min_km = cityDistance.data[0]['distance'];
            postData.minimum_km = min_km;
        }
        const result = await searchVehicle(postData);
        if (result.data.length > 0) {
            postData.city_name = result.data[0]['city_name'];
        }
        setSearchFare(result)
        navigate('/Cablisting', { state: { vehicleresult: result, postdata: postData } })
    }else{
        console.log(errors);
    }

}

    return (
        <>
            <div className="tab-pane active" id="">
                <div className="row">
                    <div className="search-box-banner">
                              
                                    <div className="row">
                                          <div className="form-group col-sm-4">
                                                <label>Enter Name</label>
                                                      <input type="text" className="form-control"
                                                            name="username"
                                                            placeholder="Enter Name"
                                                            onChange={(e) => {
                                                                  handlerChange(e)
                                                            }} />
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
                                        <label>Pickup city</label>
                                        <div className="group-img">
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
                                    </div>
                                </li>
                                <li className="column-group-main">
                                    <div className="form-group">
                                        <label>Drop City</label>
                                        <GenericAutocomplete
                                                name="drop_city"
                                                options={dropCityList}
                                                label={'Drop City'}
                                                onChange={(e, val) => {
                                                    handleOnChange('drop_city', val)
                                                }}
                                            />  
                                        {errors.drop_city && <div style={{color:'red'}}>{errors.drop_city}</div>}
                                       
                                    </div>
                                </li>
                                <li className="column-group-main">
                                    <div className="form-group">
                                        <label>Pickup Date & Time</label>
                                    </div>
                                    <div className="form-group-wrapp">
                                        <div className="form-group date-widget">
                                            <GenericInput type={'date'}
                                                name="pickup_date"
                                                onChange={(e) => {
                                                        handlerChange(e)
                                                }} />                                               
                                            {errors.pickup_date && <div style={{color:'red'}}>{errors.pickup_date}</div>}
                                        </div>
                                        <div className="form-group time-widge">
                                            <GenericInput type={'time'}
                                                name="pickup_time"
                                                onChange={(e) => {
                                                        handlerChange(e)
                                                }} />
                                            {errors.pickup_time && <div style={{color:'red'}}>{errors.pickup_time}</div>}
                                           
                                        </div>
                                    </div>
                                </li>
                                <li className="column-group-last">
                                    <div className="form-group">
                                        <div className="search-btn">
                                            <button className="btn search-button" 
                                            type="submit" 
                                            onClick={onSummit}> 
                                            <i className="fa fa-search" aria-hidden="true"></i>Search</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}
export default PointToPointForm;