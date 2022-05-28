import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MoreIcon from '@mui/icons-material/MoreVert';
import React, { useState } from "react";
import logo from '../assets/logo.png'
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState('one');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const landing =()=>{
    console.log('hello');
    return (<Navigate to="/" />)
  }
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      {/* //LOGO BUTTON */}
      <Button
        variant="text"
        onClick={()=> navigate('/')}
        startIcon={<Box
          component="img"
          sx={{
          height: 64,
          }}
          alt="Your logo."
          src={logo}
          
      />}
      />
        
       
        
        <Stack>
        <Icons>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      ><MenuItem
      component={Link} to='/contactus'>Contact Us</MenuItem>
        <MenuItem onClick={ <Box><Link href="ww.com"/></Box>}>Facebook</MenuItem>
        <MenuItem>Instagram</MenuItem>
        <MenuItem>Whatsapp</MenuItem>
      </Menu>
      </Icons>
      
<UserBox onClick={(e) => setOpen(true)}>
         
        </UserBox>
        <ConnectWithoutContactIcon
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
      </Stack>
        
      
          
          
        
        
        
        
      </StyledToolbar>
      <Tabs
  value={value}
  onChange={handleChange}
  textColor="secondary"
  indicatorColor="secondary"
  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  aria-label="scrollable force tabs"
>
  <Tab value="one" component={Link} to="/academies" label="Academies" />
  <Tab value="two" component={Link} to="/nutritionist" label="Nutritionists" />
  <Tab value="three" component={Link} to="/sportsgoods" label="Sports Goods" />
  <Tab value="four" component={Link} to="/healthfood" label="Health Food" />
</Tabs>
      

    </AppBar>
  );
};

export default Navbar;
