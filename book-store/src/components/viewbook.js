import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const ViewBook = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/books");
        setBooks(response.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {books.map((book, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 345,
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={book.image}
            alt={book.title}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          <CardContent>
            <Typography variant="h6">{book.title}</Typography>
            <Typography variant="subtitle1">{book.author}</Typography>
            <Typography variant="body2">${book.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              href={book.purchaseUrl}  // Redirects to purchase URL
              target="_blank"
              sx={{ marginTop: "10px" }}
            >
              Purchase
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};


export default ViewBook;
