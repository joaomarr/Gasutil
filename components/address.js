import { 
    Box, 
    Flex,
    Text,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react'

export default function Adress({ fixed }) {
    
    const color = useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0.5)")
    const colorFixed = useColorModeValue("#000000", "#ffffff")

    return (
        <Flex
            align="center"
            color={fixed ? colorFixed : color}
            transition="color 200ms linear"
            _hover={{ color: colorFixed }}
            cursor="pointer"
        >
            <Box w="10px" h={10} bg={colorFixed} mt="2px"/>
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