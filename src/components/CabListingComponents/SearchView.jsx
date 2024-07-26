import React from "react";
import { useLocation } from 'react-router-dom';

const SearchView = (props) =>{
    const searchformdata = props.searchFormData;
return(
<>
<div className="sortby-sec">
<div className="container">
<div className="sorting-div">
<div className="row d-flex align-items-center">


<div className="row mt-4">
    <div className="col-md-2"><h6>Booking Type</h6>
       <span>{(searchformdata)?searchformdata.module_name:''}</span>

    </div>
    <div className="col-md-2">
        <h6>Pickup City</h6>
       <span>{(searchformdata)?searchformdata.city_name:''}</span>

    </div>
    {searchformdata.pickup_address && <div className="col-md-3">
        <h6>Pickup Address</h6>
       <span>{(searchformdata)?searchformdata.pickup_address:''}</span>
    </div>
    }

    {searchformdata.drop_city!=undefined  && <div className="col-md-2">
        <h6>Drop City</h6>
       <span>{(searchformdata)?searchformdata.drop_city:''}</span>
    </div>
    }

    {searchformdata.local_pkg_name!=undefined && <div className="col-md-2">
        <h6>Package</h6>
       <span>{(searchformdata)?searchformdata.local_pkg_name:''}</span>  
    </div>
     }


    <div className="col-md-2">
        <h6><i className="far fa-calendar-alt"></i> Pickup Date/Time</h6>
       <span>{(searchformdata)?searchformdata.pickup_date:''}</span>
       <br/>
       <span>{(searchformdata)?searchformdata.pickup_time:''}</span>
    </div>
   

    {searchformdata.return_date!=undefined  && <div className="col-md-2">
        <h6><i className="far fa-calendar-alt"></i> Return Date/Time</h6>
       <span>{(searchformdata)?searchformdata.return_date:''}</span>
       <br/>
       <span>{(searchformdata)?searchformdata.return_time:''}</span>
    </div>
    }

    <div className="col-md-1"><a href="/"><button className="btn btn-primary">Back</button></a></div>

</div>
</div>
</div>
</div>
</div>
</>
)
}
export default SearchView;