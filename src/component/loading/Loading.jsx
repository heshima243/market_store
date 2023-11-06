import { Box, Card, Container, Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function Loading() {
  let Post = [1, 2, 3, 4, 5, 6];
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        {Post.map((post, index) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Skeleton width="300px" height="200px"></Skeleton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
