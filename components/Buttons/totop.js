import { 
    Button,
    Link,
} from "@chakra-ui/react"
import { ArrowUpIcon } from '@chakra-ui/icons'

export default function ToTop() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Link onClick={() => scrollUp()}>
            <Button
                borderRadius="100%"
                h={{xs: "80px",md: "100px"}}
                w={{xs: "80px",md: "100px"}}
                mt={{xs: "25px", xl: 0}}
                bg="#ffffff"
            >
                <ArrowUpIcon boxSize="70%" color="ultragazBlue"/>
            </Button>
        </Link>
    )
}