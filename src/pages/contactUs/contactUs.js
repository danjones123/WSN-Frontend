import { Typography } from "@mui/material";
import Header from "../../components/Header";

export default function contactUs() {
  return (
    <div>
      <Header title="Contact Us"></Header>
      <center>
        <Typography>
          The best way to get in touch is to reach out to
          <br />
          Asha@wsn.ae
          <br />
          Sona@wsn.ae
          <br />
          Amal@wsn.ae
        </Typography>

        <Typography style={{ marginTop: "3%" }}>
          Address - Dubai, UAE
        </Typography>
      </center>
    </div>
  );
}
