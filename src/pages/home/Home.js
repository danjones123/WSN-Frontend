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
      <center>
        <h1>Weclome to WSN</h1>
        <Typography
          maxWidth="lg"
          variant="body2"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"
          // }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <CardMedia
          id="image-card"
          component="img"
          style={{
            width: "auto",
            maxHeight: "400px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          image={GroupPhoto}
          alt="GroupPhoto"
        />
        {/* <Button onClick={() => nav("/blog")}>Blog</Button> */}
      </center>
    </div>
  );
}
