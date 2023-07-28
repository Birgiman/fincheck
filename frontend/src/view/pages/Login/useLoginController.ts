import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useAuth } from '../../../app/hooks/useAuth';
import { authService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um E-mail válido'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'A senha deve conter 8 caracteres ou mais'),
})

type FormData = z.infer<typeof schema>

export function useLoginController() {
  const { register, handleSubmit: hookformSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  })

  const { signin } = useAuth();

  const handleSubmit = hookformSubmit(async (data) => {
   try {
    const { accessToken } = await mutateAsync(data)

    signin(accessToken);

   } catch {
    toast.error('Credenciais inválidas.')
   }

  })

  return { register, handleSubmit, errors, isLoading }
}
