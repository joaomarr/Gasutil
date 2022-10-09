import { 
    Button,
    Link,
    Text,
} from "@chakra-ui/react"

import BlueFire from '../../public/svg/BlueFire'
import GradientFire from '../../public/svg/GradientFire'


export default function PecaGas({ gradient, rightRounded }) {
    const styles = {
        buttonBg: {
            boxShadow: gradient ? "inset 8px 8px 4px rgba(0, 0, 0, 0.25)" : "",
            background: gradient ? "linear-gradient(180deg, #000FFF 0%, rgba(0, 250, 255, 0) 180.68%)" : "#ffffff",
        }
    }
    
    return (
        <Link
            style={{ textDecoration: 'none' }}
        >
            <Button
                borderRadius="20px"
                borderBottomRightRadius={rightRounded ? "64px" : "20px"}
                color={gradient ? "#ffffff" : "ultragazBlue" }
                style={styles.buttonBg}
                w={{xs: 28, lg: 40}}
                h={{xs: 10, lg: 12}}
                py={2}
                pr={{xs: 4, lg: 8}}
                display="flex"
                justifyContent="space-between"
                align="center"
            >
                {gradient ? <GradientFire /> : <BlueFire />}
                <Text
                    mt={1}
                    fontSize={{xs: "xs", lg: "md"}}
                    fontWeight="700"
                >
                    Peça Gás
                </Text>
            </Button>
        </Link>
    )
}