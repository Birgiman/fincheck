import { Button } from './Button';
import { Modal } from './Modal';
import { TrashIcon } from './icons/TrashIcon';

interface ConfirmDeleteModalProps {
  onConfirm(): void
  onClose(): void
  title: string
  description?: string
  isLoading: boolean
}

export function ConfirmDeleteModal({ onConfirm, onClose, title, description, isLoading }: ConfirmDeleteModalProps) {
  return (
    <Modal
      open
      title='Excluir'
      onClose={onClose}
    >
      <div className='flex flex-col items-center text-center gap-6'>
        <div className='w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center'>
          <TrashIcon className='w-6 h-6 text-red-900' />
        </div>

        <p className='w-[180px] text-gray-800 tracking-tighter font-bold'>{title}</p>
        <p className='text-gray-800 tracking-tighter'>{description}</p>
      </div>

      <div className='mt-10 space-y-4'>
        <Button
          variant='danger'
          onClick={onConfirm}
          className='w-full'
          isLoading={isLoading}
        >
          Sim, desejo excluir
        </Button>
        <Button
          variant='ghost'
          onClick={onClose}
          className='w-full'
          disabled={isLoading}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
