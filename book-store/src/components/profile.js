import React from "react";
import { Box, Typography, Avatar, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Logout, Book, Palette, Email, AccountCircle } from "@mui/icons-material";

const Profile = () => {
  const user = {
    name: "Merllinyazhini",
    email: "merlly@example.com",
    avatarUrl: "images/nn.jpg",
  };

  const handleLogout = () => {
    console.log("Logout clicked"); // Replace with actual logout logic
  };

  return (
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
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        {/* Avatar and Name */}
        <Avatar
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: "100px", height: "100px", margin: "0 auto 20px" }}
        />
        <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
          {user.name}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px", color: "#555" }}>
          {user.email}
        </Typography>

        {/* Options List */}
        <List>
          <ListItem button>
            <ListItemIcon>
              <Book />
            </ListItemIcon>
            <ListItemText primary="My Library" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Palette />
            </ListItemIcon>
            <ListItemText primary="App Theme" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="Change Email" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItem>
        </List>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="contained"
          color="error"
          startIcon={<Logout />}
          sx={{ marginTop: "20px", width: "100%" }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;
