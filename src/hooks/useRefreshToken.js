import axios from "../api/axios";
import useAuth from "./useAuth";
import { useState } from "react";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const [pending, setPending] = useState(false);

  //TODO - currently is sending two refresh requests at once

  const refresh = async () => {
    if (pending) {
      return;
    } else {
      console.log("Refreshing Token");
      setPending(true);
      const response = await axios.post(
        "api/v1/auth/refresh",
        {},
        {
          withCredentials: true,
        }
      );
      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken };
      });
      setPending(false);
      return response.data.accessToken;
    }
  };
  return refresh;
};

export default useRefreshToken;

//TODO - Read the post from OAuth about sending token
//Either get the refresh token and store in a cookie or send it as a cookie from backend
