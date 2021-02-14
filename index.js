import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './src/App';
import { GlobalStyles } from './src/global-style';
import {Provider} from 'react-redux';
import store from './src/store'

ReactDOM.render(
	<Provider store={store}>
		<Router>
            <GlobalStyles />
			<App />
		</Router>,
    </Provider>,
	document.getElementById('root')
);
