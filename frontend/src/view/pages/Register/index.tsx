import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useRegisterController } from './useRegisterController';

export function Register() {

  const { errors, handleSubmit, register, isLoading} = useRegisterController();

  return (
    <>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='text-2xl font-bold  text-gray-900 tracking-tightest'>
          Crie sua conta
        </h1>

        <p className='space-x-2'>
          <span className='text-gray-700 tracking-tighter'>
            Já possui uma conta?
          </span>
          <Link
            to="/login"
            className='font-medium text-teal-900 tracking-tighter'>
            Fazer Login
          </Link>
        </p>
      </header>
      <form
        onSubmit={handleSubmit}
        className='mt-[60px] flex flex-col gap-4'>
        <Input
          placeholder='Nome'
          {...register('name')}
          error={errors.name?.message}
        />
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
          Criar conta
        </Button>
      </form>
    </>
  )
}
