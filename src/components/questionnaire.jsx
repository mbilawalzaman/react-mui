import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import PDFGeneration from "./PDFGeneration";

const Questionnaire = ({ userInfo, setAnswers }) => {
  const [answers, setLocalAnswers] = useState({});
  const [total, setTotal] = useState(0);
  console.log(userInfo);

  useEffect(() => {
    // Auto-save functionality
    const autoSave = setInterval(() => {
      localStorage.setItem("answers", JSON.stringify(answers));
    }, 60000); // Save every minute

    return () => clearInterval(autoSave);
  }, [answers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    console.log("Calculating total with answers:", answers); // Debugging log

    // Add your specific calculation logic here
    // Convert values to numbers and filter out non-numeric values
    const sum = Object.values(answers)
      .map((val) => Number(val))
      .filter((val) => !isNaN(val)) // Only sum valid numbers
      .reduce((acc, val) => acc + val, 0);

    console.log("Calculated sum:", sum); // Debugging log

    setTotal(sum);
    setAnswers({ ...answers, total: sum }); // Update the total in the answers
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          mb: 4,
          p: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography style={{ color: "black" }} variant="h4" gutterBottom>
          Questionnaire
        </Typography>
        <form noValidate>
          {/* Number Fields */}
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Number Field 1"
            type="number"
            name="field1"
            onChange={handleInputChange}
            placeholder="Enter number"
            margin="normal"
          />
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Number Field 2"
            type="number"
            name="field2"
            onChange={handleInputChange}
            placeholder="Enter number"
            margin="normal"
          />

          <div className="text-black m-2">Total: {total}</div>

          <Box mt={2} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={calculateTotal}
            >
              Calculate Total
            </Button>
          </Box>

          {/* Text Fields */}
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Text Field 1"
            type="text"
            name="textField1"
            onChange={handleInputChange}
            placeholder="Enter text"
            margin="normal"
          />
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Text Field 2"
            type="text"
            name="textField2"
            onChange={handleInputChange}
            placeholder="Enter text"
            margin="normal"
          />
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Text Field 3"
            type="text"
            name="textField3"
            onChange={handleInputChange}
            placeholder="Enter text"
            margin="normal"
          />
          <TextField
            className="m-2"
            fullWidth
            variant="outlined"
            label="Text Field 4"
            type="text"
            name="textField4"
            onChange={handleInputChange}
            placeholder="Enter text"
            margin="normal"
          />
          <Box
            mt={2}
            textAlign="center"
            backgroundColor="blue"
            variant="contained"
          >
            <PDFGeneration userInfo={userInfo} answers={{ total }} />
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Questionnaire;
