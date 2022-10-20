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
            right={{xs: "25px", md: 20}}
            href="https://api.whatsapp.com/send?phone=553133732225"
            target="_blank"
        >
            <Center
                cursor="pointer"
                borderRadius="100%"
                h={{xs: "80px",md: "100px"}}
                w={{xs: "80px",md: "100px"}}
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