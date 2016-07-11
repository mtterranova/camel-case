import { INCREMENT_REACTION } from '../actions/actions';

export default function addReactionsReducer(state = 0, action) {
  switch(action.type){
    case INCREMENT_REACTION:
      return Object.assign({}, state, {
        data: action.payload
      })
    default:
      return state;
  }
}
