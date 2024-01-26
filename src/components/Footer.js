import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const title = "Women's Sustainability Network";
  const description = "Follow us on Instagram to get the latest updates!";
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Box align="center">
          <a
            href="https://www.instagram.com/womens_sustainability_network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon></InstagramIcon>
          </a>
        </Box>
      </Container>
    </Box>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Footer;
