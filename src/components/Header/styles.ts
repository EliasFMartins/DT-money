import { styled } from "styled-components";

export const HeaderContainer = styled.header`
background: ${props => props.theme["gray-900"]};
padding: 2.5rem 0 7.5rem ;
// o header container  ocupa a horizontal toda do navegador o conteudo em si apenas  um 900px meda
`;

export const HeaderContent = styled.div`
width: 100%;
max-width: 1120px;
// vai ocupar 100% da tela se for maior q 1120 vai limitar e centralizar
margin: 0 auto;
// pra centralizar o conteudo
padding: 0 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;

`;
export const NewTransactionButton = styled.button`
height: 50px;
border: 0;
background: ${props => props.theme["green-500"]};
color: ${props => props.theme.white};
font-weight: bold;
padding: 0 1.25rem;
border-radius: 6px;
cursor: pointer;
transition: 0.3s;
&:hover{
  background: ${props => props.theme["green-700"]};
}
`