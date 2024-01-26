import { Typography, Box } from "@mui/material";
import Header from "../../components/GlobalHeader";

export default function contactUs() {
  return (
    <div>
      <Header title="Contact Us"></Header>
      <center>
        <Typography marginBottom="10px" variant="h5">
          The best way to get in touch is to reach out to us via Email or
          Instagram
        </Typography>
        <Typography>
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ maxWidth: "lg", width: "100%" }}
          > */}
          <a
            style={{ margin: "0 8px", color: "#2aa45e" }}
            href={`mailto:asha@wsn.ae`}
          >
            {"asha@wsn.ae"}
          </a>
          {/* <br /> */}
          <a
            style={{ margin: "0 8px", color: "#2aa45e" }}
            href={`mailto:amal@wsn.ae`}
          >
            {"amal@wsn.ae"}
          </a>
          {/* <br /> */}
          <a
            style={{ margin: "0 8px", color: "#2aa45e" }}
            href={`mailto:sona@wsn.ae`}
          >
            {"sona@wsn.ae"}
          </a>
          {/* </Box> */}
        </Typography>

        <Typography style={{ marginTop: "3%" }}>
          Address - Dubai, UAE
        </Typography>
      </center>
    </div>
  );
}
