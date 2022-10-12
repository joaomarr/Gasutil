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
import BotijaoCard from '../components/botijaoCard'
import PecaGas from '../components/Buttons/pecagas'
import Navbar from '../components/navbar'

import BotijõesHero from '../public/images/BotijõesHero.svg'
import BotijaoFaixa from '../public/svg/BotijaoFaixa.js'


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
          fontSize="xl"
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
          fontSize="sm"
          mx="30px"
        >
          A Gasutil oferece dois tipos de botijão ultragaz, referência de gás no Brasil a 80 anos.
          Ambos são botijões de gás GLP (gás de cozinha).
        </Text>
        <Flex
          w="100%"
          flexDirection="column"
          align='center'
          position="relative"
        >
          <BotijaoFaixa />
          <BotijaoCard botijao="P13" />
          <BotijaoCard botijao="P45" />
        </Flex>
      </Box>
    </>
  )
}
