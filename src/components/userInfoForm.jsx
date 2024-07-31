// src/components/UserInfoForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ name, surname, email, number });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default", // Set a default background color if needed
        p: 3, // Add padding around the outer box
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 3, // Add padding inside the inner box
          borderRadius: 1,
          boxShadow: 3,
          bgcolor: "white", // Background color for the inner box
          maxWidth: "600px", // Optional: Limit the width of the inner box
          width: "100%", // Make the inner box responsive
        }}
      >
        <Typography style={{ color: "black" }} variant="h6" gutterBottom>
          User Information
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            sx={{ mb: 2 }} // Margin bottom for spacing between fields
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <TextField
            sx={{ mb: 2 }} // Margin bottom for spacing between fields
            fullWidth
            label="Surname"
            variant="outlined"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
            required
          />
          <TextField
            sx={{ mb: 2 }} // Margin bottom for spacing between fields
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <TextField
            sx={{ mb: 2 }} // Margin bottom for spacing between fields
            fullWidth
            label="Number"
            variant="outlined"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }} // Margin top for spacing above the button
          >
            Start Questionnaire
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserInfoForm;
