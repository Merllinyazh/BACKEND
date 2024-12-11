import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Userdash from "./components/userdash";
import Admindash from "./components/admindash";
import ViewBook from "./components/viewbook";
import Home from "./components/Home";
import Profile from "./components/profile";
import Premium from "./components/premium";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* The Header is now part of the layout, and will be displayed on all pages */}
      <header>
        <Header />
      </header>
      <main className="app-main">
        {/* Routes for navigation */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          
          <Route path="/" element={<Login />} />
          <Route path="/userdash" element={<Userdash />} />
          <Route path="/admindash" element={<Admindash />} />
          <Route path="/viewbook" element={<ViewBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<BookDetail />} />
          {/* Fallback route for unmatched paths */}
          <Route
            path="*"
            element={
              <div className="error-page">
                <h2>404 - Page Not Found</h2>
                <p>Sorry, the page you're looking for doesn't exist!</p>
                <a href="/" className="home-link">
                  Go to Home
                </a>
              </div>
            }
          />
        </Routes>
      </main>
      {/* Footer Section */}
      <footer style={{ 
  position: 'fixed', 
  bottom: '0', 
  width: '100%', 
  backgroundColor: '#333', 
  color: 'white', 
  textAlign: 'center', 
  padding: '10px' 
}}>
  2024 Merllin bookstore management. All Rights Reserved
</footer>

    </React.Fragment>
  );
}

export default App;
