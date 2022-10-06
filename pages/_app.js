import { ChakraProvider } from "@chakra-ui/react"
import theme from "../lib/theme"

function Gasutil({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Gasutil
