import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './components/UniversalStyles';
import Main from './components/Main';
import NavBar from './components/Navbar/NavBar';

const App = () => {
	const [ darkmode, setDarkMode ] = useState(false);

	return (
		<ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
			<CssBaseline>
				<NavBar />
				<Main />
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
