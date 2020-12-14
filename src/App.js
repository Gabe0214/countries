import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { lightModeTheme } from './components/UniversalStyles'

function App() {

  
  return (
    <div className="App">
      <MuiThemeProvider theme={lightModeTheme}>
        <CssBaseline/>
          <h1>Countries</h1>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
