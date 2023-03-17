import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import { useBasket } from "../context/BasketProvider";
import { Prices } from "../components/Prices";

export const Checkout = () => {
  const { items } = useBasket();

  const checkoutItems = items.reduce((acc, item) => {
    const itemIndex = acc.findIndex((each) => each.asin === item.asin);

    if (itemIndex !== -1) {
      const itemToEdit = acc[itemIndex];
      itemToEdit.quantity += 1;

      return acc;
    } else {
      return [...acc, { ...item, quantity: 1 }];
    }
  }, []);

  console.log(checkoutItems);

  return (
    <Container maxWidth="lg">
      {items.length === 0 ? (
        <Alert severity="info">
          You have no items in your basket. Please continue browsing and add
          items to your basket.
        </Alert>
      ) : (
        <Prices checkoutItems={checkoutItems} />
      )}
    </Container>
  );
};
