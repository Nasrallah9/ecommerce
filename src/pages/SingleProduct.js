import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Stack,
  Rating,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";
import Loader from "../components/Loader";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useGlobalContext } from "../context/context";

const SingleProduct = () => {
  const { handleAddToCart } = useGlobalContext();
  const params = useParams();
  const id = params.id;
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [imagePr, setImagePr] = useState(2);
  const [rating, setRating] = useState(3);
  const [itemsNum, setItemsNum] = useState(1);
  const timerRef = useRef(null);

  const handleItems = (num) => {
    if (num < 1) {
      setItemsNum(1);
    } else if (num > singleProduct.inventory.available) {
      setItemsNum(singleProduct.inventory.available);
    } else {
      setItemsNum(num);
    }
  };

  const fetchData = async () => {
    const response = await commerce?.products?.retrieve(id);
    setSingleProduct(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    setImagePr(2);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container maxWidth="xl">
      <Grid container columnSpacing={2} rowSpacing={1}>
        {/* PHOTOS SECTION */}
        <Grid item xs={12} sm={6} md={4} my={1}>
          <Box>
            <Box
              sx={{ maxWidth: "100%", height: "360px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                sx={{ maxWidth: "100%", maxHeight: "100%", mb: 1 }}
                src={singleProduct.assets[imagePr].url}
                alt={singleProduct.name}
              />
            </Box>
            <Grid spacing={2} width="100%" container>
              {singleProduct.assets.map((imgPr, index) => {
                if (index % 2 === 1) {
                  return (
                    <Grid item key={index}>
                      <Box
                        component="img"
                        src={imgPr.url}
                        alt=""
                        width="85px"
                        onMouseOver={() => {
                          timerRef.current = setTimeout(() => {
                            setImagePr(index + 1);
                          }, 500);
                        }}
                        onMouseLeave={() => {
                          if (timerRef.current) {
                            clearTimeout(timerRef.current);
                          }
                        }}
                      />
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Box>
        </Grid>

        {/* Details */}
        <Grid item xs={12} sm={6} md={4} my={1}>
          <Typography variant="h4">{singleProduct.name}</Typography>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={{ __html: singleProduct.description }}
            color="textSecondary"
            mt={2}
          />
          <Typography
            variant="body1"
            mt={2}
            color="textSecondary"
            component="div"
          >
            <ul>
              <li>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                aliquid? Ut explicabo fuga distinctio officiis maxime voluptate
                optio est velit, commodi labore sed obcaecati esse sint
                recusandae et aliquam sequi?
              </li>
              <li>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                aliquid? Ut explicabo fuga distinctio officiis maxime voluptate
                optio est velit, commodi labore sed obcaecati esse sint
                recusandae et aliquam sequi?
              </li>
            </ul>
          </Typography>
        </Grid>
        {/* Buying Info  */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          my={1}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
        >
          <Box width="100%">
            <Box display="flex" justifyContent="space-between" my="2">
              <Typography variant="h5">
                {singleProduct.inventory.available} Pieces are left
              </Typography>
              <Typography variant="h6">
                {singleProduct.price.formatted_with_symbol}
              </Typography>
            </Box>
            <Typography variant="subtitle1">
              Can be delivered in 2 days
            </Typography>
            <Box display="flex" justifyContent="space-between" my={2}>
              <Stack direction="row" alignItems="center">
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => handleItems(itemsNum - 1)}
                  disabled={!singleProduct.inventory.available}
                >
                  <RemoveOutlinedIcon />
                </Button>
                <Typography px={2} variant="h6">
                  {itemsNum}
                </Typography>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => handleItems(itemsNum + 1)}
                  disabled={!singleProduct.inventory.available}
                >
                  <AddOutlinedIcon />
                </Button>
              </Stack>
              <Button
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
                size="large"
                disabled={!singleProduct.inventory.available}
                onClick={() => handleAddToCart(id, itemsNum)}
              >
                Add To Cart
              </Button>
            </Box>
            <Typography variant="h6">Rate this product</Typography>
            <Box display="flex">
              <Rating
                mb={2}
                name="rating"
                value={rating}
                precision={0.5}
                size="large"
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <Typography
                variant="h6"
                ml={2}
                px={1}
                sx={{ backgroundColor: "#eee", borderRadius: "10px" }}
              >
                {rating}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProduct;
