import { createGlobalStyle } from 'styled-components';

import 'modern-normalize'; /* bring in normalize.css styles */

export const GlobalStyle = createGlobalStyle`
:root { 
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfef9;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;
