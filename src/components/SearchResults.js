import Container from "@mui/material/Container";
import { ProductCard } from "./ProductCard";

export const SearchResults = ({ results, mode }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {results.map((result) => {
        return <ProductCard key={result.asin} result={result} mode={mode} />;
      })}
    </Container>
  );
};
