import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GlobalHeader";

export default function Training() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Training"></Header>
      <center>
        <h1>What we have going on...</h1>
      </center>
    </div>
  );
}
