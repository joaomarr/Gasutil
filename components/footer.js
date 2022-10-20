import { 
    Flex,
    Box,
    Heading,
    Text,
    Divider,
    Link,
} from '@chakra-ui/react'
import MainLogo from '../public/svg/MainLogo'
import Adress from './address'
import PecaGas from './Buttons/pecagas'
import ToTop from './Buttons/totop'
  
export default function Footer() {

    return (
        <Box
            w="100%"
            bgGradient="linear(to-r, #00FAFF 67.32%, #01FF15 100%)"
        >
            <Box bgGradient="linear(to-b, #ffffff, rgba(217, 217, 217, 0))" w="100%" h={{xs: "50px", md: "100px"}}/>
            <Flex flexDirection={{xs: "column", xl: "row"}} px={{xs: "25px", xl: 20}} justify="space-between">
                <Box>
                    <MainLogo />
                    <Flex my={{xs: "15px", md: "25px"}}>
                        <PecaGas />
                    </Flex>
                </Box>
                <Flex flexDirection="column" gap={10}>
                    <Adress fixed={true} />
                    <Flex gap={{xs: 5, md: 20}} flexDirection={{xs: "column", md: "row"}}>
                        <Box>
                            <Heading as="h5" fontSize={{xs:"xs", md: "sm"}} color="#000000">
                                Telefone fixo
                            </Heading>
                            <Text fontSize={{xs:"3xl", md: "5xl"}} color="ultragazBlue" fontWeight={800}>
                                0800 039 1919
                            </Text>
                        </Box>
                        <Box>
                            <Heading as="h5" fontSize={{xs:"xs", md: "sm"}} color="#000000">
                                Whatsapp
                            </Heading>
                            <Text fontSize={{xs:"3xl", md: "5xl"}} color="ultragazBlue" fontWeight={800}>
                                3373.2225
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Box>
                    <ToTop />
                </Box>
            </Flex>
            <Box py="25px" px={{xs: "25px", xl: 20}} maxW="3xl" mx="auto">
                <Divider opacity="1" colorScheme="#ffffff"/>
                <Flex justify="space-between" mt="25px" fontSize={{xs:"9px", md: "base"}} fontWeight={700}>
                    <Text as="span">
                        Copyright © 2022 Gasutil
                    </Text>
                    <Text as="span" >
                        Desenvolvido por @<Link>joaomarr</Link>
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}