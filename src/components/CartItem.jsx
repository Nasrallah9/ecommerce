import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
import { useGlobalContext } from "../context/context";
const CartItem = ({ item }) => {
  const { handleUpdateCartQty, handleRemoveFromCart } = useGlobalContext();
  console.log(item);
  return (
    <Card>
      <Box width="100%" height="200px" alignItems="center" display="flex">
        <CardMedia
          component="img"
          image={item.image.url}
          alt={item.name}
          sx={{ maxWidth: "100%", height: "fit", maxHeight: "100%" }}
        />
      </Box>
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            lineHeight: "25px",
          }}
        >
          {item.name}
        </Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          justifyContent="space-between"
          display="flex"
          width="100%"
          sx={{ pl: 1, pr: 1, pb: 1 }}
        >
          <Stack direction="row" alignItems="center">
            <Button
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </Button>
          </Stack>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CartItem;
