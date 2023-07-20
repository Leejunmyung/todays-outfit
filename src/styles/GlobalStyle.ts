import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #EDF5FB;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body:before {
    content: "";
    position: fixed; /* could also be absolute */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(background.jpg) center center / cover no-repeat fixed;
    /* This scales the image nicely, but will also repeat the image when the size exceeds the viewport. */
    z-index: -1; /* Keep the background behind other elements */
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
