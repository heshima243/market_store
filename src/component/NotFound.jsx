import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box p={6} flex={4}  minHeight="130vh" >
        <Typography variant="h6" color="initial">
          Ouhhps!! page not Found <Link style={{color:'blue'}} to="/">Clic here </Link>to Return to
          home page
        </Typography>
      </Box>
    </Container>
  );
};
