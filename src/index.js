import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
	<BrowserRouter>
		<React.Fragment>
			<CssBaseline />
			<App />
		</React.Fragment>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
