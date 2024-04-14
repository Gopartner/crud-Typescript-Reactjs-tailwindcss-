import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  stock: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, stock, imageUrl }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Card>
      <Grid container spacing={2}>
        {/* Side with text content */}
        <Grid item xs={12} sm={8} md={8}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Harga: {price}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Jumlah Stok: {stock}
            </Typography>
          </CardContent>
        </Grid>
        {/* Side with image and button */}
        <Grid item xs={12} sm={4} md={4}>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title}
          />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '8px' }}>
            <Button
              variant="outlined"
              onClick={handleRemoveFromCart}
              disabled={quantity === 0}
              startIcon={<RemoveIcon />}
            >
              -
            </Button>
            <Typography variant="body1" style={{ margin: '0 8px' }}>
              {quantity}
            </Typography>
            <Button variant="outlined" onClick={handleAddToCart} startIcon={<AddIcon />}>
              +
            </Button>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;

