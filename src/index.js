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