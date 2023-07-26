import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Aqui, você provavelmente faria uma chamada de API para registrar o usuário
  };

  return (
    <Box p={5} display='flex' alignItems='center' justifyContent='center' flexDir='column'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email', { required: "O email é obrigatório." })} />
          {errors.email && <span>{errors.email.message}</span>}
        </FormControl>

        <FormControl id="password" isRequired mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type="password" {...register('password', { required: "A senha é obrigatória." })} />
          {errors.password && <span>{errors.password.message}</span>}
        </FormControl>

        <FormControl id="passwordConfirm" isRequired mt={4}>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input type="password" {...register('passwordConfirm', { required: "A confirmação de senha é obrigatória." })} />
          {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
        </FormControl>

        <Button colorScheme="teal" type="submit" mt={4}>
          Cadastrar
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;