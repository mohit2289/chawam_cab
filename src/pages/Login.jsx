import React, {useState} from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Link , useLocation } from "react-router-dom";

import {loginService} from '../services/auth/index'

const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  
  const [errors, setErrors] = useState({});
  const [loginForm, setLoginForm] = useState({
    'mobile': '',
    'password': '',
})

const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  if (loginForm.mobile === '') {
      newErrors.mobile = "Please enter mobile";
      isValid = false;
  }

  if (loginForm.password === '') {
    newErrors.password = "Please enter password";
    isValid = false;
  }
  setErrors(newErrors);
  return isValid;
}

  const handlerChange = (evt) => {
    const value = evt.target.value;
    const reg = /^[0-9\b]+$/;
   
    if(evt.target.name == 'mobile'){
      if(value == '' || (reg.test(value) && value.length >=0 && value.length <=11 )){
        setLoginForm({
          ...loginForm,
          [evt.target.name]: value
      });
    }
    }else{
    setLoginForm({
        ...loginForm,
        [evt.target.name]: value
    });
  }
};

  const handleSubmit = async() => {
    if(validateForm()){
        const resp = await loginService(loginForm);
        if(resp.data){
          localStorage.setItem('userlogin', JSON.stringify(resp.data[0]));
          if(location.pathname == '/Cablisting'){
            let result = JSON.parse(localStorage.getItem('vehicleresult'));
            let postData = JSON.parse(localStorage.getItem('postData'));

            navigate(location.pathname,{ state: { vehicleresult: result, postdata: postData }});
          }else {
            navigate('/');
          }
          window.location.reload();
        }

    }else {
      console.log(errors);
    }
  } 
  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //border: '1px solid grey',
          //padding: '24px 24px 24px 24px'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            
           
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                value={loginForm.mobile}
                onChange={(e) => {
                  handlerChange(e)
                }}
              />
               {errors.mobile && <div style={{color:'red'}}>{errors.mobile}</div>}
            </Grid>

            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => {
                  handlerChange(e)
                }}
              />
               {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
            </Grid>
            
          </Grid>

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <div variant="body2">
              Don't have an account yet? <Link to="/SignUp">Register</Link>
              </div>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Login;