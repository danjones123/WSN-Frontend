import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import GroupPhoto from "../../assets/WSN Group photo - Copy.jpg";
import { Typography, CardMedia } from "@mui/material";

export default function Home() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Home"></Header>
      <center style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Typography
          maxWidth="lg"
          variant="h3"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",
          color="#1976d2"
          marginBottom="20px"
        >
          Welcome to Women's Sustainability Network
        </Typography>

        <Typography
          maxWidth="lg"
          variant="h5"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"

          // }}
        >
          WSN was created on the year of sustainability 2023, it was formed in
          UAE in 2023.
          <br />
          <br />
          The company is formed by women for women
        </Typography>

        <Typography variant="h5">What we do:</Typography>
        <br />
        <Typography
          maxWidth="lg"
          variant="body"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"
          // }}
        >
          Training Events
          <br />
          Conferences
          <br />
          Workshops
          <br />
          Chats
        </Typography>
        <CardMedia
          id="image-card"
          component="img"
          style={{
            marginTop: "2%",
            width: "auto",
            maxHeight: "400px",
            maxWidth: "90%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          image={GroupPhoto}
          alt="GroupPhoto"
        />
        <br />
        <Typography variant="body">
          To know more about our company and to host an event for your
          organization please
        </Typography>
        <Button onClick={() => nav("/contact")}>Contact Us</Button>
      </center>
    </div>
  );
}
