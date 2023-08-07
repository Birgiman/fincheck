import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../../app/utils/cn';
import { Button } from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';
import { useFiltersModal } from './useFiltersModalController';

interface FiltersModalProps {
  open: boolean
  onClose(): void
  onApplyFilters(filters: { bankAccountId: string | undefined; year: number }): void
}

export function FiltersModal({ open, onClose, onApplyFilters }: FiltersModalProps) {

  const {
    handleSelectBankAccount,
    selectedBankAccountId,
    handleChangeYear,
    selectedYear,
    accounts,
  } = useFiltersModal();


  return (
    <Modal open={open} onClose={onClose} title='Filtros'>
      <div>
        <span
          className='text-lg font-bold tracking-tightest text-gray-800'
        >
          Conta
        </span>
        <div
          className='space-y-2 mt-2'
        >
          {accounts.map(BankAccount => (
            <button
              key={BankAccount.id}
              onClick={() => handleSelectBankAccount(BankAccount.id)}
              className={cn(
                'p-2 rounded-2xl w-full text-left hover:bg-gray-50 text-gray-800 transition-colors',
                BankAccount.id === selectedBankAccountId && '!bg-gray-200',
              )}
            >
              {BankAccount.name}
            </button>
          ))}
        </div>
      </div>

      <div
        className='mt-10 text-gray-800'
      >
        <span
          className='text-lg font-bold tracking-tightest'
        >
          Ano
        </span>
        <div
          className='space-y-2 mt-2'
        >
          <div
            className='mt-2 w-52 flex items-center justify-between'
          >
            <button
              onClick={() => handleChangeYear(-1)}
              className='w-12 h-12 flex items-center justify-center'
            >
              <ChevronLeftIcon
                className='w-6 h-6'
              />
            </button>
            <div
              className='flex-1 text-center'
            >
              <span
                className='text-sm font-medium tracking-tighter'
              >
                {selectedYear}
              </span>
            </div>
            <button
              onClick={() => handleChangeYear(+1)}
              className='w-12 h-12 flex items-center justify-center'
            >
              <ChevronRightIcon
                className='w-6 h-6'
              />
            </button>
          </div>

        </div>
      </div>

      <Button
        className='w-full mt-10'
        onClick={() => onApplyFilters({ bankAccountId: selectedBankAccountId, year: selectedYear })}
      >
        Aplicar Filtros
      </Button>
    </Modal>
  )
}
