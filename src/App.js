import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import NavBar from './components/Navigation/NavBar';
import red from '@material-ui/core/colors/red';
import Welcome from './components/UI/WelcomeUI';

library.add(faSnowflake);

const theme = createMuiTheme({
	overrides: {
		MuiIconButton: {
			root: {
				color: '#fafbf6'
			}
		},
		MuiAppBar: {
			colorPrimary: {
				color: '#fafbf6'
			}
		}
	},
	palette: {
		primary: {
			main: '#2E3244'
		},
		secondary: {
			main: '#05adf6'
		},
		error: red,
		type: 'dark',
		text: {
			primary: '#fafbf6'
		},
		background: { paper: '#fafbf6' }
	}
});
class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<NavBar />
				<Welcome />
			</MuiThemeProvider>
		);
	}
}

export default App;
