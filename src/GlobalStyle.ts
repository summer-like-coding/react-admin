import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
ul, ol ,li{ list-style:none; }
body,html,#root{
    height: 100%;
    overflow: hidden;
    
}
`;
