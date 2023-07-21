import { useForm, Controller } from "react-hook-form";
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import Header from "../../components/Header";

const NewPost = () => {
  const { handleSubmit, control, errors } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    // Aqui você faria a chamada à API para criar a nova postagem.
    // Por enquanto, apenas exibimos um toast de sucesso.
    toast({
      title: "Postagem criada.",
      description: `A postagem "${data.title}" foi criada com sucesso.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
              defaultValue=""
              rules={{ required: "O título é obrigatório." }}
              render={({ field }) => <Input {...field} />}
            />
            {/*errors.title && <span>{errors.title.message}</span>*/}
          </FormControl>
          <FormControl id="content" isRequired mt={4}>
            <FormLabel>Conteúdo</FormLabel>
            <Controller
              name="content"
              control={control}
              defaultValue=""
              rules={{ required: "O conteúdo é obrigatório." }}
              render={({ field }) => <Textarea {...field} />}
            />
            {/*errors.content && <span>{errors.content.message}</span>*/}
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}>
            Publicar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default NewPost;
