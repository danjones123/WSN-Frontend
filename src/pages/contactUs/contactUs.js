import { Typography, Box } from "@mui/material";
import Header from "../../components/GlobalHeader";
import ContactCard from "./ContactCard";

export default function contactUs() {
  return (
    <div>
      <Header title="Contact Us"></Header>
      <center>
        <Typography marginBottom="10px" variant="h1" color="primary">
          {" "}
          Contact Us{" "}
        </Typography>
        <ContactCard></ContactCard>
      </center>
    </div>
  );
}
