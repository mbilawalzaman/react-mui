import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to MyApp
        </Typography>
        <Typography variant="h5" component="h2" color="textSecondary" paragraph>
          Your journey to better management starts here.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
          Get Started
        </Button>
      </Box>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="Random Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature One
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of feature one.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="Random Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature Two
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of feature two.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="Random Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Feature Three
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description of feature three.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
