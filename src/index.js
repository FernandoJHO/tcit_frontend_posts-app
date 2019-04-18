import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './index.css';
import MainView from './components/main'
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

const Root = (
	<Provider store={store} >
		<BrowserRouter>
			<Switch>
				<Route path="/" name="Home" component={MainView} />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

serviceWorker.unregister();