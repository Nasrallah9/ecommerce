import React from "react";

import { Container, Grid } from "@mui/material";
import Product from "../components/Product";
import { useGlobalContext } from "../context/context";
import Filters from "../components/Filters";
import { useFilterContext } from "../context/filter_context";
import Loader from "../components/Loader";
const Products = () => {
  const { filtered_products: products } = useFilterContext();
  const { productsLoader } = useGlobalContext();

  if (productsLoader) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent="left" sx={{ my: 1 }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              height: { md: "100vh" },
            }}
          >
            <Filters />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2} justifyContent="left" sx={{ my: 1 }}>
              {products.map((product) => {
                return (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                    <Product product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Products;
