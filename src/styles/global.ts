import { createGlobalStyle } from 'styled-components'

export const devices = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px'
}

export default createGlobalStyle`
  :root {
    --header-height: 56px;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
  }
  main {
    max-width: 768px;
    margin: auto;
  }


  body {
  min-height: 3000px; /* ou qualquer valor grande que quiser */
}
`

