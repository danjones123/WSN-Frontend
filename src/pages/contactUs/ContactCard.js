import { Typography, Box, Card, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/GlobalHeader";

export default function contactCard() {
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
        <Box align="left" paddingLeft="20%">
          <EmailIcon style={{ color: "2aa45e", fontSize: 40 }}></EmailIcon>
          <a
            style={{
              color: "2aa45e",
              fontSize: 40,
              color: "#2aa45e",
              textDecoration: "none",
            }}
            href={`mailto:info@wsn.ae`}
          >
            {" "}
            {"info@wsn.ae"}
          </a>
        </Box>
        <Box align="left" paddingLeft="20%">
          <a
            href="https://www.instagram.com/womens_sustainability_network/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <InstagramIcon
              style={{ color: "2aa45e", fontSize: 40 }}
            ></InstagramIcon>
            <span style={{ color: "#2aa45e", fontSize: 40 }}>
              {" "}
              womens_sustainability_network
            </span>
          </a>
        </Box>
      </Card>
    </Container>
  );
}
