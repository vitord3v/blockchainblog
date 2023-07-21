import { Box, Heading, Text } from '@chakra-ui/react';

const posts = [
  {
    id: 1,
    title: "Introdução à Web3",
    excerpt: "Este artigo apresenta a Web3...",
  },
  {
    id: 2,
    title: "Por que Blockchain é revolucionário",
    excerpt: "Neste post, vamos explorar por que o blockchain...",
  },
  
];
const Home = () => {
  return (
    <Box>
      <Box p={5}>
        <Heading as="h1" mb={5}>Postagens Recentes</Heading>
        {posts.map((post) => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" rounded="md">
            <Heading as="h2">{post.title}</Heading>
            <Text mt={4}>{post.excerpt}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;

