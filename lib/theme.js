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

const breakpoints = {
    'xs': '10em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }

const theme = extendTheme({ config, fonts, colors, breakpoints })
export default theme