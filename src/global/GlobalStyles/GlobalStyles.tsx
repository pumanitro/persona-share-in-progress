import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeInterface } from 'typings';

export const GlobalStyles = createGlobalStyle<ThemeInterface>`
  ${normalize}
  
  html {
    font-family: Box-Regular, sans-serif;
  }
  
  body {
    color: white;
    font-family: Box-Regular, sans-serif;
    line-height: 1;
  }
  
  a {
    color: ${props => props.theme.colors.utils.link};
    text-decoration: none;
  }
  
`;
