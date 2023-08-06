import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowsWidth';
import { bankAccountsService } from '../../../../../app/services/BankAccountsService';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const windowsWidth = useWindowWidth();

  const {
    areValuesVisible,
    toggleValueVisibility,
    openNewAccountModal,
  } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  const { data = [], isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll,
  })

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, account) => total + account.currentBalance, 0)
  }, [data]);

  return {
    sliderState,
    setSliderState,
    windowsWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading: isFetching,
    accounts: data,
    openNewAccountModal,
    currentBalance,
  }
}
