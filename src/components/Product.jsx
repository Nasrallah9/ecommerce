import React from "react";
import {
  Card,
  Box,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ScrollToTop } from "../helpers/ScrollToTop";
const Product = ({ product }) => {
  return (
    <Card onClick={ScrollToTop}>
      <CardActionArea component={RouterLink} to={`/products/${product.id}`}>
        <Box
          width="100%"
          height="200px"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            src={product.image.url}
            alt={product.name}
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
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              lineHeight: "25px",
              height: "50px",
            }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            dangerouslySetInnerHTML={{ __html: product.description }}
            color="textSecondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          />

          <Box
            mt={1}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {product.inventory.available ? (
              <Typography
                bgcolor="success.light"
                color="white"
                variant="h6"
                sx={{ p: 1, borderRadius: "5px" }}
              >
                Available
              </Typography>
            ) : (
              <Typography
                bgcolor="error.light"
                color="white"
                variant="h6"
                sx={{ p: 1, borderRadius: "5px" }}
              >
                Out Of Stock
              </Typography>
            )}
            <Typography variant="h6">
              {product.price.formatted_with_symbol}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {product.inventory.available ? (
            <Typography
              bgcolor="success.light"
              color="white"
              variant="h6"
              sx={{ p: 1, borderRadius: "5px" }}
            >
              Available
            </Typography>
          ) : (
            <Typography
              bgcolor="error.light"
              color="white"
              variant="h6"
              sx={{ p: 1, borderRadius: "5px" }}
            >
              Out Of Stock
            </Typography>
          )}
          <IconButton
            disabled={!product.inventory.available}
            aria-label="add to cart"
            onClick={() => handleAddToCart(product.id, 1)}
          >
            <AddShoppingCartIcon sx={{ ml: "30" }} />
          </IconButton>
        </Box>
      </CardActions> */}
    </Card>
  );
};

export default Product;
