import {
  Box, 
  Flex, 
  Heading,
  Text,
  Link,
  Button,
  Stack,
  Divider,
} from '@chakra-ui/react'

import Image from 'next/image'
import { motion } from 'framer-motion'

import BotijaoCard from '../components/botijaoCard'
import PecaGas from '../components/Buttons/pecagas'
import Navbar from '../components/navbar'
import BotijõesHero from '../public/images/BotijõesHero.svg'
import MasterCardLogo from '../public/images/MasterCardLogo.png'
import VisaLogo from '../public/images/VisaLogo.png'
import UltragazEnergia from '../public/images/ultragaz_energia.jpg'
import UltragazSomandoEnergia from '../public/images/UltragazSomandoEnergia.png'
import ArvoreUltragaz from '../public/images/ArvoreUltragaz.png'
import BotijaoFaixa from '../public/svg/BotijaoFaixa.js'
import UltragazWaves from '../public/svg/UltragazWaves.js'
import Adress from '../components/address.js'

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        pt="80px"
        px={{xs: 0, lg: 5}}
        overflow="hidden"
      >
        <Flex
          bg="linear-gradient(104.51deg, #000FFF 0%, #00FAFF 100%)"
          h="85vh"
          minH="460px"
          maxH="1200px"
          borderRadius="24px"
          borderBottomRightRadius="168px"
          justifyContent="space-between"
          align="center"
          direction={{xs: "column", lg: "row"}}
          py={5}
          px={{xs: 0, lg: 14}}
        >
          <Box
            color="#ffffff"
            px={{xs: 8, lg: 0}}
            maxW={{xs: "100%", lg: "50%"}}
            py={{xs: 2,lg: 5}}
          >
            <Heading
              as="h1"
              fontSize={{xs: "36px", lg: "58px", "2xl": "80px"}}
              fontWeight={800}
            >
              Seu gás onde, como e quando quiser
            </Heading>
            <Text py={{xs: 4,lg: 12}} fontSize={{xs: "14px", lg: "20px", "2xl": "26px"}}>
              Há mais de 30 anos entregando o gás da sua casa. Uma das maiores e mais reconhecidas revendedoras <Text color="ultragazCyan" as="span">ultragaz</Text> de Belo Horizonte e região.
            </Text>
            <Stack spacing={4} direction="row">
              <PecaGas rightRounded={true}/>
              <Link style={{ textDecoration: 'none' }}>
                  <Button
                      borderRadius="20px"
                      borderBottomRightRadius="64px"
                      color="#ffffff"
                      bg="transparent"
                      border="4px"
                      w={{xs: 28, lg: 40}}
                      h={{xs: 10, lg: 12}}
                      py={2}
                      justifyContent="center"
                      align="center"
                      fontSize={{xs: "xs", lg: "md"}}
                      fontWeight="700"
                  >
                      Saiba Mais
                  </Button>
              </Link>
            </Stack>
          </Box>
          <Box maxH="100%" flexGrow={1}>
            <Image 
              src={BotijõesHero} 
              alt="botijões ultragaz" 
              width="1198" 
              height="1232" 
              objectFit="contain" 
              display="block"
            />
          </Box>
        </Flex>
      </Box>
      <Box py={6} textAlign="center">
        <Heading 
          as="h3"
          fontSize={{xs: "xl", lg: "40px"}}
          fontWeight="800"
          color="ultragazBlue"
        >
          Peça o Botijão que prefirir
        </Heading>
        <Divider 
          orientation='horizontal' 
          borderColor="ultragazCyan"
          my={6}
          w="330px"
          mx="auto"
        />
        <Text 
          as="p"
          fontSize={{xs: "sm", lg: "md"}}
          mx="30px"
        >
          A Gasutil oferece dois tipos de botijão ultragaz, referência de gás no Brasil a 80 anos.<br></br>
          Ambos são botijões de gás GLP (gás de cozinha).
        </Text>
        <Flex
          w="100%"
          flexDirection="column"
          align='center'
          position="relative"
        >
          <BotijaoFaixa />
          <Box w={{xs: "75%", lg: "30%"}} left="0" top="25px" position="absolute">
            <motion.section 
              animate={{ y: [0, 70, 0] }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
            >
              <Image src={VisaLogo} alt="Visa Logo"/>
            </motion.section>
          </Box>
          <Box w={{xs: "75%", lg: "30%"}} right="0" bottom="15px" position="absolute">
            <motion.section 
              animate={{ y: [0, -70, 0] }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, delay: 1.8 }}
            >
              <Image src={MasterCardLogo} alt="MasterCard Logo"/>
            </motion.section>
          </Box>
          <Flex 
            my="50px" 
            flexDirection={{xs: "column", lg: "row"}}
            justify={{lg: "center"}}
          >
            <BotijaoCard botijao="P13" />
            <BotijaoCard botijao="P45" />
          </Flex>
        </Flex>
      </Box>
      <Flex bgGradient="linear(to-r, ultragazBlue, ultragazCyan)" w="100%" h="80px" gap={{ xs: "15px", lg: "40px" }} align="center" justify="center">
        <Text as="span" fontSize={{xs: "xs", lg: "md"}} color="#ffffff" fontWeight="600">
          Seu botijão a qualquer momento
        </Text>
        <PecaGas />
      </Flex>
      <Flex 
        my="50px"
        flexDirection={{xs: "column", md: "row"}}
        justify={{md: "space-between"}}
      >
        <Box px={{xs: "25px", md: 20}} my="auto" w={{xs: "100%", md: "50%"}}>
          <Text as="h5" fontSize={{xs: "md", md: "lg"}} fontWeight={700} position="relative" mb="40px"
             _before={{
              content: `""`,
              position: "absolute",
              bottom: "-10px",
              width: "150px",
              height: "4px",
              bgGradient: "linear(to-r, ultragazCyan, ultragazBlue)",
            }}
          >
            Sobre nós
          </Text>
          <Box>
            <Heading 
              as="h3" 
              my="18px"
              w={{xs: "100%", md: "500px"}}
              fontSize={{xs: "3xl", md: "5xl"}}
              color="ultragazBlue" 
              fontWeight={800}
            >
              Por que somos melhores que outras revendedoras?
            </Heading>
            <Text as="p" fontSize={{xs: "base", md: "lg"}}>
              Estamos há mais de 30 anos no mercado de Gás GLP, levando aos nossos clientes serviço de confiança, profissionais treinados e capacitados com veículos e EPI’s novos, um produto de extrema qualidade e com o peso correto.
              Buscando sempre entregar com rapidez, agilidade e segurança.
              Todo botijão comercializado por nós é enmvasado com bases certificadas, sob normas rígidas de produção, sempre lacrado e com dicas de utilização e segurança. 
            </Text>
          </Box>
        </Box>
        <Box w={{xs: "100%", md: "40%"}} maxW="600px" my="25px">
          <UltragazWaves />
        </Box>
      </Flex>
      <Box
        my="25px"
        px={{xs: "25px", md: 20}}
        w="100%"
        mx="auto"
        style={{background: "linear-gradient(360deg, #EFF0F0 73.94%, rgba(239, 240, 240, 0) 75.84%)",}}
      >
        <Flex 
          w={{xs: "100%", md: "65%"}}
          wMax="465px"
          mx="auto"
          border="1px"
          borderColor="#BBBCBC"
          borderRadius="12px"
          flexDirection={{xs: "column-reverse", md: "row"}}
          overflow="hidden"
        >
          <Flex my="50px" mx={{xs: "25px", md: "65px"}} flexDirection="column" justify="center" w={{xs: "100%", md: "50%"}}>
            <Heading as="h5" fontWeight="900" fontSize={{xs: "xl", md: "3xl"}}>
              Lorem ipsum dolor sit amet
            </Heading>
            <Text my="15px" fontSize={{xs: "sm", md: "md"}}>
              Aut reiciendis molestiae et dolores consequatur id maxime laborum est sunt tempora et quidem necessitatibus. 
            </Text>
            <Link style={{ textDecoration: 'none' }}>
              <Button
                w="150px"
                h="30px"
                bg="ultragazBlue"
                color="#ffffff"
                fontWeight="600"
                fontSize={{xs: "xs", md: "sm"}}
                rounded="20px"
              >
                Lorem Ipsum
              </Button>
            </Link>
          </Flex>
          <Box h={{xs: "50%", md: "100%"}} w={{xs: "100%", md: "50%"}} position="relative" overflow="hidden">
            <Image src={UltragazEnergia} alt="Ultragaz Energia" layout="responsive"/>
            <Box
              position="absolute"
              bottom="0"
              h={{xs: "100px", md: "100%"}}
              w={{xs: "100%", md: "100px"}}
              bgGradient={{xs: "linear(to-t, #FFFFFF, rgba(255, 255, 255, 0))", md: "linear(to-r, #FFFFFF, rgba(255, 255, 255, 0))"}}
            />
          </Box>
        </Flex>
        <Flex 
          flexDirection={{xs: "column", md: "row-reverse"}}
          position="relative" 
          justify="center"
          gap="20px"
          w="100%" 
          my="80px"
        >
            <Box position={{xs: "absolute", md: "relative"}}>
              <Image src={ArvoreUltragaz} alt="Sustentabilidade" />
            </Box>
            <Image src={UltragazSomandoEnergia} alt="Ultragaz Somando Energia" w="286" h="161" objectFit='contain'/>
        </Flex>
      </Box>
      <Box px={{xs: "25px", md: 20}} my="25px">
        <Adress />
      </Box>
    </>
  )
}
