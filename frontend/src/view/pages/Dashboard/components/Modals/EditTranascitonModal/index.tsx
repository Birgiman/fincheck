import { TrashIcon } from '@radix-ui/react-icons';
import { Controller } from 'react-hook-form';
import { TransactionsEntity } from '../../../../../../app/entities/Transactions';
import { Button } from '../../../../../components/Button';
import { ConfirmDeleteModal } from '../../../../../components/ConfirmDeleteModal';
import { DatePickerInput } from '../../../../../components/DatePickerInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';
import { useEditTransactionModalController } from './useEditTransactionModalController';

interface EditTranasctionModalProps {
  open: boolean
  onClose(): void
  transaction: TransactionsEntity | null
}

export function EditTranasctionModal({ transaction, open, onClose }: EditTranasctionModalProps) {

  const {
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
    isDeleteModalOpen,
    isLoadingDelete,
    handleDeleteTransaction,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useEditTransactionModalController(transaction, onClose );

  const isExpense = transaction?.type === 'EXPENSE';

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        isLoading={isLoadingDelete}
        onConfirm={handleDeleteTransaction}
        onClose={handleCloseDeleteModal}
        title={`Tem certeza que deseja excluir esta ${isExpense ? 'despesa' : 'receita'}?`}
      />
    )
  }

  return (
    <Modal
      title={isExpense ? 'Editar Despesa' : 'Editar Receita'}
      open={open}
      onClose={onClose}
      rightAction={(
        <button
          onClick={handleOpenDeleteModal}
        >
          <TrashIcon
            className=' w-6 h-6 text-red-900'
          />
        </button>
      )}
    >
      <form onSubmit={handleSubmit}>

        <div>
          <span
            className='text-gray-600 tracking-tighter text-xs'
          >
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
          <div
            className='flex items-center gap-2'
          >
            <span
              className='text-gray-600 tracking-tighter text-lg'
            >
              R$
            </span>

            <Controller
              control={control}
              name='value'
              defaultValue=''
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.value?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        <div
          className='mt-10 flex flex-col gap-4'
        >
          <Input
            type='text'
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name='categoryId'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Tipo'
                error={errors.categoryId?.message}
                onChange={onChange}
                value={value}
                options={categories.map(category => ({
                  value: category.id,
                  label: category.name,
                }))}
              />
            )}
          />

          <Controller
            control={control}
            name='bankAccountId'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Tipo'
                error={errors.bankAccountId?.message}
                onChange={onChange}
                value={value}
                options={accounts.map(account => ({
                  value: account.id,
                  label: account.name
                }))}
              />
            )}
          />

          <Controller
            control={control}
            name='date'
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                value={value}
                onChange={onChange}
                error={errors.date?.message}
              />
            )}
          />
        </div>

        <Button
          type='submit'
          className='w-full mt-6'
          isLoading={isLoading}
        >
          Salvar
        </Button>
      </form>
    </Modal>
  )
}
