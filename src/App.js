import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navigation from './components/Navigation';

const theme = createMuiTheme({
	palette: {
		primary: '#2E3244',
		secondary: '#fafbf6'
	}
});
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation bgColor={theme.primary} />
			</div>
		);
	}
}

export default App;
