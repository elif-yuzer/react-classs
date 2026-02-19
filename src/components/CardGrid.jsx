import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";

const CardGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => setProducts(products));
  }, []);

  return (
    <Container>
      <Typography>CARD-GRID</Typography>
      <Grid container spacing={2}>
        {products.map((pro) => (
          <Grid item key={pro.id} xs={6} md={4}>
            <Card sx={{ maxWidth: 345, height:450 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={pro.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pro.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {pro.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">Share</Button>
                <Button variant="contained" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGrid;
