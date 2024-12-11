import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AdminDash = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundImage: "url('images/admin.jpg')", // background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px", // Add padding to ensure spacing around the edges
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: "#000000",fontSize:"50px",marginBottom:"80px",fontFamily:"Berlin" }}>
        Admin Dashboard
      </Typography>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly", // Space the cards evenly
          width: "100%", // Ensure it takes up the full width
          flexWrap: "wrap", // Allow wrapping if the screen size is small
        }}
      >
        {/* Add Book Card */}
        <Button
          component={Link}
          to="/add"
          sx={{
            width: "500px",
            height: "500px",
            backgroundColor: "#8B0000",
            color: "white",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            marginBottom: "20px",
            textTransform: "none",
          }}
        >
          <Typography variant="h5">Add Book</Typography>
        </Button>

        

        {/* Update Book Card */}
        <Button
          component={Link}
          to="/books"
          sx={{
            width: "500px",
            height: "500px",
            backgroundColor: "#232F3D",
            color: "white",
            fontSize: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            marginBottom: "20px",
            textTransform: "none",
          }}
        >
          <Typography variant="h5">Update Book</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AdminDash;
