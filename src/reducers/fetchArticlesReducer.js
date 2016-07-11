import { FETCH_ARTICLES } from '../actions/actions';

export default function fetchArticlesReducer(state = [], action) {
  switch(action.type){
    case FETCH_ARTICLES:
      // console.log('this is payload ', action.payload)
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}
