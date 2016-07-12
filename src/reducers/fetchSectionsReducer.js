import { FETCH_SECTIONS } from '../actions/actions';

export default function fetchArticlesReducer(state = [], action) {
  switch(action.type){
    case FETCH_SECTIONS:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}
