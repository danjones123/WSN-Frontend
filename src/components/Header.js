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

const Header = (props) => {
  const { title } = props;
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem onClick={() => nav("/")}>
        <Typography variant="body1">Home</Typography>
      </ListItem>
      <ListItem onClick={() => nav("/story")}>
        <Typography variant="body1">Our Story</Typography>
      </ListItem>
      <ListItem onClick={() => nav("/events")}>
        <Typography variant="body1">Events</Typography>
      </ListItem>
      <ListItem onClick={() => nav("/blog")}>
        <Typography variant="body1">Blogs</Typography>
      </ListItem>
      <ListItem onClick={() => nav("/resources")}>
        <Typography variant="body1">Resources</Typography>
      </ListItem>
      <ListItem onClick={() => nav("/contact")}>
        <Typography variant="body1">Contact Us</Typography>
      </ListItem>
    </List>
  );

  return (
    <div>
      <Box
        component="img"
        sx={{
          // height: 150,
          // width: "auto",
          maxHeight: { xs: 50, md: 100 },
          maxWidth: { xs: "auto", md: "auto" },
        }}
        alt="WSN Logo"
        src={Logo}
      />
      <Container maxWidth="lg">
        <React.Fragment>
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
              <Button onClick={() => nav("/")} size="small">
                Home
              </Button>
              <Button onClick={() => nav("/story")} size="small">
                Our Story
              </Button>
              <Button onClick={() => nav("/events")} size="small">
                Events
              </Button>
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
              <Button onClick={() => nav("/blog")} size="small">
                Blog
              </Button>
              <Button onClick={() => nav("/resources")} size="small">
                Resources
              </Button>
              <Button onClick={() => nav("/contact")} size="small">
                Contact Us
              </Button>
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
        </React.Fragment>
      </Container>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

// import * as React from "react";
// import PropTypes from "prop-types";
// import {
//   Toolbar,
//   Button,
//   Typography,
//   Container,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Header(props) {
//   const { title } = props;
//   const nav = useNavigate();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <Container maxWidth="lg">
//       <React.Fragment>
//         <Toolbar
//           position="fixed"
//           sx={{ borderBottom: 1, borderColor: "divider" }}
//         >
//           <Button onClick={() => nav("/")} size="small">
//             Home
//           </Button>
//           <Button onClick={() => nav("/story")} size="small">
//             Our Story
//           </Button>
//           <Button onClick={() => nav("/events")} size="small">
//             Events
//           </Button>
//           <Typography
//             component="h2"
//             variant="h5"
//             color="inherit"
//             align="center"
//             noWrap
//             sx={{ flex: 1 }}
//           >
//             {title}
//           </Typography>
//           {/* <IconButton>
//             <SearchIcon />
//           </IconButton> */}
//           <Button onClick={() => nav("/blog")} size="small">
//             Blogs
//           </Button>
//           <Button onClick={() => nav("/resources")} size="small">
//             Resources
//           </Button>
//           <Button onClick={() => nav("/")} size="small">
//             Contact Us
//           </Button>
//         </Toolbar>
//         <Toolbar
//           component="nav"
//           variant="dense"
//           sx={{ justifyContent: "space-between", overflowX: "auto" }}
//         ></Toolbar>
//       </React.Fragment>
//     </Container>
//   );
// }

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Header;
