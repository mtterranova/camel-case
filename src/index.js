import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import About from './components/About/About'
import rootReducer from './reducers/index'
import configureStore from './configureStore'
import App from './components/App'
import Home from './components/Home'
import injectTapEventPlugin from "react-tap-event-plugin";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);
injectTapEventPlugin();
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path = "/about" component={About}/> 
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app'));
