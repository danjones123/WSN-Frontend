import useAxiosPrivate from "../api/axios";
import axios from "../api/axios";
import useAuth from "./useAuth";
import { useState } from "react";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
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
      return {
        ...prev,
        role: response.data.userRole,
        accessToken: response.data.accessToken,
      };
    });

    return response.data.accessToken;

    //TODO - If a duplicate refresh token reponse sent then needs to handle and try the auth token again
  };

  return refresh;
};

export default useRefreshToken;
