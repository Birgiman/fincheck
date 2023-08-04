import { Button } from '../../../../../components/Button';
import { ColorsDropDownInput } from '../../../../../components/ColorsDropDownInput';
import { Input } from '../../../../../components/Input';
import { InputCurrency } from '../../../../../components/InputCurrency';
import { Modal } from '../../../../../components/Modal';
import { Select } from '../../../../../components/Select';
import { useNewAccountModalController } from './useNewAccountModalController';

export function NewAccountModal() {

  const {
    closeNewAccountModal,
  } = useNewAccountModalController();

  return (
    <Modal
      title='Nova Conta'
      open={true}
      onClose={closeNewAccountModal}
    >
      <form>

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

            <InputCurrency />
          </div>
        </div>
        <div
          className='mt-10 flex flex-col gap-4'
        >
          <Input
            type='text'
            name='name'
            placeholder='Nome da Conta'
          />

          <Select
            placeholder='Tipo'
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

          <ColorsDropDownInput />
        </div>

        <Button
          type='submit'
          className='w-full mt-6'
        >
          Criar
        </Button>
      </form>
    </Modal>
  )
}
