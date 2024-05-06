import { Box } from "@mui/material";
import Header from "components/header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default DashboardLayout;
