import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../features/yetkiSlice';

const Navbar = () => {
const{email}=useSelector((state)=>state.yetkiSlice)

const navigate=useNavigate()
const dispatch=useDispatch()

const handleLogout=()=>{


  dispatch(removeUser()); 

  navigate("/login")

}


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Clarusway News
          </Typography>

          {email ? (
            <Button color="inherit"
            onClick={()=>handleLogout()}
            >LogOut</Button>
          ) : (
            <Button color="inherit">LogIn</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar