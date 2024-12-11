import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const UserDash = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundImage: "url('images/back.jpg')", // Add your desired background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
        position: "relative", // To position the overlay
      }}
    >
      {/* Background Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Translucent overlay
          zIndex: -1, // Send it behind the content
        }}
      />

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
          marginBottom: "250px",
          fontsize:"60px"
        }}
      >
        Welcome to Your Dashboard
      </Typography>

      {/* Cards Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly", // Space the cards evenly
          width: "100%", // Ensure it takes up the full width
          flexWrap: "wrap", // Allow wrapping for small screens
          gap: "20px", // Add space between cards
        }}
      >
        {/* Profile Card */}
        <Button
          component={Link}
          to="/profile"
          sx={{
            width: "200px",
            height: "200px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            textTransform: "none",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#45A049",
            },
          }}
        >
          Profile
        </Button>

        {/* Premium Card */}
        <Button
          component={Link}
          to="/premium"
          sx={{
            width: "200px",
            height: "200px",
            backgroundColor: "#8B0000",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            textTransform: "none",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#A40000",
            },
          }}
        >
          Premium
        </Button>

        {/* View Books Card */}
        <Button
          component={Link}
          to="/books"
          sx={{
            width: "200px",
            height: "200px",
            backgroundColor: "#232F3D",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            textTransform: "none",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#3A4D5E",
            },
          }}
        >
          View Books
        </Button>

        {/* About Us Card */}
        <Button
          component={Link}
          to="/about"
          sx={{
            width: "200px",
            height: "200px",
            backgroundColor: "#FF8C00",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            textTransform: "none",
            transition: "transform 0.3s ease, background-color 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#FF9C33",
            },
          }}
        >
          About Us
        </Button>
      </Box>
    </Box>
  );
};

export default UserDash;
