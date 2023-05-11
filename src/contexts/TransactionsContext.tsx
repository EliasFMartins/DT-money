import {  ReactNode, createContext, useEffect, useState } from "react";

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
}
interface TransactionsProviderProps {
  children: ReactNode;
}
export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionsProvider = ({children}: TransactionsProviderProps) =>  {
    
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])
  const  loadTransactions = async () => {
     const response = await fetch('http://localhost:3000/transactions')
     const data = await response.json();

     setTransactions(data);
  }
  
  useEffect(() => {
   loadTransactions()
  },[])

  return(

    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}
