import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./component/header/Navbar";
import Footer from "./component/footer/Footer";
import "../src/component/css/App.css";
import MapCard from "./component/Products/MapCard";
import SearchBar from "./component/Products/searchbar/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./component/Products/searchbar/Result";
import Home from "./component/Home";
import NofoundResult from "./component/Products/searchbar/NofoundResult";
import { NotFound } from "./component/NotFound";


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/resultNotfound" element={<NofoundResult />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
