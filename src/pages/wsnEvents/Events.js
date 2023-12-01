import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Events() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Events"></Header>
      <center>
        <h1>What we have going on...</h1>
        <Button onClick={() => nav("/blog")}>Blog</Button>
      </center>
    </div>
  );
}
