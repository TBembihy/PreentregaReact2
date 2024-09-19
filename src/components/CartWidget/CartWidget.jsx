import { Flex, Text } from "@chakra-ui/react"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"50px"}>
            <AiOutlineShoppingCart size={30} />
            <Text>0</Text>
        </Flex>
    )
}

export default CartWidget