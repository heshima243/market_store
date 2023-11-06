import React from "react";
import { Box, CardMedia, Container, Skeleton, useMediaQuery } from "@mui/material";

let posts = [1,2];
export default function ReadAnimation() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={{ marginTop: "9px" }}>
      {posts.map((post) => (
        <>
         
         
        </>
      ))}
    </Container>
  );
}
