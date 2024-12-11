const mongoose = require("mongoose");

const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure emails are unique
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',  // Default role is 'user'
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});





// Hash password before saving user to the database
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});



const User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = mongoose.model("Book", bookSchema);
