import React from "react";
import { Container, Typography } from "@mui/material";
import FilledCart from "../components/FilledCart";
import Loader from "../components/Loader";
import EmptyCart from "../components/EmptyCart";
import { useGlobalContext } from "../context/context";
const Cart = () => {
  const { cart } = useGlobalContext();

  if (!cart.line_items) return <Loader />;
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
