import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation';

library.add(faSnowflake);

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2E3244'
		},
		secondary: {
			main: '#05adf6'
		}
	}
});
class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Navigation bgColor={theme.primary} />
			</MuiThemeProvider>
		);
	}
}

export default App;
