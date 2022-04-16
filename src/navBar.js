import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import Login from './login';

//const pages = ['Home Page', 'Register Work Shop', 'Sign Up','Login','Search Nearby Shops'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
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

  return (
    <AppBar style={{ background:'Green' }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } ,color:''}}
          >
            CLUNKY FIX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="meduim"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              
                <MenuItem key='login' onClick={handleCloseNavMenu}>
                  <Typography textAlign="right"/>
                  <Button
                key={'1'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'black'}}
                to = '/home' >Home </Link>
    <br></br>            
              </Button>   
            <br></br>
              <Button
                key={'1'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'black'}}
                to = '/register' >Register Work Shop</Link>
                
              </Button>   
              <br></br>
              <Button
                key={'2'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'black'}}
                to = '/search' >Search Nearby Shops </Link>
                
              </Button>   
              <br></br>
              <Button
                key={'3'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >
            <Button
                key={'4'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >
               <Link style={{textDecoration:'none' , color:'black'}}
                to = '/signup'>Sign Up</Link>
              </Button>
              <br></br>

                <Link style={{textDecoration:'none' , color:'black'}}
                to = '/login' >Login </Link>
                
              </Button>   
              <br></br>
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            CLUNKY FIX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key={'1'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'white'}}
                to = '/home' >Home </Link>
                
              </Button>   
              <Button
                key={'1'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'white'}}
                to = '/register' >Register Work Shop</Link>
                
              </Button>   

              <Button
                key={'2'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >


                <Link style={{textDecoration:'none' , color:'white'}}
                to = '/search' >Search Nearby Shops </Link>
                
              </Button>   

              <Button
                key={'3'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >
            <Button
                key={'4'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'White', display: 'block' }}
              >
               <Link style={{textDecoration:'none' , color:'white'}}
                to = '/signup'>Sign Up</Link>
              </Button>


                <Link style={{textDecoration:'none' , color:'white'}}
                to = '/login' >Login </Link>
                
              </Button>   

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="SETTINGS">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;