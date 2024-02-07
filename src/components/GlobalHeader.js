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
import Logo from "../assets/Logo.PNG";
import BackgroundShapes from "../assets/Background shapes TEST SVG 3.svg";

const Header = (props) => {
  const { title } = props;
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem style={{ color: "#70ad47" }} onClick={() => nav("/")}>
        <Typography variant="body1">Home</Typography>
      </ListItem>

      <ListItem style={{ color: "#70ad47" }} onClick={() => nav("/story")}>
        <Typography variant="body1">Our Story</Typography>
      </ListItem>
      <ListItem style={{ color: "#70ad47" }} onClick={() => nav("/contact")}>
        <Typography variant="body1">Contact Us</Typography>
      </ListItem>
    </List>
  );

  return (
    <Box>
      <Container maxWidth="lg">
        {/* <Box
          component="img"
          sx={{
            // height: 150,
            // width: "auto",
            maxHeight: { xs: 50, md: 100 },
            maxWidth: { xs: "auto", md: "auto" },
          }}
          alt="WSN Logo"
          src={Logo}
          onClick={() => nav("/")}
        /> */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // sx={{ marginTop: { xs: 0, md: 8 } }} // Adjust margin as needed
        >
          <Box
            component="img"
            src={Logo}
            alt="WSN Logo"
            sx={{
              maxHeight: { xs: 75, md: 100 },
              maxWidth: { xs: "auto", md: "auto" },
              cursor: "pointer", // Add cursor pointer for better UX
              marginRight: { xs: 0, md: 4 }, // Add margin for spacing
            }}
            onClick={() => nav("/")}
          />
        </Box>

        <Toolbar
          position="fixed"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
          </Hidden>

          <Hidden smDown>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ maxWidth: "lg", width: "100%" }}
            >
              {/* <Box
                position="absolute"
                top={-100}
                left={0}
                zIndex={-1}
                sx={{
                  height: 150,
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={BackgroundShapes}
                  alt="Background"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box> */}
              <Button
                variant={title === "Home" ? "contained" : "outlined"}
                onClick={() => nav("/")}
                size="small"
                sx={{
                  typography:
                    title === "Home" ? "buttonSelected" : "buttonSecondary",
                  margin: "0 8px",
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => nav("/story")}
                variant={title === "Our Story" ? "contained" : "outlined"}
                size="small"
                sx={{
                  typography:
                    title === "Our Story"
                      ? "buttonSelected"
                      : "buttonSecondary",
                  margin: "0 8px",
                }}
              >
                Our Story
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
                  margin: "0 8px",
                }}
              >
                Contact Us
              </Button>
              {/*Order -> Home, Training, Events, Conferences, "TITLE", Workshops, Chats, Our Story, Contact Us*/}
            </Box>
          </Hidden>
        </Toolbar>
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
            anchor="left"
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
