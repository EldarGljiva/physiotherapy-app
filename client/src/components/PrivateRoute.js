import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.error("You need to log in to access this page.");
    }
  }, [token]);

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
