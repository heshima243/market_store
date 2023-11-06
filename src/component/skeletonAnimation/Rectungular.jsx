import React from "react";
import Animation from "./Animation";
import { Box, Container, Grid } from "@mui/material";

let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Rectungular() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // S'étend sur toute la hauteur de la page
    >
      <Container>
        <Grid
          container
          spacing={4}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {posts.map((post) => (
            <Animation />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
