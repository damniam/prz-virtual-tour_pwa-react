import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// later in your app

// <React.Fragment>
//   <Navigation /> {/* example of other top-level stuff */}
//   <GlobalStyle whiteColor />
// </React.Fragment>

export default GlobalStyle;