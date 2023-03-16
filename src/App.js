import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <Stack sx={{ minHeight: "100vh" }}>
        <Box sx={{ height: "7vh", mb: 2 }}>
          <NavigationBar />
        </Box>

        <Box sx={{ height: "93vh" }}>
          <AppRoutes />
        </Box>
      </Stack>
    </BrowserRouter>
  );
};
