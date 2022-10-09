import Navbar from '../components/navbar'
import { 
  Box,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        pt="80px"
        >
        <Box
          bg="linear-gradient(104.51deg, #000FFF 0%, #00FAFF 100%)"
          h="85vh"
          minH="460px"
          maxH="1200px"
          borderRadius="24px"
          borderBottomRightRadius="168px"
        >

        </Box>
      </Box>
    </>
  )
}
