import { 
    Box, 
    Flex,
    Text,
} from '@chakra-ui/react'


import Image from 'next/image'
import P45 from '../public/images/p45.png'
import P13 from '../public/images/p13.png'

export default function BotijaoCard({ botijao }) {
    return (
        <Box
            w={{xs: "275px", lg: "335px"}}
            my="20px"
            mx={{xs: "0px", lg: "8vw"}}
            px="30px"
            borderRadius="12px"
            style={{
            background: "linear-gradient(179.97deg, rgba(0, 15, 255, 0.85) 0.03%, rgba(0, 250, 255, 0.85) 137.1%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 8px 8px 8px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(3px)",}}    
        >
            <Flex
                w="100%"
                h={{xs: "262px", lg: "310px"}}
                pt="10px"
                align={botijao === "P13" ? "center" : "start"}
                justify="center"
                borderBottomRadius="150px"
                overflow="hidden"
                style={{
                background: "linear-gradient(179.95deg, #01FF15 0.05%, #000FFF 110.17%)",
                boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",}}
            >
               <Image 
                    src={botijao === "P13" ? P13 : P45} 
                    alt={botijao}
                    objectFit="contain"
                    display="block"
                />
            </Flex>
            <Box
                w="100%"
                textAlign="center"
                mt={{xs: "20px", lg: "35px"}}
                mb={{xs: "12px", lg: "20px"}}
            >
                <Text 
                    as="h4"
                    color="ultragazBlue"
                    fontWeight="600"
                    fontSize={{xs: "lg", lg: "xl"}}
                >
                    Botijão {botijao}
                </Text>
                <Text
                    as="h5"
                    color="#ffffff"
                    fontSize={{xs: "5xl", lg: "6xl"}}
                    fontWeight="900"
                >
                    R$100,<Text as="span" fontSize="lg">99</Text>
                </Text>
            </Box>
        </Box>
    )
}