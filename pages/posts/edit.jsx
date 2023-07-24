import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

const EditPost = () => {
  const { handleSubmit, control, errors } = useForm();
  const toast = useToast();
  const router = useRouter();
  const { id } = router.query;

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  // Substitua isto pela sua chamada à API para obter os dados da postagem.
  const post = { title: "Título do post", content: "Conteúdo do post" };

  const onSubmit = (data) => {
    // Aqui você faria a chamada à API para atualizar a postagem.
    // Por enquanto, apenas exibimos um toast de sucesso.
    toast({
      title: "Postagem atualizada.",
      description: `A postagem "${data.title}" foi atualizada com sucesso.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const onDelete = () => {
    // Aqui você faria a chamada à API para excluir a postagem.
    // Por enquanto, apenas exibimos um toast de sucesso e redirecionamos o usuário para a página inicial.
    toast({
      title: "Postagem excluída.",
      description: `A postagem "${post.title}" foi excluída com sucesso.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    router.push("/");
  };

  return (
    <Box>
      <Box p={5}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="title" isRequired>
            <FormLabel>Título</FormLabel>
            <Controller
              name="title"
              control={control}
              defaultValue={post.title}
              rules={{ required: "O título é obrigatório." }}
              render={({ field }) => <Input {...field} />}
            />
            {/* errors.title && <span>{errors.title.message}</span>*/}
          </FormControl>
          <FormControl id="content" isRequired mt={4}>
            <FormLabel>Conteúdo</FormLabel>
            <Controller
              name="content"
              control={control}
              defaultValue={post.content}
              rules={{ required: "O conteúdo é obrigatório." }}
              render={({ field }) => <Textarea {...field} />}
            />
            {/* errors.content && <span>{errors.content.message}</span>*/}
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>
            Atualizar
          </Button>
          <Button colorScheme="red" ml={4} onClick={() => setIsOpen(true)}>
            Excluir
          </Button>
        </form>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Excluir Postagem
              </AlertDialogHeader>
              <AlertDialogBody>
                Tem certeza que deseja excluir a postagem "{post.title}"? Esta ação não pode ser desfeita.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="red" onClick={onDelete} ml={3}>
                  Excluir
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Box>
  );
};

export default EditPost;
