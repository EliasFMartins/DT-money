import { useContext } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles"
import { TransactionContext } from "../../contexts/TransactionsContext"

export const Transactions = () => {
  const {transactions} = useContext(TransactionContext)
  return(
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>
      <SearchForm/>
  
      <TransactionsTable>
        <tbody>
          {transactions.map(transactions=>{
            return (
              <tr key={transactions.id}> 
              <td width='50%'> {transactions.description}</td>
              <td>
                <PriceHightlight variant={transactions.type}>
                {transactions.price}
                </PriceHightlight>
              </td>
              <td>{transactions.category}</td>
              <td>{transactions.createdAt}</td>
            </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}