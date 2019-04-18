// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import MainView from './components/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const Root = (
	<BrowserRouter>
		<Switch>
			<Route path="/" name="Home" component={MainView} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

serviceWorker.unregister();