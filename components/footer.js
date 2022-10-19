import { 
    Flex,
    Box,
    Heading,
    Text,
} from '@chakra-ui/react'
import MainLogo from '../public/svg/MainLogo'
import Adress from './address'
import PecaGas from './Buttons/pecagas'
  
export default function Footer() {

    return (
        <Box
            w="100%"
            h="50vh"
            bgGradient="linear(to-r, #00FAFF 67.32%, #01FF15 100%)"
        >
            <Box bgGradient="linear(to-b, #ffffff, rgba(217, 217, 217, 0))" w="100%" h={{xs: "50px", md: "100px"}}/>
            <Flex flexDirection={{xs: "column", md: "row"}} px={{xs: "25px", md: 20}} justify="space-between">
                <Box>
                    <MainLogo />
                    <Flex my={{xs: "15px", md: "25px"}}>
                        <PecaGas />
                    </Flex>
                </Box>
                <Flex flexDirection="column" gap={10}>
                    <Adress fixed={true} />
                    <Flex gap={20}>
                        <Box>
                            <Heading as="h5" fontSize="sm" color="#000000">
                                Telefone fixo
                            </Heading>
                            <Text fontSize="5xl" color="ultragazBlue" fontWeight={800}>
                                0800 039 1919
                            </Text>
                        </Box>
                        <Box>
                            <Heading as="h5" fontSize="sm" color="#000000">
                                Whatsapp
                            </Heading>
                            <Text fontSize="5xl" color="ultragazBlue" fontWeight={800}>
                                3373.2225
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}