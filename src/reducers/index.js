import { combineReducers } from 'redux';

import fetchArticlesReducer from './fetchArticlesReducer';

const rootReducer = combineReducers({
  fetchArticlesReducer
})

export default rootReducer;
