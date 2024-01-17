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
            maxWidth: "90%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          image={GroupPhoto}
          alt="GroupPhoto"
        />

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
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          ornare suspendisse sed nisi lacus sed viverra tellus. Ullamcorper
          dignissim cras tincidunt lobortis. Placerat in egestas erat imperdiet
          sed euismod nisi. Est pellentesque elit ullamcorper dignissim cras.
          Nec dui nunc mattis enim. Semper feugiat nibh sed pulvinar. Sed odio
          morbi quis commodo odio. Diam quis enim lobortis scelerisque fermentum
          dui faucibus in ornare. Lacus laoreet non curabitur gravida arcu ac
          tortor dignissim. Tortor vitae purus faucibus ornare. Quam id leo in
          vitae turpis massa sed.
        </Typography>
        <br />
        <Typography
          maxWidth="lg"
          variant="body2"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"
          // }}
        >
          In mollis nunc sed id semper risus in. Egestas tellus rutrum tellus
          pellentesque eu tincidunt tortor aliquam. Integer eget aliquet nibh
          praesent tristique magna sit amet. Ipsum faucibus vitae aliquet nec
          ullamcorper sit amet. Neque viverra justo nec ultrices. Quis eleifend
          quam adipiscing vitae proin. Ac turpis egestas maecenas pharetra
          convallis. Feugiat sed lectus vestibulum mattis ullamcorper velit.
          Netus et malesuada fames ac turpis egestas sed tempus urna. Eget felis
          eget nunc lobortis. Nunc mi ipsum faucibus vitae aliquet nec
          ullamcorper. Gravida rutrum quisque non tellus orci ac auctor augue
          mauris. Ac ut consequat semper viverra nam libero. Sagittis purus sit
          amet volutpat. Nec tincidunt praesent semper feugiat nibh sed pulvinar
          proin. Gravida rutrum quisque non tellus orci ac auctor augue. Diam
          maecenas ultricies mi eget mauris pharetra et ultrices. Magna eget est
          lorem ipsum dolor sit amet consectetur adipiscing. In est ante in
          nibh. Sed blandit libero volutpat sed cras ornare arcu. Non quam lacus
          suspendisse faucibus.
        </Typography>
        <br />
        <Typography
          maxWidth="lg"
          variant="body2"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"
          // }}
        >
          At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nunc
          non blandit massa enim nec. Fringilla ut morbi tincidunt augue. Platea
          dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Pretium
          fusce id velit ut tortor pretium viverra suspendisse. Volutpat commodo
          sed egestas egestas. Turpis in eu mi bibendum neque egestas congue
          quisque egestas. Diam in arcu cursus euismod quis viverra nibh cras.
          Pellentesque elit eget gravida cum sociis. Maecenas sed enim ut sem.
          Elementum nibh tellus molestie nunc non blandit. Pulvinar pellentesque
          habitant morbi tristique senectus. Nunc mi ipsum faucibus vitae.
          Pretium lectus quam id leo in vitae turpis massa. Pharetra convallis
          posuere morbi leo. Velit dignissim sodales ut eu sem. Enim facilisis
          gravida neque convallis a cras semper.
        </Typography>
        <br />
        <Typography
          maxWidth="lg"
          variant="body2"
          // fontSize="18px"
          // style={{
          //   fontSize: "18px",

          marginBottom="20px"
          // }}
        >
          Sit amet consectetur adipiscing elit ut aliquam. Faucibus scelerisque
          eleifend donec pretium vulputate sapien nec sagittis. Amet consectetur
          adipiscing elit pellentesque habitant morbi. Viverra accumsan in nisl
          nisi scelerisque eu ultrices vitae. Tellus in hac habitasse platea.
          Eros in cursus turpis massa tincidunt dui. Tincidunt eget nullam non
          nisi est. Mauris augue neque gravida in fermentum et. Gravida quis
          blandit turpis cursus. Non pulvinar neque laoreet suspendisse interdum
          consectetur libero. Laoreet id donec ultrices tincidunt arcu non
          sodales neque sodales. Ut aliquam purus sit amet luctus venenatis
          lectus.
        </Typography>
        {/* <Button onClick={() => nav("/blog")}>Blog</Button> */}
      </center>
    </div>
  );
}
