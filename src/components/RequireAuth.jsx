import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import * as React from "react";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth);
  console.log(auth.accessToken);
  console.log(auth.role);
  console.log(allowedRoles);

  // return allowedRoles?.includes(auth?.role) ? (
  //   <Outlet />
  // ) : auth?.user ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );

  return allowedRoles?.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.accessToken ? ( //changed from user to accessToken to persist login after refresh
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
