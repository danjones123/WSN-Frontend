import * as React from "react";

import Header from "../../components/GlobalHeader";

import ProfileCard from "./ProfileCard";
import AmalContent from "../../inputs/Amal.json";
import AshaContent from "../../inputs/AshaProfileNew.json";

import AshaPhoto from "../../assets/Asha headshot.jpg";

import AmalPhoto from "../../assets/Amal headshot.jpg";
import { Typography } from "@mui/material";

export default function Story() {
  const AshaProps = {
    persona: AshaContent,
    image: { image: AshaPhoto },
  };
  // const SonaProps = { persona: SonaContent, image: { image: SonaPhoto } };
  const AmalProps = { persona: AmalContent, image: { image: AmalPhoto } };

  return (
    <div>
      {/* <Background></Background> */}
      <Header title="About Us"></Header>
      <center>
        <Typography variant="h1" color="primary" marginBottom={"1%"}>
          About Us
        </Typography>
        {/* <AshaCard></AshaCard> */}

        <ProfileCard persona={AshaProps}></ProfileCard>
        {/* <ProfileCard persona={SonaProps}></ProfileCard> */}
        <ProfileCard persona={AmalProps}></ProfileCard>
      </center>
    </div>
  );
}
