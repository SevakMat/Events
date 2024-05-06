import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import routers from "routes/routers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const theme = createTheme({});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
};

export default App;
