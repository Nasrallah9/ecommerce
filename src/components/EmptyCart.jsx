import React from "react";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <Grid
      container
      sx={{ height: "75vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h6" color="error.light">
          Your Cart Is Empty ,<Link to="/products">Start adding Some !</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EmptyCart;
