import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AlreadyLoggedInRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      toast.info("You're already logged in.");
    }
  }, [token]);

  return token ? <Navigate to="/menu" /> : children;
};

export default AlreadyLoggedInRoute;
