import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';

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
				<Drawer />
			</MuiThemeProvider>
		);
	}
}

export default App;
