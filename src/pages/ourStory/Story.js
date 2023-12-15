import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ProfileCard from "./ProfileCard";

export default function Story() {
  const nav = useNavigate();

  return (
    <div>
      <Header title="Our Story"></Header>
      <center>
        <h1>About Us</h1>
        <ProfileCard></ProfileCard>
      </center>
    </div>
  );
}
