export interface BankAccountEntity {
  accessToken: string
  id: string
  name: string
  initialBalance: number
  type: "CHECKING" | "INVESTMENT" | "CASH"
  color: string
  currentBalance: number

}
