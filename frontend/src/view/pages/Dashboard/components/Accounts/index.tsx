import 'swiper/css';

import { PlusIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { Spinner } from '../../../../components/Spinner';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {

  const {
    sliderState,
    setSliderState,
    windowsWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts
  } = useAccountsController();

  return (

    <div className='bg-teal-900 w-full h-full rounded-2xl md:p-10 px-4 py-8 flex flex-col' >

      {isLoading && (
        <div className='w-full h-full flex items-center justify-center' >
          <Spinner className='text-teal-950/50 fill-white w-10 h-10' />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className='tracking-[-0.5px] text-white block' >
              Saldo total
            </span>
            <div className='flex items-center gap-2'>
              <strong className={cn(
                'text-2xl tracking-[-1px] text-white',
                !areValuesVisible && 'blur-[10px]'
              )}>
                {formatCurrency(1000000)}
              </strong>
              <button
                className='flex items-center justify-center w-8 h-8'
                onClick={toggleValueVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0' >
            {accounts.length === 0 && (
              <>
                <div className='mb-4' slot='container-start' >
                  <strong className='tracking-[-1px] text-white text-lg' >
                    Minhas contas
                  </strong>
                </div>
                <button
                  className='mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white hover:bg-teal-950/40 transition-colors'
                  >
                  <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
                    <PlusIcon className='w-6 h-6' />
                  </div>
                  <span className='font-medium tracking-[-0.5px] block w-32 text-center'>
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
              <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowsWidth >= 500 ? 2.1 : 1.1}
                onSlideChange={swiper => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd
                  })
                }}
              >
                <div className='flex items-center justify-between mb-4' slot='container-start' >
                  <strong className='tracking-[-1px] text-white text-lg' >
                    Minhas contas
                  </strong>

                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <SwiperSlide>
                  <AccountCard
                    color='#7950F2'
                    name="Nubank"
                    balance={1000.23}
                    type='CHECKING'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color='#333'
                    name="XP"
                    balance={1000.23}
                    type='INVESTMENT'
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color='#0f0'
                    name="Carteira"
                    balance={1000.23}
                    type='CASH'
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
