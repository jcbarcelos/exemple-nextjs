import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        background: black;
        color: ${({ theme }) => theme.colors.primary};
        font-family: 'Roboto, Sans Serif';
    }
`;
