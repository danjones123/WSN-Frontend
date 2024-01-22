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
          color="primary"
          marginBottom="20px"
        >
          Women's Sustainability Network
        </Typography>
        <Typography
          maxWidth="lg"
          variant="h5"
          color="secondary"
          marginBottom="20px"
        >
          Together we Thrive
        </Typography>

        <Typography maxWidth="lg" variant="h6" marginBottom="20px">
          WSN is a company founded in the UAE by three dynamic women in the year
          2023.
        </Typography>

        <Typography variant="body" style={{ lineHeight: "2" }}>
          The ruler of Dubai commemorated the year 2023 as “THE YEAR OF
          SUSTAINABILITY”
          <br />
          To be aligned with the vision of the country gives us clear direction
          and perseverance.
          <br />
          Women’s Sustainability Network at its core recognizes the value and
          contribution in every aspect that women bring to the table, in
          creating and sustaining families, developing and serving businesses,
          and influencing society.
        </Typography>
        <br />
        <br />
        <Typography maxWidth="lg" variant="h6" marginBottom="20px">
          Our Aim
        </Typography>
        <Typography variant="body" style={{ lineHeight: "2" }}>
          Our vision is to empower women to make life better in their own way.
          <br />
          Each woman has her own unique and individual gift that is expressed
          through her work, her home, her family and into her ecosystem.
          <br />
          The focus of WSN is to bring women together to join our network by
          encouraging, supporting and creating opportunities for women and young
          girls.
          <br />
          Through our regular events we want to open up new idea, provide new
          skills and consider how to serve the world we live in.
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
