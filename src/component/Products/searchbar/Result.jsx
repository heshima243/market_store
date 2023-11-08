import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import CardProduct from "../CardProduct";

export default function Result() {
  const { state, loading } = useLocation();

  console.log("article", state.posts.title);
  return (
    <Container sx={{ marginTop: "70px" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography gutterBottom textAlign="center" variant="h5" color="text.secondary">
           <span style={{fontFamily:'italic'}}>  Resultata Lié a cette orthographe : </span>
            <span style={{ color: "green", fontWeight: "600" }}>
              {state.posts.length}
            </span>
            <span style={{ color: "#333", fontWeight: "600" }}> products trouves</span>
          </Typography>
          <Grid container spacing={2}>
            {state &&
              state.posts.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <CardProduct post={post} />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
