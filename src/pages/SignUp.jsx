import React,{useEffect,useState} from "react";
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
import { useNavigate, Link, useLocation } from "react-router-dom";
import {signupService} from '../services/auth/index';
const defaultTheme = createTheme();


export default function SignUp()  {
  const navigate = useNavigate();
  let location = useLocation();

  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});
  const [signupForm, setSignupForm] = useState({
    'username':"",
    'email': '',
    'mobile':'',
    'password': '',
    "confirmpass":""
})

const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  if (signupForm.username == '') {
    newErrors.username = "Please enter username";
    isValid = false;
  }
  if (signupForm.email == '') {
      newErrors.email = "Please enter email";
      isValid = false;
  }
  if (signupForm.mobile == '') {
    newErrors.mobile = "Please enter mobile";
    isValid = false;
}

  if (signupForm.password == '') {
    newErrors.password = "Please enter password";
    isValid = false;
  }
  if (signupForm.confirmpass == '') {
    newErrors.confirmpass = "Please enter confirm password";
    isValid = false;
  }

  if (signupForm.password != signupForm.confirmpass) {
    newErrors.confirmpass = "Password should be same";
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}

  const handlerChange = (evt) => {
    const value = evt.target.value;
    setSignupForm({
        ...signupForm,
        [evt.target.name]: value
    });
};


  const handleSubmit = async() => {
    if(validateForm()){
      let postData= {};
      postData.username = signupForm.username;
      postData.email = signupForm.email;
      postData.mobile = signupForm.mobile;
      postData.password = signupForm.password;
      const resp = await signupService(postData);
      if(resp){
          setSuccess('User registeration successfully');
          navigate('/');
          window.location.reload();
      }
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="UserName"
                  autoFocus
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
                {errors.username && <div style={{color:'red'}}>{errors.username}</div>}

              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
                 {errors.mobile && <div style={{color:'red'}}>{errors.mobile}</div>}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
                 {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
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
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpass"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => {
                    handlerChange(e)
                  }}
                />
                {errors.confirmpass && <div style={{color:'red'}}>{errors.confirmpass}</div>}
              </Grid>

            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <div variant="body2">
                  Already have an account? <Link to="/Login">Sign In</Link>
                </div>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  )
}