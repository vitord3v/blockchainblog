import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

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
  const coinRef = useRef(null);

  useEffect(() => {
    gsap.to(coinRef.current, {
      rotationY: 360,
      repeat: -1,
      duration: 3,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <Box>
      <Image ref={coinRef} src="/cashImage.png" alt="Coin" w="100px" h="100px" my="2rem" />
      <Heading as="h1" mb={'2rem'}>Postagens Recentes</Heading>
        <Box p={5} display='flex' gap='2rem' flexDir='column'>
          {posts.map((post) => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px" rounded="md" display='flex' alignItems='center' justifyContent='center' flexDir='column'>
              <Heading as="h2">{post.title}</Heading>
              <Text mt={4}>{post.excerpt}</Text>
              <Link href={`/post/${post.id}`}>
                <Button mt={4} colorScheme="teal">Leia mais</Button>
              </Link>
            </Box>
          ))}
        </Box>
    </Box>
  );
};

export default Home;
