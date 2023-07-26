import { useState } from "react";
import {  Link, Input, Button, FormControl,Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // Redirecionar o usuário para a rota /search com o termo de pesquisa como parâmetro de query.
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <Flex bg="purple.800" w="100%" alignItems='center'  p={4} color="white"  fontWeight="bold">
      <Link href="/" mr={5}>
        Inicio
      </Link>
      <Link href="/topPosts" mr={5}>
        Bombando
      </Link>
      <Link href="/about" mr={5}>
        Todos
      </Link>
      <FormControl display="flex"ml={5} onSubmit={onSearchSubmit}>
          <Input
            placeholder="Nome do artigo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            mr={2}
            display="inline-block"
            width="200px"
          />
          <Button type="submit" display="inline-block">
            Pesquisar
          </Button>
            
      </FormControl>
      <Link href="/login" mr={5}>
        <Button>
        Entrar
        </Button>
      </Link>
      <Link href="/signup" mr={5}>
        <Button>
        Cadastre-se
        </Button>
      </Link>
    </Flex>
  );
};

export default Header;
