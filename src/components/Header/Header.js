import React, {useEffect,useState} from "react";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';

const pages = ['Home', 'About Us', 'Contact'];
const settings = ['Profile', 'My Booking', 'Logout'];

const Header = () => {

  
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState([]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = async() => {
    localStorage.removeItem('userlogin');
    window.location.reload();
    navigate('/');
}

  useEffect(() => {
    const useremail = JSON.parse(localStorage.getItem('userlogin'));
    if (userlogin) {
      setUserlogin(useremail);
    }
  }, []);

  return (
    <AppBar position="static" className="header" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <a href="/" className="navbar-brand logo">
                <img src="assets/img/Fastfleet_cabs_logo.png" className="img-fluid" alt="Logo" />
            </a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },textAlign: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: 'black' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem key={"Home"} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                    <Link to="/" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Home"}
                </Link></Typography>
                </MenuItem>
                <MenuItem key={"About Us"} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                    <Link to="/aboutus" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"About Us"}
                </Link></Typography>
                </MenuItem>
                <MenuItem key={"Contact Us"} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">
                    <Link to="/ContactUs" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Contact Us"}
                </Link></Typography>
                </MenuItem>


            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' ,}, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
               <a href="/" className="navbar-brand logo-small">
                <img src="assets/img/logo-small.png" className="img-fluid" alt="Logo" />
              </a>
                         
          </Typography>

          <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
          
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center', paddingLeft:'200px;' }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', lineHeight:'50px' }}
              >
                {page}
              </Button>
            ))} */}

                <Button key={"Home"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', lineHeight:'50px', textDecoration:'none' }}>
                <Typography sx={{ textAlign: 'center'}}>
                    <Link to="/" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Home"}
                </Link></Typography>
                </Button>

                <Button key={"About Us"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', lineHeight:'50px' }}>
                <Typography sx={{ textAlign: 'center' }}>
                    <Link to="/aboutus" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"About Us"}
                </Link></Typography>
                </Button>

                <Button key={"Contact Us"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', lineHeight:'50px' }}>
                <Typography sx={{ textAlign: 'center' }}>
                    <Link to="/ContactUs" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Contact Us"}
                </Link></Typography>
                </Button>        
          </Box>


          <Box className="socal-link call-m">
          <span className="whatsapp-m"> <a target="_blank" href="https://api.whatsapp.com/send?phone=8294202824"> <img src="assets/img/icons8-whatsapp-48.png" className="img-fluid" alt="Logo" /> </a></span>
          <span className="call-m"> <a target="_blank" href="tel:9813933404"> <img src="assets/img/icons8-telephone-64.png" className="img-fluid" alt="Logo" /><span className="contact-num"> <strong>+91 98139 33404</strong> </span></a></span>
          </Box>
          

          <Box>
         

          <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-reg" to="/attach-taxi"><span><i className="fa-solid fa-taxi"></i></span>Attach Taxi</Link>
                {/* <a  href="/attach-taxi">Attach Taxi</a> */}
              </li>
              {!userlogin && 
              <li className="nav-item">
              <Link className="nav-link header-reg" to="/Login"><span><i className="fa-regular fa-user"></i></span>Sign In</Link>
                {/* <a className="nav-link header-login " href="/Login" data-bs-toggle="modal" data-bs-target="#pages_edit"><span><i className="fa-regular fa-user"></i></span>Sign In</a> */}

              </li>
              }

              {userlogin && 
              <li className="nav-item">
              <Button varient="contained" color='error' onClick={logout} ><span><i className="fa-regular fa-user"></i></span>Logout</Button>
              </li>
              }

            </ul>
            </Box>
          {userlogin && 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem key={"Profile"} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to="/" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Profile"}
  </Link></Typography>
                </MenuItem>

                <MenuItem key={"My Booking"} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to="/" underline="none" style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"My Booking"}
  </Link></Typography>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    <Link to="#" underline="none" onClick={logout} style={{ textAlign: 'center', color:'black', textDecoration:'none' }}>
                    {"Logout"}
  </Link></Typography>
                </MenuItem>

               </Menu>


            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu> */}
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header;