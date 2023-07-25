import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from 'react'

// Substitua isto pela chamada real à API
const fetchTopPosts = async () => [
  { id: 1, title: 'Postagem 1', description: 'Esta é a postagem 1.' },
  { id: 2, title: 'Postagem 2', description: 'Esta é a postagem 2.' },
  // ...
];

const Bombando = () => {
  const [topPosts, setTopPosts] = useState([]);

  useEffect(() => {
    fetchTopPosts().then(setTopPosts);
  }, []);

  return (
    <VStack align="stretch" maxW="md" mx="auto" mt={10} spacing={6}>
      <Heading>Bombando</Heading>
      {topPosts.map(post => (
        <Box key={post.id} borderWidth="1px" borderRadius="lg" p={4}>
          <Heading size="md">{post.title}</Heading>
          <Text mt={2}>{post.description}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Bombando;
