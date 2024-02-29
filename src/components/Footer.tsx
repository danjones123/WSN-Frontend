import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const title = "Women's Sustainability Network";
  const description = "Follow us on Instagram to get the latest updates!";
  return (
    <Container maxWidth="lg">
      <Box
        component="footer"
        sx={{
          py: 3,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h5" align="center" color="primary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {description}
        </Typography>
        <Box textAlign="center">
          <a
            href="https://www.instagram.com/womens_sustainability_network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              style={{ color: "2aa45e", fontSize: 40 }}
            ></InstagramIcon>
          </a>
        </Box>
      </Box>{" "}
    </Container>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Footer;
