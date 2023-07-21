import { Box, Link } from "@chakra-ui/react";

const Header = () => (
    <Box bg="blue.800" w="100%" p={4} color="white">
        <Link href="/" mr={5}>Home</Link>
        <Link href="/about" mr={5}>Sobre</Link>
        <Link href="/contact" mr={5}>Contato</Link>
    </Box>
);

export default Header;