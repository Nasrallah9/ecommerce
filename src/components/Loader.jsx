import React from "react";
import { Box } from "@mui/material";
import { PropagateLoader } from "react-spinners";
const Loader = () => {
  return (
    <Box
      sx={{ height: "100vh", position: "absolute", width: "100vw" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <PropagateLoader size={17} loading={true} color="#3169E6" />
    </Box>
  );
};

export default Loader;
