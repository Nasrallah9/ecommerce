import React from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  Slider,
} from "@mui/material";
import { useFilterContext } from "../context/filter_context";
import { useGlobalContext } from "../context/context";
const Filters = () => {
  const {
    filters: { category, text, min_price, price, max_price },
    filtered_products: products,
    updateFilters,
    clearFilters,
    sort,
    updateSort,
  } = useFilterContext();

  const { categories } = useGlobalContext();

  return (
    <Box
      sx={{
        position: { sm: "block", md: "fixed" },
      }}
    >
      <Typography variant="h5">Filters</Typography>
      <Box my={1}>
        <TextField
          type="text"
          name="text"
          value={text}
          label="Search"
          onChange={updateFilters}
          size="small"
          variant="outlined"
        />
        <Box display="flex" my={1} alignItems="center">
          <Typography variant="h6" mr={1}>
            Sort by
          </Typography>
          <Select name="sort" value={sort} onChange={updateSort} size="small">
            <MenuItem value="price-lowest"> Price (Lowest)</MenuItem>
            <MenuItem value="price-highest"> Price (Highest)</MenuItem>
            <MenuItem value="name-a"> Name (A - Z)</MenuItem>
            <MenuItem value="name-z"> Name (Z - A)</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography variant="h5">Category</Typography>
          <Box display="flex" flexDirection="column">
            <Button
              onClick={updateFilters}
              type="button"
              name="category"
              data-category="All"
            >
              {category === "All" && "=> "}
              All
            </Button>
            {categories.map((cat) => {
              return (
                <Button
                  key={cat.id}
                  onClick={updateFilters}
                  name="category"
                  data-category={cat.name}
                >
                  {category === cat.name && "=>"}
                  {cat.name}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">Price</Typography>
          <Typography variant="h6">{price}</Typography>
          <Slider
            min={min_price}
            max={max_price}
            value={price}
            name="price"
            onChange={updateFilters}
            defaultValue={max_price}
          />
        </Box>
        <Button
          onClick={clearFilters}
          variant="contained"
          color="error"
          size="small"
        >
          Clear Filters
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
