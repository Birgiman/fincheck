import { Controller } from 'react-hook-form';
import { Button } from '../../../../../components/Button';
import { ColorsDropDownInput } from '../../../../../components/ColorsDropDownInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';
import { useEditAccountModalController } from './useEditAccountModalController';

export function EditAccountModal() {

  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
  } = useEditAccountModalController();

  return (
    <Modal
      title='Editar Conta'
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
    >
      <form
        onSubmit={handleSubmit}
      >

        <div

        >
          <span
            className='text-gray-600 tracking-tighter text-xs'
          >
            Saldo
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
              name='initialBalance'
              defaultValue='0'
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
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
            placeholder='Nome da Conta'
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name='type'
            defaultValue='CHECKING'
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder='Tipo'
                error={errors.type?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: 'CHECKING',
                    label: 'Conta Corrente'
                  },
                  {
                    value: 'INVESTMENT',
                    label: 'Investimentos'
                  },
                  {
                    value: 'CASH',
                    label: 'Dinheiro Físico'
                  },
                ]}
              />
            )}
          />


          <Controller
            control={control}
            name='color'
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <ColorsDropDownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
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
