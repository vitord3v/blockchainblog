import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "../../components/Header";

// Este é um exemplo de dados para as postagens do blog. Substitua isto pela sua chamada à API.
const posts = [
  {
    id: 1,
    title: "Introdução à Web3",
    content: "Este artigo apresenta a Web3...",
  },
  {
    id: 2,
    title: "Por que Blockchain é revolucionário",
    content: "Neste post, vamos explorar por que o blockchain...",
  },
  // Adicione mais postagens conforme necessário
];

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // Encontra a postagem correspondente ao id da rota.
  const post = posts.find((post) => post.id === Number(id));

  // Se a postagem não foi encontrada, retorna null.
  if (!post) {
    return null;
  }

  return (
    <Box>
      <Box p={5}>
        <Heading as="h1" mb={5}>{post.title}</Heading>
        <Text mt={4}>{post.content}</Text>
      </Box>
    </Box>
  );
};

export default Post;
