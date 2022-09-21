import { CreditCard } from "./credit-card.interface";

export interface Transaction {
  credit_card: CreditCard;
  amount: number;
  comment: string;
  date: number;
  currency: string;
  uid?: string;
}
