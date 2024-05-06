import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkOutLoginFx } from "store/auth/effects";

const AppLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) checkOutLoginFx({ token });
    navigate(token ? "/dashboard" : "/signin");
  }, [token, navigate]);

  return <Outlet />;
};

export default AppLayout;
