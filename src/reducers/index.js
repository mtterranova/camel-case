import { combineReducers } from 'redux';

import fetchArticlesReducer from './fetchArticlesReducer';
import fetchSectionsReducer from './fetchSectionsReducer';

const rootReducer = combineReducers({
  fetchArticlesReducer,
  fetchSectionsReducer
})

export default rootReducer;
