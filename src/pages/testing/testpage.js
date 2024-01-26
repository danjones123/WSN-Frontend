import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GlobalHeader";
import { Typography } from "@mui/material";

export default function testPage() {
  return (
    <div>
      <Header title="Testing"></Header>
      <center>
        <Typography variant="h1" gutterBottom>
          {" "}
          h1{" "}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {" "}
          h2{" "}
        </Typography>
        <Typography variant="h3" gutterBottom>
          {" "}
          h3{" "}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {" "}
          h4{" "}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {" "}
          h5{" "}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {" "}
          h6{" "}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {" "}
          subtitle1{" "}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {" "}
          subtitle2{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {" "}
          body1{" "}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {" "}
          body2{" "}
        </Typography>
        <Typography variant="button" gutterBottom>
          {" "}
          button{" "}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {" "}
          caption{" "}
        </Typography>
        <Typography variant="overline" gutterBottom>
          {" "}
          overline{" "}
        </Typography>
      </center>
    </div>
  );
}
