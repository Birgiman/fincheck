import * as RdxDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface ModalProps {
  open: boolean
  title: string
  children: React.ReactNode
  rightAction?: React.ReactNode
  onClose?(): void
}

export function Modal({ open, title, children, rightAction, onClose }: ModalProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose} >
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'z-50 fixed inset-0 bg-black/80 backdrop-blur-sm',
            'data-[stage=open]:animate-overlayShow',
          )}
        />

        <RdxDialog.Content
          className={cn(
            'z-[51] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-contentShow'
          )}
        >
          <header
            className='h-12 flex items-center justify-between text-gray-800'
          >
            <button
              onClick={onClose}
              className='w-12 h-12 flex items-center justify-center outline-none'
            >
              <Cross2Icon
                className='w-6 h-6'
              />
            </button>
            <span
              className='text-lg font-bold tracking-tightest'
            >
              {title}
            </span>
            <div
              className='w-12 h-12 flex items-center justify-center'
            >
              {rightAction}
            </div>
          </header>
          <div>
            {children}
          </div>
        </RdxDialog.Content>

      </RdxDialog.Portal>
    </RdxDialog.Root>
  )
}
