import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Pilat';
    font-style: black;
    font-weight: 900;
    font-display: swap;
    src: local('Pilat'), url('/fonts/pilat-extended/PilatExtended-Black.woff2');
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    font-style: bold;
    font-weight: 800;
    font-display: swap;
    src: local('Neue Haas Unica Bold'), url('/fonts/neue-haas-unica/NeueHaasUnica-Bold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    font-style: medium;
    font-weight: 400;
    font-display: swap;
    src: local('Neue Haas Unica Medium'), url('/fonts/neue-haas-unica/NeueHaasUnica-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Neue Haas Unica';
    font-style: italic;
    font-weight: 400;
    src: local('Neue Haas Unica Italic'), url('/fonts/neue-haas-unica/NeueHaasUnica-Italic.woff2') format('woff2');
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    font-family: 'Neue Haas Unica', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
