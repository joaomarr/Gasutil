import { 
    Flex,
    Show,
    Hide,
    Box,
    useDisclosure,
    Slide,
    Fade,
    CloseButton,
    VStack,
    Stack,
    useColorModeValue,
    Button,
} from '@chakra-ui/react'

import MainLogo from '../public/svg/MainLogo'
import MenuToggle from '../public/svg/MenuToggle'
import PecaGas from './Buttons/pecagas'

const links = [
    {
        title: "Botijões",
        href: "botijões",
    },
    {
        title: "Sobre Nós",
        href: "sobrenos",
    },
    {
        title: "Energia Verde",
        href: "energiaverde",
    },
    {
        title: "Contato",
        href: "contato",
    },
]
  
export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    const scrollToEl = (elId) => {
        window.scrollTo({
            top: document.getElementById(elId).offsetTop - 100,
            behavior: 'smooth',
        })
    }

    return (
        <Box
            pos="fixed"
            w="100%"
            bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)")}
            backdropFilter="auto"
            backdropBlur="6px"
            zIndex="10"
        >
            <Flex 
                mx={{lg: 20, xs: 3}} 
                h={20} 
                align="center" 
                justify="space-between"
            >
                <MainLogo />
                <Show above="lg">
                    <Stack
                        direction="row"
                        spacing={10}
                    >
                        { links.map(link => {
                            return (
                                <Button 
                                    onClick={() => scrollToEl(link.href)}
                                    bg="transparent"
                                    key={link.href}
                                    w="fit-content"
                                    textAlign="center"
                                    fontSize="lg"
                                >
                                    {link.title}
                                </Button>
                            )
                        }) }
                    </Stack>
                    <PecaGas 
                        gradient={true}
                        rightRounded={true}
                    />
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
            <Slide 
                direction='right' 
                in={isOpen}
            >
                <Box
                    pos="fixed"
                    bg="ultragazBlue"
                    w="65%"
                    right={0}
                    color="ultragazGreen"
                    borderBottomLeftRadius="12px"
                    p={5}
                >
                    <Flex
                        justify="space-between"
                    >
                        <CloseButton 
                            size="lg" 
                            onClick={onToggle}
                        />
                        <PecaGas 
                            gradient={false}
                            rightRounded={false}
                        />
                    </Flex>
                    <VStack 
                        spacing={16}
                        my={12}
                    >
                        { links.map(link => {
                            return (
                                <Button
                                    onClick={() => scrollToEl(link.href)}
                                    bg="transparent"
                                    key={link.href}
                                    w="100%"
                                    textAlign="right"
                                    fontSize="2xl"
                                    fontWeight="800"
                                >
                                    {link.title}
                                </Button>
                            )
                        }) }
                    </VStack>
                </Box>
            </Slide>
        </Box>
    )
}