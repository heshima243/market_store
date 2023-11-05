import { ArrowBack } from '@mui/icons-material';
import { CardOverflow } from '@mui/joy';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography'
import PostCard from './PostCard';
import { ChakraProvider } from "@chakra-ui/react";
// import CardProduct from "./component/header/CardProduct";
// import { Text } from "@chakra-ui/react";
import Navbar from "./component/header/Navbar";
import MapCard from "./component/header/MapCard";
import Footer from './component/Footer'


function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
      <MapCard />
      <Footer/>
      
     
    </>
  );
}

export default App;
