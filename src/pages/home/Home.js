import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Home"></Header>
      <center>
        <h1>Weclome to WSN</h1>
        {/* <Button onClick={() => nav("/blog")}>Blog</Button> */}
      </center>
    </div>
  );
}
