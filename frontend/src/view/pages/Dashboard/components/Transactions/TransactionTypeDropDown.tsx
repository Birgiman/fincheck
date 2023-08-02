import { ChevronDownIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropDownMenu';
import { ExpensesIcon } from '../../../../components/icons/ExpensesIcon';
import { IncomeIcon } from '../../../../components/icons/IncomeIcon';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';

export function TransactionTypeDropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className='flex items-center gap-2'>
          <TransactionsIcon />
          <span className='text-gray-800 tracking-tighter font-medium' >
            Transações
          </span>
          <ChevronDownIcon className='text-gray-900' />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className='w-[278px]'
      >
        <DropdownMenu.Item
          className='gap-2'
        >
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
        >
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
