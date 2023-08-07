import { useMemo, useState } from 'react';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useWindowWidth } from '../../../../../app/hooks/useWindowsWidth';
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

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce((total, account) => total + account.currentBalance, 0)
  }, [accounts]);

  return {
    sliderState,
    setSliderState,
    windowsWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading: isFetching,
    accounts,
    openNewAccountModal,
    currentBalance,
  }
}
