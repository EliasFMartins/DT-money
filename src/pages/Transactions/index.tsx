import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles"

export const Trasactions = () => {
  return(
    <div>
      <Header/>
      <Summary/>
      <TransactionsContainer>

  
      <TransactionsTable>
        <tbody>
              <tr>
                <td width='50%'> Desenvolvimento de site</td>
                <td>
                  <PriceHightlight variant="income">
                  R$ 12.000,00
                  </PriceHightlight>
                </td>
                <td>Venda</td>
                <td>13/05/2023</td>
              </tr>
              <tr>
                <td width='50%'> Hamburger</td>
                <td>
                  <PriceHightlight variant="outCome">
                      59,00
                  </PriceHightlight>
                </td>
                <td>Alimentação</td>
                <td>10/05/2023</td>
              </tr>
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}