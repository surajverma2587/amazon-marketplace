import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductCard = ({ result }) => {
  return (
    <Card sx={{ width: "18rem", m: 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={result.thumbnail}
        title={result.title}
      />
      <CardContent sx={{ minHeight: 150 }}>
        <Typography gutterBottom variant="h5" component="div">
          £{result.price.current_price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {result.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton aria-label="delete">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="delete">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
