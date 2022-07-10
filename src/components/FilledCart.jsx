import React from "react";
import { Grid, Stack, Box, Typography, Button } from "@mui/material";
import { useGlobalContext } from "../context/context";
import CartItem from "./CartItem";
import { useAuth0 } from "@auth0/auth0-react";

const FilledCart = () => {
  const { cart, handleEmptyCart } = useGlobalContext();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <Grid container spacing={2}>
        {cart.line_items.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <CartItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <Box
        my={2}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted} $
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            color="error"
            variant="contained"
            type="button"
            size="large"
            onClick={() => handleEmptyCart()}
          >
            Empty Cart{" "}
          </Button>
          {isAuthenticated ? (
            <Button
              color="success"
              variant="contained"
              type="button"
              size="large"
            >
              Checkout
            </Button>
          ) : (
            <Button
              color="success"
              variant="contained"
              type="button"
              size="large"
              onClick={() => loginWithRedirect()}
            >
              Log In To Checkout
            </Button>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default FilledCart;
