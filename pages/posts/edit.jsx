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
    const id  = router.query;

    const post = { title:"Titulo do Post", content: "Conteudo do post" }

    const onSubmit = (data) => {
        // Aqui você faria a chamada à API para atualizar a postagem.
        // Por enquanto, apenas exibimos um toast de sucesso.
        toast({
            title:"Postagem atualizada.",
            description:`A postagem "${data.title}" foi atualizada com sucesso`,
            status:"sucess",
            duration:3000,
            isClosable:true,
        });
    };

    return (
        <Box>
            <Box p={5}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <FormControl id="title" isRequired >
                        <FormLabel>Título</FormLabel>
                        <Controller 
                            name="title"
                            control={control}
                            defaultValue={post.title}
                            rules={{required:"O titulo é obrigatório"}}
                            render={({ field }) => <Input {...field} />}
                        />
                        {/*errors.content && <span>{errors.content.message}</span>*/}
                    </FormControl>
                    <Button type='submit' colorScheme="blue" mt={4}>
                        Atualizar
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default EditPost;