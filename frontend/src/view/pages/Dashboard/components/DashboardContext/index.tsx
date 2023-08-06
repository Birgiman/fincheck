import { createContext, useCallback, useState } from 'react';
import { BankAccountEntity } from '../../../../../app/entities/BankAccount';

interface DashboardContextValue {
  areValuesVisible: boolean
  toggleValueVisibility(): void
  isNewAccountModalOpen: boolean
  openNewAccountModal(): void
  closeNewAccountModal(): void
  isNewTransactionModalOpen: boolean
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void
  closeNewTransactionModal(): void
  newTransactionType: 'INCOME' | 'EXPENSE' | null
  isEditAccountModalOpen: boolean
  accountBeingEdit: null | BankAccountEntity
  openEditAccountModal(bankAccount: BankAccountEntity): void
  closeEditAccountModal(): void
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children}: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(false);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [accountBeingEdit, setAccountBeingEdit] = useState<null | BankAccountEntity>(null);


  const toggleValueVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState);
  }, [])

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, [])

  const closeNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(false);
  }, [])

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type)
    setIsNewTransactionModalOpen(true);
  }, [])

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null)
    setIsNewTransactionModalOpen(false);
  }, [])

  const openEditAccountModal = useCallback((bankAccount: BankAccountEntity) => {
    setIsEditAccountModalOpen(true);
    setAccountBeingEdit(bankAccount)
  }, [])

  const closeEditAccountModal = useCallback(() => {
    setIsEditAccountModalOpen(false);
    setAccountBeingEdit(null)
  }, [])

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValueVisibility,
      isNewAccountModalOpen,
      openNewAccountModal,
      closeNewAccountModal,
      isNewTransactionModalOpen,
      openNewTransactionModal,
      closeNewTransactionModal,
      newTransactionType,
      isEditAccountModalOpen,
      accountBeingEdit,
      openEditAccountModal,
      closeEditAccountModal,
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
