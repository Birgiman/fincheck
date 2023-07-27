import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { authService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um E-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'A senha deve conter 8 caracteres ou mais'),
})

type FormData = z.infer<typeof schema>;

export function useRegisterController() {

  const {
    handleSubmit: hookformSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  })

  const handleSubmit = hookformSubmit(async (data) => {
   try {
    await mutateAsync(data)

   } catch {
    toast.error('Ocorreu um erro ao criar a sua conta.')
   }

  })

  return {register, errors, handleSubmit, isLoading}

}
