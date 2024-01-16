import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AshaCard from "./ProfileCardAsha";
import ProfileCard from "./ProfileCard";
import AmalContent from "../../inputs/Amal.json";
import AshaContent from "../../inputs/Asha.json";
import SonaContent from "../../inputs/Sona.json";
import AshaPhoto from "../../assets/Asha headshot.jpg";
import SonaPhoto from "../../assets/Sona headshot.jpg";
import AmalPhoto from "../../assets/Amal headshot.jpg";

export default function Story() {
  const nav = useNavigate();
  const AshaProps = {
    persona: AshaContent,
    image: { image: AshaPhoto },
  };
  const SonaProps = { persona: SonaContent, image: { image: SonaPhoto } };
  const AmalProps = { persona: AmalContent, image: { image: AmalPhoto } };

  return (
    <div>
      <Header title="Our Story"></Header>
      <center>
        <h1>About Us</h1>
        {/* <AshaCard></AshaCard> */}
        <ProfileCard persona={AshaProps}></ProfileCard>
        <ProfileCard persona={SonaProps}></ProfileCard>
        <ProfileCard persona={AmalProps}></ProfileCard>
      </center>
    </div>
  );
}
