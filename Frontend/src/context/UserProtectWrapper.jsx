import React, { useContext, useEffect } from "react";
import { UserDataContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  console.log(token);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
 
  return <>{children}</>;
};

export default UserProtectWrapper;
