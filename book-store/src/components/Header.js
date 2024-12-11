import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: "#232F3D",
          padding: "20px", // Increase padding for AppBar
        }}
        position="sticky"
      >
        <Toolbar
          sx={{
            padding: "0 30px", // Add horizontal padding inside the Toolbar
          }}
        >
          <NavLink to="/" style={{ color: "white" }}>
            <Typography sx={{ display: "flex", alignItems: "center",fontSize:"30px" }}>
              <LibraryBooksOutlinedIcon sx={{ marginRight: "10px" }} />
              Login
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              sx={{ padding: "10px 20px",fontSize:"30px" }} // Add larger padding to individual tabs
              LinkComponent={NavLink}
              to="/add"
              label="Add Product"
            />
            <Tab
              sx={{ padding: "10px 20px" , fontSize:"30px"}} // Consistent padding for all tabs
              LinkComponent={NavLink}
              to="/books"
              label="Books"
            />
            <Tab
              sx={{ padding: "10px 20px",fontSize:"30px" }}
              LinkComponent={NavLink}
              to="/about"
              label="About Us"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
