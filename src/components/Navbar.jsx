import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Stack,
  Link,
  IconButton,
  Badge,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useGlobalContext } from "../context/context";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { ScrollToTop } from "../helpers/ScrollToTop";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cart } = useGlobalContext();
  const location = useLocation();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <IconButton
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon sx={{ color: "white", fontSize: 33 }} />
              </IconButton>
              <Typography variant="h6" sx={{ mr: "20%" }}>
                E-SHOP
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                sx={{ display: { xs: "none", md: "flex", flexGrow: 1 } }}
              >
                <Link component={RouterLink} to="/">
                  <Button
                    sx={{ color: "white" }}
                    size="large"
                    onClick={ScrollToTop}
                  >
                    Home
                  </Button>
                </Link>
                <Link component={RouterLink} to="/products">
                  <Button
                    sx={{ color: "white" }}
                    size="large"
                    onClick={ScrollToTop}
                  >
                    Products
                  </Button>
                </Link>

                <Link to="/about" component={RouterLink}>
                  <Button
                    sx={{ color: "white" }}
                    size="large"
                    onClick={ScrollToTop}
                  >
                    About
                  </Button>
                </Link>
              </Stack>
              <Stack direction="row">
                {isAuthenticated ? (
                  <>
                    <IconButton onClick={() => logout()}>
                      <LogoutIcon sx={{ color: "white" }} />
                    </IconButton>
                  </>
                ) : (
                  <IconButton onClick={() => loginWithRedirect()}>
                    <LoginIcon sx={{ color: "white" }} />
                  </IconButton>
                )}

                {location.pathname !== "/cart" && (
                  <Link to="/cart" component={RouterLink}>
                    <IconButton>
                      <Badge badgeContent={cart.total_items} color="error">
                        <ShoppingCart sx={{ color: "white" }} />
                      </Badge>
                    </IconButton>
                  </Link>
                )}
              </Stack>
            </Stack>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                p={2}
                width="50vw"
                textAlign="left"
                role="presentaion"
                sx={{ mt: "20px" }}
              >
                <Stack direction="column" spacing={3}>
                  <Link
                    component={RouterLink}
                    to="/"
                    underline="none"
                    onClick={ScrollToTop}
                  >
                    <Button size="large" onClick={() => setIsDrawerOpen(false)}>
                      Home
                    </Button>
                  </Link>
                  <Link
                    component={RouterLink}
                    to="/products"
                    underline="none"
                    onClick={ScrollToTop}
                  >
                    <Button size="large" onClick={() => setIsDrawerOpen(false)}>
                      Products
                    </Button>
                  </Link>
                  <Link
                    to="/about"
                    component={RouterLink}
                    underline="none"
                    onClick={ScrollToTop}
                  >
                    <Button size="large" onClick={() => setIsDrawerOpen(false)}>
                      About
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
