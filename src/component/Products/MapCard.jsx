import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  CircularProgress,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import CardProduct from "./CardProduct";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchbar/SearchBar";
import Loading from "../loading/Loading";
import Rectungular from "../skeletonAnimation/Rectungular";

function MapCard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(true);
      });
  }, []);

  const handleSearch = () => {
    // Filtrer les produits en fonction du terme de recherche
    const filtered = posts.filter(
      (post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filtered);
    if (filtered.length === 0 && filtered == '') {
      navigate("/resultNotfound");
    } else {
      navigate("/result", { state: { posts: filtered }, loading });
    }
  };

 


  return (
    <Container sx={{ marginTop: "20px" }}>
     <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch}/>
     
      {loading ? (
        <Rectungular/>
      ) : (
        <Grid container spacing={2}>
          {posts && posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <CardProduct post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default MapCard;
