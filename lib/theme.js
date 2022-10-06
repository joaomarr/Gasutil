import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const fonts = {
    body: `'Montserrat', sans-serif`,
}

const colors = {
    ultragazBlue: '#000FFF',
    ultragazCyan: '#00FAFF',
    ultragazGreen: '#01FF15',
}

const theme = extendTheme({ config, fonts, colors })
export default theme