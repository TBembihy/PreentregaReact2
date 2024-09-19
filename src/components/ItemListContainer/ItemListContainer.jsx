import { Box } from "@chakra-ui/react"; 

const ItemListContainer = ({ greeting, products
 }) => {
  console.log(products);  
  
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {
        products.map((product, index) => {
            return (
                <Box key={index}>
                    <h2>{product.name}</h2>
                    <p>Detalle: {product.description}</p>
                    <p>${product.price}</p>
                    <img src={product.image} alt={product.name} />
                </Box>
            )
        })
      }
    </Box>
  );
}; 

export default ItemListContainer;