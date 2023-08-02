import { ExitIcon } from '@radix-ui/react-icons';
import { useAuth } from '../../app/hooks/useAuth';
import { DropdownMenu } from './DropDownMenu';

export function UserMenu() {

  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100' >
          <span className='text-sm tracking-tighter text-teal-900 font-medium' >
            EB
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className='w-32'
      >
        <DropdownMenu.Item
          className='flex items-center justify-between'
          onSelect={signout}
        >
          Sair
          <ExitIcon className='w-4 h-4' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
