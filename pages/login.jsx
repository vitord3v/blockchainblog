import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a chamada à API para fazer o login
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <Box maxW="md" mx="auto" mt={20}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mt={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Entrar
        </Button>
      </form>
    </Box>
  );
};

export default Login;