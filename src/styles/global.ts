import { createGlobalStyle } from 'styled-components';

import { MAIN_BG, MAIN_COLOR } from './constants';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    border: none;
    scroll-behavior: smooth;
    text-decoration: none;
  }

  body {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: ${MAIN_BG};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Domine', serif !important;
  }

  p,
  span,
  button,
  a,
  input {
    font-family: 'Overpass', sans-serif !important;
  }

  button,
  a {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  a.logo {
    max-width: 220px;
    min-width: 120px;
    max-height: 72px;
    img {
      max-width: 100%;
      height: 72px;
    }
  }

  img {
    display: block;
    user-select: none;
  }

  @media screen and (max-width: 840px) {
    .banner_img {
      min-height: 600px;
    }
  }

  ::-webkit-scrollbar {
    width: 0.4vw;
    height: 8px;
    z-index: 10000;
  }
  ::-webkit-scrollbar-thumb {
    background: ${MAIN_COLOR};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 5px;
  }
`;

export default GlobalStyles;
