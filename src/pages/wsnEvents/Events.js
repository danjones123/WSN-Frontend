import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PeasEvent from "../../assets/PeasEvent.jpg";
import { Typography, CardMedia } from "@mui/material";

export default function Events() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Events"></Header>
      <center>
        {/* <h1>What we have going on...</h1> */}

        <CardMedia
          id="image-card"
          component="img"
          style={{
            marginTop: "2%",
            width: "auto",
            maxHeight: "600px",
            maxWidth: "90%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          image={PeasEvent}
          alt="PeasEvent"
        />
      </center>
    </div>
  );
}
