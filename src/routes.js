import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './src/components/App'
import  hashHistory  from 'react-router'

export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  		</Route>
    </Router>
)