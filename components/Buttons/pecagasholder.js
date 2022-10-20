import { 
    Box,
    Button,
    Center,
    Link,
    Text,
} from "@chakra-ui/react"

import WhiteFire from '../../public/svg/WhiteFire'


export default function PecaGasHolder() {
    return (
        <Link
            position="fixed"
            bottom={{xs: 5, md: 10}}
            right={{xs: 5, md: 10}}
        >
            <Center
                cursor="pointer"
                borderRadius="100%"
                h={{xs: "80px", md: "110px"}}
                w={{xs: "80px", md: "110px"}}
                bgGradient="linear(to-b, #01FF15 0%, #42A5F5 122.5%)"
                boxShadow='dark-lg'
                transition="800ms"
                _hover={{ bg: "ultragazBlue" }}
            >
                <WhiteFire />
            </Center>
        </Link>
    )
}