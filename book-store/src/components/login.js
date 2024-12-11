import React, { useState } from "react";
import { Box, Button, TextField, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DualAuth = () => {
  const navigate = useNavigate();

  // States for forms
  const [isLoginUser, setIsLoginUser] = useState(true);
  const [isLoginAdmin, setIsLoginAdmin] = useState(true);
  const [userInputs, setUserInputs] = useState({ email: "", password: "" });
  const [adminInputs, setAdminInputs] = useState({ email: "", password: "" });

  // Hardcoded credentials
  const userCredentials = {
    email: "merllinyazhini005@gmail.com",
    password: "Merllinyazhini@230205",
    username: "Merlly",
  };

  const adminCredentials = {
    email: "admin@merllin.com",
    password: "admin123",
    username: "Admin",
  };

  // Submit handlers
  const handleUserSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInputs;

    if (
      email === userCredentials.email &&
      password === userCredentials.password
    ) {
      alert(`Welcome ${userCredentials.username}! Navigating to User Dashboard.`);
      navigate("/userdash");
    } else {
      alert("Invalid User Credentials");
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const { email, password } = adminInputs;

    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      alert(`Welcome ${adminCredentials.username}! Navigating to Admin Dashboard.`);
      navigate("/admindash");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('images/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      {/* User Login */}
      <Box
        sx={{
          width: "40%",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Tabs
          value={isLoginUser ? 0 : 1}
          onChange={(e, value) => setIsLoginUser(value === 0)}
          centered
          sx={{ marginBottom: "20px" }}
        >
          <Tab label="User Login" />
        </Tabs>
        <form onSubmit={handleUserSubmit}>
          <TextField
            label="Email"
            name="email"
            value={userInputs.email}
            onChange={(e) =>
              setUserInputs((prev) => ({ ...prev, email: e.target.value }))
            }
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={userInputs.password}
            onChange={(e) =>
              setUserInputs((prev) => ({ ...prev, password: e.target.value }))
            }
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: "20px", backgroundColor: "#232F3D" }}
          >
            Login
          </Button>
        </form>
      </Box>

      {/* Admin Login */}
      <Box
        sx={{
          width: "40%",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Tabs
          value={isLoginAdmin ? 0 : 1}
          onChange={(e, value) => setIsLoginAdmin(value === 0)}
          centered
          sx={{ marginBottom: "20px" }}
        >
          <Tab label="Admin Login" />
        </Tabs>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            label="Email"
            name="email"
            value={adminInputs.email}
            onChange={(e) =>
              setAdminInputs((prev) => ({ ...prev, email: e.target.value }))
            }
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={adminInputs.password}
            onChange={(e) =>
              setAdminInputs((prev) => ({ ...prev, password: e.target.value }))
            }
            margin="normal"
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: "20px", backgroundColor: "#8B0000" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default DualAuth;
