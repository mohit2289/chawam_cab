import React from "react";

const ForgotPassword = () =>{
return(
<>

<div className="modal modal-content" style={{width: '35%', margin: '40px auto', zIndex: '9', textAlign: 'center'}}>
  <div className="modal-body">
  <div className="payment-success">
   
  <div className="login-wrapper">
    <div className="loginbox">
    <div className="login-auth">
    <div className="login-auth-wrap">
    <h1>Forgot Password</h1>
    <p class="account-subtitle">Enter your email and we will send you a link to reset your password.</p>
    <form action="#">
    <div className="form-group">
    <label className="form-label">Email Address <span className="text-danger">*</span></label>
    <input type="email" className="form-control" placeholder/>
    </div>
     
    <a href="index.html" className="btn btn-outline-light w-100 btn-size mt-1">Save Change</a>
     
    </form>
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

export default ForgotPassword;