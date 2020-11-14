import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-josefin-sans';
import './styles/index.css';
import './styles/App.css';
import 'typeface-athiti';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);