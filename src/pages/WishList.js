import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import { SearchResults } from "../components/SearchResults";
import { useBasket } from "../context/BasketProvider";
import { useEffect } from "react";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const WishList = () => {
  const { results, setResults } = useBasket();

  useEffect(() => {
    const wishListFromLS = getFromLocalStorage("wishList", []);

    setResults(wishListFromLS);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box>
        {results.length === 0 && (
          <Alert severity="info">
            You have no items in your wish list. Please continue browsing and
            add items to your wish-list.
          </Alert>
        )}
        {results.length > 0 && (
          <SearchResults results={results} mode="wishList" />
        )}
      </Box>
    </Container>
  );
};
