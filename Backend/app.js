const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const User = require("./model/book")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);
 
const users = [
  {
    email: "merllinyazhini005@gmail.com",
    password: "Merllinyazhini@230205",
    username: "Merlly",
    role: "user",
  },
  {
    email: "admin@merllin.com",
    password: "admin123",
    username: "Admin",
    role: "admin",
  },
];

// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find matching user
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // If credentials match
    res.status(200).json({
      message: "Login successful",
      username: user.username,
      role: user.role,
    });
  } else {
    // If credentials don't match
    res.status(401).json({ message: "Invalid email or password" });
  }
});

// Sample Books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();  // Get all books from the database
    res.status(200).json(books);      // Return books as a JSON response
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: "Error fetching books" });
  }
});

mongoose.connect(
   'mongodb+srv://ADMIN:ZGCUDBZTZOQtVv2x@cluster0.erqqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

).then(()=>console.log("connected to database"))
 .then(()=>{
    app.listen(5000);
 })
 .catch((err) => console.error('Connection error', err));

 







 
 
 module.exports = router;