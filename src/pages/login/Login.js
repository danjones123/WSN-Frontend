import * as React from "react";

import Header from "../../components/GlobalHeader";
import { Typography, Box, Button } from "@mui/material";

export default function Login() {
  function callLogin() {}

  return (
    <Box>
      <Header title="Login"></Header>
      <center style={{ maxWidth: "xs" }}>
        <Box sx={{ maxWidth: "lg" }}>
          <Typography variant="h1" color="primary" marginBottom="20px">
            Login
          </Typography>
          <Button onClick={() => callLogin()}>Login</Button>
        </Box>
      </center>
    </Box>
  );
}
