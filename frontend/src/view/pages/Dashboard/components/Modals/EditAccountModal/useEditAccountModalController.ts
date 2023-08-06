import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { bankAccountsService } from '../../../../../../app/services/BankAccountsService';
import { currencyStringToNumber } from '../../../../../../app/utils/currencyStringToNumber';
import { useDashboard } from '../../DashboardContext/useDashboard';

const schema = z.object({
  initialBalance: z.union([
    z.string().nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Saldo inicialNome da conta é obrigatório'),
  type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  color: z.string().nonempty('Cor é obrigatória'),
})

type FormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    accountBeingEdit,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: accountBeingEdit?.color,
      name: accountBeingEdit?.name,
      type: accountBeingEdit?.type,
      initialBalance: accountBeingEdit?.initialBalance,
    },
  })

  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation(bankAccountsService.update);

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
        id: accountBeingEdit!.id,
      });

      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] })
      closeEditAccountModal();
      toast.success('Conta foi editada com sucesso!')
    } catch {
      toast.error('Erro ao salvar as alterações!')
    }
  });

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
  };
}
