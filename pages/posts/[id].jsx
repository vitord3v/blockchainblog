import { Box, Input, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Comment from "../../components/Comment";

const Post = () => {
  const [comments, setComments] = useState([]); // No início, não temos nenhum comentário
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode fazer a chamada à API para adicionar o novo comentário
    // E depois atualizar a lista de comentários local
    // Por simplicidade, estamos apenas adicionando o novo comentário localmente
    setComments([
      ...comments,
      {
        author: "Usuário",
        text: newComment,
      },
    ]);
    setNewComment("");
  };

  return (
    <VStack align="stretch" maxW="md" mx="auto" mt={10} spacing={6}>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        Conteúdo da postagem...
      </Box>

      <form onSubmit={handleSubmit}>
        <FormControl id="comment" isRequired>
          <FormLabel>Deixe um comentário</FormLabel>
          <Input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Digite seu comentário aqui"
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Postar
        </Button>
      </form>

      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </VStack>
  );
};

export default Post;
