import React, { useState } from "react";
import { crew } from "../crew";
import { Container, Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const About = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = crew[index];
  const checkNumber = (number) => {
    if (number > crew.length - 1) {
      return 0;
    }
    if (number < 0) {
      return crew.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * crew.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <Box sx={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <Container>
        <Typography variant="h3" textAlign="center" py={1}>
          Our Crew
        </Typography>
        <Box justifyContent="center" display="flex">
          <Box
            sx={{ width: { xs: "95vw", md: "60vw" } }}
            bgcolor="white"
            py={2}
          >
            <Box pt={3} display="flex" justifyContent="center">
              <Box
                component="img"
                src={image}
                width="200px"
                height="200px"
                borderRadius="50%"
              />
            </Box>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ textTransform: "capitalize" }}
            >
              {name}
            </Typography>
            <Typography
              color="primary.light"
              variant="h6"
              textAlign="center"
              sx={{ textTransform: "capitalize" }}
            >
              {job}
            </Typography>
            <Typography variant="body1" px={2} textAlign="center" mb={1}>
              {text}
            </Typography>
            <Box display="flex" justifyContent="center">
              <IconButton onClick={prevPerson}>
                <ArrowBackIosNewIcon fontSize="small" color="primary" />
              </IconButton>
              <IconButton onClick={nextPerson}>
                <ArrowForwardIosIcon fontSize="small" color="primary" />
              </IconButton>
            </Box>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" onClick={randomPerson}>
                Surprise Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
