import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { SearchFrom } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Stack>
        <Box>
          <SearchFrom />
        </Box>
        <Box>
          <SearchResults />
        </Box>
      </Stack>
    </Container>
  );
};
