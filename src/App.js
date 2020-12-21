import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './components/UniversalStyles';
import Main from './components/Main';
import NavBar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import CountriesIndividual from './components/Countries/CountriesIndividual/CountriesIndividual';

const App = () => {
	const [ darkmode, setDarkMode ] = useState(false);

	return (
		<ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
			<CssBaseline>
				<Route path='/' render={(props) => <NavBar darkmode={darkmode} setDarkMode={setDarkMode} />} />
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => {
							return <Main darkMode={darkmode} history={props.history} />;
						}}
					/>
					<Route path='/country/:name' render={(props) => <CountriesIndividual {...props} />} />
					{/* <Route path='/' render={() => <Main darkMode={darkmode} />} /> */}
				</Switch>
				{/* <NavBar setDarkMode={setDarkMode} darkmode={darkmode} />
				<Main darkMode={darkmode} /> */}
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
