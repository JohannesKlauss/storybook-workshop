import {extendTheme} from "@chakra-ui/react";

export const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fonts: {
    body: '"Montserrat", sans-serif',
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
})