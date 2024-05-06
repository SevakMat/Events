import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import routers from "routes/routers";

const theme = createTheme({});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
};

export default App;
