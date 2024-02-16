import { Typography, Box, Card, Container, useMediaQuery } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/GlobalHeader";

export default function ContactCard() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 601px) and (max-width: 1000px)"
  );
  // const isBiggerMediumScreen = useMediaQuery(
  //   "min-width: 901px) and (max-width: 1800px"
  // );
  return (
    <Container>
      <Card
        id="full-card"
        elevation={3}
        sx={{
          width: "90%",
          margin: "2%",
          marginBottom: "2%",
          minWidth: 150,
          maxWidth: 1500,
          padding: "3%",
          backgroundColor: "#fcfcfc",
        }}
      >
        <Box
          align="left"
          paddingLeft={isSmallScreen ? "0%" : isMediumScreen ? "5%" : "20%"}
        >
          <a
            style={{
              color: "2aa45e",
              fontSize: isSmallScreen ? 17 : isMediumScreen ? 30 : 40,
              color: "#2aa45e",
              textDecoration: "none",
            }}
            href={`mailto:info@wsn.ae`}
          >
            <EmailIcon
              style={{
                color: "2aa45e",
                fontSize: isSmallScreen ? 17 : isMediumScreen ? 30 : 40,
              }}
            ></EmailIcon>{" "}
            {"info@wsn.ae"}
          </a>
        </Box>
        <Box
          align="left"
          paddingLeft={isSmallScreen ? "0%" : isMediumScreen ? "5%" : "20%"}
        >
          <a
            href="https://www.instagram.com/womens_sustainability_network/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <InstagramIcon
              style={{
                color: "2aa45e",
                fontSize: isSmallScreen ? 17 : isMediumScreen ? 30 : 40,
              }}
            ></InstagramIcon>
            <span
              style={{
                color: "#2aa45e",
                fontSize: isSmallScreen ? 17 : isMediumScreen ? 30 : 40,
              }}
            >
              {" "}
              womens_sustainability_network
            </span>
          </a>
        </Box>
      </Card>
    </Container>
  );
}
