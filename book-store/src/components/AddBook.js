import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <div
      style={{
        backgroundImage: "url('images/image.png')", // Page background color
        minHeight: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "#f0f5f6", // Container background color
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for the container
          padding: "50px",
          borderRadius: "8px", // Rounded corners
          margin: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormLabel sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            Name
          </FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            inputProps={{ style: { fontSize: "1.1rem" } }} // Text input font size
          />
          <FormLabel sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            Author
          </FormLabel>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
            inputProps={{ style: { fontSize: "1.1rem" } }}
          />
          <FormLabel sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            Description
          </FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            inputProps={{ style: { fontSize: "1.2rem" } }}
          />
          <FormLabel sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            Price
          </FormLabel>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
            inputProps={{ style: { fontSize: "1.1rem" } }}
          />
          <FormLabel sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            Image
          </FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            inputProps={{ style: { fontSize: "1.1rem" } }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                sx={{ transform: "scale(1.2)" }} // Increase checkbox size
              />
            }
            label="Available"
            sx={{ fontSize: "1.2rem" }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 2, fontSize: "1.2rem", padding: "10px 20px" }}
          >
            Add Book
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddBook;
