import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Chats() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Chats"></Header>
      <center>
        <h1>What we have going on...</h1>
      </center>
    </div>
  );
}
