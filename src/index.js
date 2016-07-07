import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import {Router, browserHistory} from 'react-router'
import {Route, IndexRoute} from 'react-router'
import Routes from './routes'






ReactDOM.render(
	(
		<Router history={browserHistory} routes={Routes}/>
  	),
	document.getElementById('app')
)