import { Button, TextField } from "@mui/material";
import React from "react";

export default function SearchBar({setSearchTerm,searchTerm,handleSearch}) {

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <TextField
        label="Rechercher un produit"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
        onKeyPress={handleKeyPress}
      />
      <Button  sx={{marginBottom:'20px'}} variant="contained" onClick={handleSearch} gutterBottom>
        Search
      </Button>
    </>
  );
}
