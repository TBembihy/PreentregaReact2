import { useEffect } from "react";
import { Button, ChakraProvider, Text, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layout/MainLayout";
import { ProductsData } from "./data/productData"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  const myPromise = new Promise((resolve, reject,) => {
    const number = 5;
    if (number === 5) {
      resolve ("El número es 5")
    } else {
      reject ("El numero no es 5");
    }
  })
  
  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos" products={ProductsData} />
      </MainLayout>
    </ChakraProvider>

  );
}

export default App;