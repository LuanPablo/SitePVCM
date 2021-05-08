import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --primary: #5B2B68; 
  --secondary: #FFCF89;
  --background: #fff;
  --text: #616161;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html{
  @media (max-width: 1080px){
      font-size: 93.75%;
  }

  @media (max-width: 720px){
      font-size: 87.5%;
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

::selection{
  color: #fff;
  background: #1f1f1f;
}

body, input, textarea, button{
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: var(--text);
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}
button, a{
  cursor: pointer;
}

`;
