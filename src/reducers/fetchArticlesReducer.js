import { FETCH_ARTICLES } from '../actions/actions';

export default function fetchArticlesReducer(state = [], action) {
  switch(action.type){
    case FETCH_ARTICLES:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}
