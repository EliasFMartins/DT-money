import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Trasactions } from "./pages/Transactions"

export const  App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Trasactions/>
    </ThemeProvider>
  )
}


