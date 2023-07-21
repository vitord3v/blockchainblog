import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
      600: "#1D2D50",
      500: "#133B5C",
      400: "#1E5F74",
      300: "#F3D9DA",
      200: "#C8C8C8",
      100: "#1A936F",
      50: "#114B5F",
    },
  },
  fonts: {
    heading: "Open Sans",
    body: "Raleway",
  },
  styles: {
    global: {
     
      body: {
        bg: "brand.600",
        color: "white",
      },
     
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
})

export default theme;
