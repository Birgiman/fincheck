import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useLoginController } from './useLoginController';

export function Login() {

  const { register, handleSubmit, errors, isLoading } = useLoginController();

  return (
    <>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='text-2xl font-bold  text-gray-900 tracking-tightest'>
          Entre em sua conta
        </h1>

        <p className='space-x-2'>
          <span className='text-gray-700 tracking-tighter'>
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className='font-medium text-teal-900 tracking-tighter'>
            Crie uma conta
          </Link>
        </p>
      </header>
      <form
        onSubmit={handleSubmit}
        className='mt-[60px] flex flex-col gap-4'>
        <Input
          type='email'
          placeholder='E-mail'
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          type='password'
          placeholder='Senha'
          {...register('password')}
          error={errors.password?.message}
        />

        <Button
          type='submit'
          isLoading={isLoading}
          className='mt-2'
        >
          Entrar
        </Button>
      </form>
    </>
  )
}
