import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  CardContent,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Image from "../carl-raw-m3hn2Kn5Bns-unsplash (1).jpg";
import ExploreIcon from "@mui/icons-material/Explore";
import DiamondIcon from "@mui/icons-material/Diamond";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { ScrollToTop } from "../helpers/ScrollToTop";
const Home = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100vh",
            maxWidth: "1536px",
            filter: "brightness(50%)",
          }}
          src={Image}
        />
      </Box>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            position: "absolute",
            top: { xs: "20vh", md: "40vh" },
            ml: { md: "10%" },
            fontStyle: "italic",
            opacity: "90%",
            fontSize: { xs: "80px", md: "100px" },
          }}
        >
          E-commerce landing <br />
          page
        </Typography>
      </Container>
      <Box sx={{ py: "30px", backgroundColor: "#eee" }}>
        <Container maxWidth="xl">
          <Grid container justifyContent="center" spacing={5}>
            <Grid item sx={{ width: "350px" }}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item>
                      <ExploreIcon color="primary" sx={{ fontSize: "60px" }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Mission</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" sx={{ mt: "10px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sx={{ width: "350px" }}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item>
                      <DiamondIcon color="primary" sx={{ fontSize: "60px" }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Vision</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" sx={{ mt: "10px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sx={{ width: "350px" }}>
              <Card>
                <CardContent>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item>
                      <NoteAltIcon color="primary" sx={{ fontSize: "60px" }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">History</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" sx={{ mt: "10px" }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates, ea. Perferendis corrupti reiciendis nesciunt
                    rerum velit autem unde numquam nisi
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ my: "30px" }}
          >
            <Grid item>
              <Link component={RouterLink} to="/products" underline="none">
                <Button
                  variant="contained"
                  sx={{ p: "10px" }}
                  onClick={ScrollToTop}
                >
                  Click to see Products
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
