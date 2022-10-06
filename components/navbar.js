import { 
    Flex,
    Show,
    Hide,
    Box,
    useDisclosure,
    Slide,
    Fade,
} from '@chakra-ui/react'
import MainLogo from '../public/svg/MainLogo'
import MenuToggle from '../public/svg/MenuToggle'
  
export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Flex 
                mx={3} 
                h={20} 
                align="center" 
                justify="space-between"
            >
                <MainLogo />
                <Show above="lg">
                    {/* 
                        Desktop Links 
                        Can use loop trough a list of them, with name and path
                    */}
                </Show>
                <Hide above="lg">
                    <Fade
                        in={!isOpen}
                        mr={2} 
                        onClick={onToggle}
                    >
                        <MenuToggle/>
                    </Fade>
                </Hide>
            </Flex>
            <Slide direction='right' in={isOpen}>
                <Box
                    pos="fixed"
                    bg="ultragazBlue"
                    w="75%"
                    h="75vh"
                    right={0}
                    color="#ffffff"
                >
                    Lorem Ipsum
                </Box>
            </Slide>
        </Box>
    )
}