import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = () => {
    Navigate("/home");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    Navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        {isLoggedIn ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
            <Button color="inherit">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
