import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderContent>
          <h2>Logo</h2>
        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}