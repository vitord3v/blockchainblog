import { useState } from "react";
import { Input, Button, FormControl,Flex, Text } from "@chakra-ui/react";
import Link from 'next/link'
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
    <Flex bg="purple.800" w="100%" alignItems='center'  p={4} color="white"  fontWeight="bold" gap='2'>
      <Button>
        <Link href="/" mr={5}>
          <Text color='black' >Inicio</Text>
        </Link>
      </Button>
      <Button>
        <Link href="/topPosts" mr={5}>
          <Text color='black'>Bombando</Text>
        </Link>
      </Button>
      <Button>
        <Link href="/about" mr={5}>
          <Text color='black'>Todos</Text>
        </Link>
      </Button>
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
      <Button>
        <Link href="/login" mr={5}>
          <Text color='black'>Entrar</Text>
        </Link>
      </Button>
      <Button>
        <Link href="/signup" mr={5}>
          <Text color='black'>Cadastrar-se</Text>
        </Link>
      </Button>
    </Flex>
  );
};

export default Header;
