import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useBankAccounts } from '../../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../../app/hooks/useCategories';
import { transactionsService } from '../../../../../../app/services/transactionsService';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';
import { useDashboard } from '../../DashboardContext/useDashboard';

const schema = z.object({
  value: z.string().nonempty('Informe o valor'),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe a conta bancária'),
  date: z.date(),
})

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const queryClient = useQueryClient();

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();

  const {
    isLoading,
    mutateAsync,
  } = useMutation(transactionsService.create);

  const handleSubmit = hookFormSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString(),
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      closeNewTransactionModal();
      reset();
      toast.success(
        newTransactionType === 'EXPENSE'
        ? 'Despesa cadastrada com sucesso!'
        : 'Receita cadastrada com sucesso!'
      )
    } catch {
      toast.error(
        newTransactionType === 'EXPENSE'
        ? 'Erro ao cadastrar a despesa!'
        : 'Erro ao cadastrar a receita!'
      )
    }
  })

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === newTransactionType)
  }, [categoriesList, newTransactionType])

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
  }
}
