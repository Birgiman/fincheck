import { useState } from 'react';
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

  return {
    sliderState,
    setSliderState,
    windowsWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading: false,
    accounts: [],
    openNewAccountModal,
  }
}
