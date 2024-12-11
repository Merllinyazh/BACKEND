import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Inline CSS styles
  const styles = {
    container: {
      backgroundImage: `url('images/image.png')`, // Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh", // Full viewport height
      display: "flex", // Align items
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
      margin: 0,
    },
    button: {
      marginTop: 20,
      backgroundColor: "#321008",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/profile"
          style={styles.button}
          variant="contained"
        >
          <Typography variant="h3">Go to Profile</Typography>
        </Button>
        <Button
          LinkComponent={Link}
          to="/books"
          style={{ ...styles.button, marginTop: "30px" }} // Adding spacing between buttons
          variant="contained"
        >
          <Typography variant="h3">View All Products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
