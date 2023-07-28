import { Transition } from '@headlessui/react';
import { Logo } from '../components/Logo';

interface SplashScreenProps {
  isLoading: boolean;
}

export function SplashScreen({ isLoading }: SplashScreenProps) {
  return (
    <>
      <Transition
        show={isLoading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className='bg-teal-900 fixed top-0 left-0 w-full h-full grid items-center justify-center'>
          <div>
            <Logo className='h-10 text-white animate-bounce' />
          </div>
        </div>
      </Transition>
    </>
  )
}
