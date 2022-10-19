import { 
    Box, 
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react'

export default function Adress({ fixed }) {
    return (
        <Flex
            align="center"
            color={fixed ? "#00000" : "rgba(0, 0, 0, 0.5)"}
            transition="color 200ms linear"
            _hover={{ color: "#000000" }}
            cursor="pointer"
        >
            <Box w="10px" h={10} bg="#000000" mt="2px"/>
            <Heading as="h5" fontSize={{ xs: "4xl", md: "5xl" }} fontWeight={900} mx="8px">
                MG
            </Heading>
            <Text as="p" fontSize={{ xs: "10px", md: "12px" }} ml="5px">
                <Text as="span" fontWeight="700" fontSize={{ xs: "12px", md: "14px" }}>Belo Horizonte |</Text> Rua lindolfo de Azevedo, 1563<br></br>
                Jardim América | CEP 30421 428
            </Text>
        </Flex>
    )
}