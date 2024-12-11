import { Box, Typography, Paper, Divider } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: "2000px",
            padding: "30px",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "fantasy",
              color: "#232f3e",
              marginBottom: "20px",
              fontSize: "2.8rem",
            }}
          >
            Welcome to Our CRUD Application
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Roboto",
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "30px",
              fontSize: "1.5rem",
            }}
          >
            This project is a comprehensive demonstration of a **CRUD
            (Create, Read, Update, Delete)** application built using the **MERN
            stack**. It is designed to provide a seamless and intuitive user
            experience while showcasing the power and flexibility of modern web
            development.
          </Typography>
          <Divider sx={{ marginY: "30px" }} />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "fantasy",
              color: "#007bff",
              marginBottom: "20px",
              fontSize: "2rem",
            }}
          >
            About the MERN Stack
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto",
              color: "#555",
              lineHeight: "2",
              marginBottom: "30px",
              fontSize: "1.3rem",
            }}
          >
            - **MongoDB**: As the database, MongoDB provides a scalable and
            flexible NoSQL solution for data storage.
            <br />
            - **Express.js**: The backend framework that handles server-side
            operations and API endpoints.
            <br />
            - **React.js**: The powerful frontend library responsible for
            creating dynamic user interfaces.
            <br />
            - **Node.js**: The runtime environment that powers the server-side
            JavaScript execution.
          </Typography>
          <Divider sx={{ marginY: "30px" }} />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "fantasy",
              color: "#007bff",
              marginBottom: "20px",
              fontSize: "2rem",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto",
              color: "#555",
              lineHeight: "2",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            If you have any questions, feedback, or would like to collaborate
            with us, feel free to reach out:
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Roboto",
              color: "#333",
              fontSize: "1.3rem",
              marginBottom: "30px",
            }}
          >
            <strong>Email:</strong> contact@mernapp.com
            <br />
            <strong>Phone:</strong> +1 (123) 456-7890
            <br />
            <strong>Address:</strong> 123 Web Dev Lane, Code City, JS 54321
          </Typography>
          <Divider sx={{ marginY: "30px" }} />
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              color: "#999",
              fontSize: "1rem",
            }}
          >
            © 2024 MERN CRUD Application. All rights reserved.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default About;
