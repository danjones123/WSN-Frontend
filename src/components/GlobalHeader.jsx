import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/LogoNoBg.png";

const Header = (props) => {
  const { title } = props;
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem
        style={{ color: title == "Home" ? "000000" : "#70ad47" }}
        onClick={() => nav("/")}
      >
        <Typography variant="body1">Home</Typography>
      </ListItem>

      <ListItem
        style={{ color: title == "About Us" ? "000000" : "#70ad47" }}
        onClick={() => nav("/story")}
      >
        <Typography variant="body1">About Us</Typography>
      </ListItem>
      <ListItem
        style={{ color: title == "Contact Us" ? "000000" : "#70ad47" }}
        onClick={() => nav("/contact")}
      >
        <Typography variant="body1">Contact Us</Typography>
      </ListItem>
    </List>
  );

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          // justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: 1, // Add border to match Toolbar's border
            borderColor: "divider", // Add border color to match Toolbar's border color
            paddingX: 2, // Add horizontal padding for spacing
            // position: "fixed", // Fix the position to stay at the top
            width: "100%", // Occupy full width
            zIndex: 10, // Ensure it appears above other elements
            top: 0,
          }}
        >
          <Box
            display="flex"
            // justifyContent="space-between"
            alignItems="center"
            // sx={{ marginTop: { xs: 0, md: 8 } }} // Adjust margin as needed
          >
            <Box
              component="img"
              src={Logo}
              alt="WSN Logo"
              sx={{
                maxHeight: { xs: 125, md: 125 },
                maxWidth: { xs: "auto", md: "auto" },
                cursor: "pointer", // Add cursor pointer for better UX
                marginRight: { xs: 0, md: 4 }, // Add margin for spacing
              }}
              onClick={() => nav("/")}
            />
          </Box>

          <Toolbar
          // position="fixed"
          // sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Hidden smUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  position: "fixed", // Fixed positioning
                  top: 0, // Position at the top of the viewport
                  right: 0, // Position at the right of the viewport
                  zIndex: 1000, // Ensure it appears above other elements
                  marginRight: 4, // Adjust margin for spacing
                  marginTop: 6, // Adjust margin for spacing
                  width: 40,
                }}
              >
                <MenuIcon />
              </IconButton>
              {/* <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1 }}
              >
                {title}
              </Typography> */}
            </Hidden>

            <Hidden smDown>
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ maxWidth: "lg", width: "100%" }}
              >
                <Button
                  variant={title === "Home" ? "contained" : "outlined"}
                  onClick={() => nav("/")}
                  size="small"
                  sx={{
                    typography:
                      title === "Home" ? "buttonSelected" : "buttonSecondary",
                    margin: { lg: "0 50px", md: "0 25px", xs: "0 10px" },
                  }}
                >
                  Home
                </Button>
                <Button
                  onClick={() => nav("/story")}
                  variant={title === "About Us" ? "contained" : "outlined"}
                  size="small"
                  sx={{
                    typography:
                      title === "About Us"
                        ? "buttonSelected"
                        : "buttonSecondary",
                    margin: { lg: "0 50px", md: "0 25px", xs: "0 10px" },
                  }}
                >
                  About Us
                </Button>
                <Button
                  onClick={() => nav("/contact")}
                  variant={title === "Contact Us" ? "contained" : "outlined"}
                  size="small"
                  sx={{
                    typography:
                      title === "Contact Us"
                        ? "buttonSelected"
                        : "buttonSecondary",
                    margin: { lg: "0 50px", md: "0 25px", xs: "0 10px" },
                  }}
                >
                  Contact Us
                </Button>
                {/*Order -> Home, Training, Events, Conferences, "TITLE", Workshops, Chats, Our Story, Contact Us*/}
              </Box>
            </Hidden>
          </Toolbar>
        </Box>
        <Hidden smDown>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: "space-between", overflowX: "auto" }}
          ></Toolbar>
        </Hidden>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* </React.Fragment> */}
      </Container>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
