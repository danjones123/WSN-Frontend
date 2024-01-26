import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/GlobalHeader";

export default function Resources() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Resources"></Header>
      <center>
        <h1>We can help with ... </h1>
      </center>
    </div>
  );
}
