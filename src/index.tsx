import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/global';
import { theme } from './utils/theme';
import './index.css';


const jsx : JSX.Element = (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
  			<App />
  			<GlobalStyle />
  		</ThemeProvider>
 	</React.StrictMode>
);

const root = document.getElementById('root');

ReactDOM.render(jsx, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
