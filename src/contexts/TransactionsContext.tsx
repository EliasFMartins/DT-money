import {  ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionsProps {
  id:number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt:string;
}
interface TransactionContextType {
  transactions: TransactionsProps[];
  fetchTransactions: (query?: string) =>Promise<void>
  createTransactions: (data: CreateTransactionInput) => Promise<void>
}
interface TransactionsProviderProps {
  children: ReactNode;
}
interface CreateTransactionInput {
  description: string;
  price:number;
  category: string;
  type: 'income'|'outcome'
}
export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionsProvider = ({children}: TransactionsProviderProps) =>  {
    
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  const  fetchTransactions = async (query?: string) => {
   const response = await api.get('transactions',{
    params: {
      _sort: 'createdAt',
      _order:'desc',
      q: query
    }
   })

     setTransactions(response.data);
  }
  const createTransactions = async (data:CreateTransactionInput) => {
    const {category,description,price,type} = data
    const response =  await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })
    setTransactions(state => [response.data,...state,]);
  }
  
  useEffect(() => {
   fetchTransactions()
  },[])

  return(

    <TransactionContext.Provider value={{transactions, fetchTransactions,createTransactions,}}>
      {children}
    </TransactionContext.Provider>
  )
}
