import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Workshops() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Workshops"></Header>
      <center>
        <h1>What we have going on...</h1>
      </center>
    </div>
  );
}
