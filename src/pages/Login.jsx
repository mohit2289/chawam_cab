import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <>

      <div className="modal modal-content" style={{ width: '35%', margin: '40px auto', zIndex: '9', textAlign: 'center' }}>
        <div className="modal-body">
          <div className="payment-success">

            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-auth">
                  <div className="login-auth-wrap">
                    <h1>Sign In</h1>
                    <form action="#">
                      <div className="form-group">
                        <label className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <div className="pass-group">
                          <input type="password" className="form-control pass-input" placeholder />
                          <span className="fas fa-eye toggle-password"></span>
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <label className="custom_check d-inline-flex"><span>Remember me</span>
                          <input type="checkbox" name="remeber" />
                          <span className="checkmark"></span>
                        </label>
                        <label style={{ flot: 'right' }}><Link className="forgot-link" to="/ForgotPassword">Forgot Password ?</Link></label>
                      </div>

                      <div className="form-group">

                      </div>

                      {/* <a href="index.html" className="btn btn-outline-light w-100 btn-size mt-1">Sign In</a> */}
                      <Button  variant="outlined" >Sign In</Button>

                      <div className="login-or">
                        <span className="or-line"></span>

                      </div>

                      <div className="social-login">
                        <a href="#" className="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span>
                          <img src="assets/img/icons/google.svg" className="img-fluid" alt="Google" /></span>Log in with Google</a>
                      </div>
                      <div className="social-login">
                        <a href="#" className="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span>
                          <img src="assets/img/icons/facebook.svg" className="img-fluid" alt="Facebook" /></span>Log in with Facebook</a>
                      </div>

                      <div className="text-center dont-have">Don't have an account yet? <Link to="/SignUp">Register</Link></div>
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

export default Login;