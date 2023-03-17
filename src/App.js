import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";
import { BasketProvider } from "./context/BasketProvider";

export const App = () => {
  return (
    <BasketProvider>
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
    </BasketProvider>
  );
};
