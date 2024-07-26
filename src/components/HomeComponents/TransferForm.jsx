import React from "react";

const TransferForm = () =>{
return(
<>
<div className="tab-pane fade" id="transfer">
<div className="row">
<div className="search-box-banner">
<form action="listing-grid.html">
<ul className="align-items-center">
<li className="column-group-main">
<div className="form-group">
<label>Pickup Location</label>
<div className="group-img">
<input type="text" className="form-control" placeholder="Enter City, Airport, or Address"/>
<span><i className="feather-map-pin"></i></span>
</div>
</div>
</li>

<li className="column-group-main">
<div className="form-group">
<label>Dropup Location</label>
<div className="group-img">
<input type="text" className="form-control" placeholder="Enter City, Airport, or Address"/>
<span><i className="feather-map-pin"></i></span>
</div>
</div>
</li>

<li className="column-group-main">
<div className="form-group">
<label>Pickup Date</label>
</div>
<div className="form-group-wrapp">
<div className="form-group date-widget">
<div className="group-img">
<input type="text" className="form-control datetimepicker" placeholder="04/11/2023"/>
<span><i className="feather-calendar"></i></span>
</div>
</div>
<div className="form-group time-widge">
<div className="group-img">
<input type="text" className="form-control timepicker" placeholder="11:00 AM"/>
<span><i className="feather-clock"></i></span>
</div>
</div>
</div>
</li>
<li className="column-group-main">
<div className="form-group">
<div className="search-btn">
<button className="btn search-button" type="submit"> <i className="fa fa-search" aria-hidden="true"></i>Search</button>
</div>
</div>
</li>
</ul>
</form>
</div>


</div>
</div>
</>
)
}
export default TransferForm;