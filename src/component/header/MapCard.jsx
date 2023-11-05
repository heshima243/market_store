import React from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { AspectRatio, CardActions, CardOverflow } from "@mui/joy";


const posts = [
  // Replace this with your actual data
  // Each item in the array represents a post
  // For example:
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  {
    id: 1,
    title: "Bluetooth Headset",
    imageSrc:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
    link: "#product-card",
    price: "2,900 THB",
    stock: 7,
  },
  // Add more items as needed
];

function MapCard() {
  return (
    <Container sx={{marginTop:'20px'}}>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card style={{flexGrow:1}}>
              <CardOverflow>
                <AspectRatio sx={{ minWidth: 200 }}>
                  <img
                    src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography variant="body1">{post.title}</Typography>
                <Link
                  href={post.link}
                  fontWeight="bold"
                  color="text.primary"
                  overlay
                >
                  Super Rockez A400
                </Link>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {post.price}
                </Typography>
                <Typography variant="body2">
                  (Only <b>{post.stock}</b> left in stock!)
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="warning" size="large">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MapCard;
