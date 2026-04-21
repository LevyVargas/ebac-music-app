import reset from "styled-reset";
const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --color-primary: ${(props) => props.theme.colors.primary};
        --color-secondary: ${(props) => props.theme.colors.secondary};
        --color-background: ${(props) => props.theme.colors.background};
        --color-background-font: ${(props) => props.theme.colors.backgroundFont};
        --font-size-small: ${(props) => props.theme.fonts.size.small};
        --font-size-medium: ${(props) => props.theme.fonts.size.medium};
        --font-weight-bold: ${(props) => props.theme.fonts.weight.bold};
        --font-weight-normal: ${(props) => props.theme.fonts.weight.normal};
        --font-weight-medium: ${(props) => props.theme.fonts.weight.medium};
        --font-weight-light: ${(props) => props.theme.fonts.weight.light};
    }
    body {
        font-family: ${(props) => props.theme.fonts.base};
    }
`;
export default GlobalStyle;
