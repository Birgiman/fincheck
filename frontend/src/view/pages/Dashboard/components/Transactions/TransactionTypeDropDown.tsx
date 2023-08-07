import { ChevronDownIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropDownMenu';
import { ExpensesIcon } from '../../../../components/icons/ExpensesIcon';
import { IncomeIcon } from '../../../../components/icons/IncomeIcon';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';

interface TransactionTypeDropDownProps {
  onSelect(type: 'INCOME' | 'EXPENSE' | undefined): void
  selectedType: 'INCOME' | 'EXPENSE' | undefined
}

export function TransactionTypeDropDown({ onSelect, selectedType }: TransactionTypeDropDownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className='flex items-center gap-2'>
          {selectedType === 'EXPENSE' && <ExpensesIcon />}
          {selectedType === 'INCOME' && <IncomeIcon />}
          {selectedType === undefined && <TransactionsIcon />
}

          <span className='text-gray-800 tracking-tighter font-medium text-sm' >
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === undefined && 'Transações'}
          </span>

          <ChevronDownIcon className='text-gray-900' />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className='w-[278px]'
      >
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => onSelect('INCOME')}
        >
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => onSelect('EXPENSE')}
        >
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => onSelect(undefined)}
        >
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
