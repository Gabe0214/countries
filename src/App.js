import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './components/UniversalStyles';
import Main from './components/Main';
import NavBar from './components/Navbar/Navbar';

const App = () => {
	const [ darkmode, setDarkMode ] = useState(false);

	return (
		<ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
			<CssBaseline>
				<NavBar setDarkMode={setDarkMode} darkmode={darkmode} />
				<Main darkMode={darkmode} />
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
