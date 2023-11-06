import { Grid, Skeleton } from "@mui/material";
import React from "react";

export default function Animation() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={350}
        height={125}
      />
      {/* <Skeleton variant="circular" animation="wave" width={40} height={40} /> */}
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="text" animation="wave" />
    </Grid>
  );
}
