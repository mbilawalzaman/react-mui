import React from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const ContactUsContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(4),
  },
}));

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
  };

  return (
    <Container component="main" maxWidth="md">
      <ContactUsContainer elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Please fill out the form below and we'll
          get in touch with you shortly.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label="Your Name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Your Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Your Message"
                name="message"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </ContactUsContainer>
    </Container>
  );
};

export default Contact;
