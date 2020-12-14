import { createMuiTheme } from '@material-ui/core'

export const lightModeTheme = createMuiTheme({
    palette: {
      background: {
        default: "#fafafa"
      },
      text: {
          primary: '#111517'
      }
    },
    typography: {
        fontFamily: 'Nunito'
    }
  })