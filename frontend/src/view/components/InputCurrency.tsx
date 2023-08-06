import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';

interface InputCurrencyProps {
  error?: string
  value?: string
  onChange?(value: string): void
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator='.'
        decimalSeparator=','
        defaultValue='0'
        value={value}
        onChange={event => onChange?.(event.target.value)}
        className='w-full text-gray-800 text-[32px] tracking-tightest font-bold outline-none'
      />

      {error && (
        <div className='flex gap-2 items-center mt-2 text-red-900'>
          <CrossCircledIcon />
          <span className='text-xs'>{error}</span>
        </div>
      )}
    </div>
  )
}
