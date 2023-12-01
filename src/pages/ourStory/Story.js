import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Story() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Our Story"></Header>
      <center>
        <h1>Our Story is ...</h1>
      </center>
    </div>
  );
}
