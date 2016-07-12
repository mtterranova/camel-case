import firebase from 'firebase';
import reactfire from 'reactfire';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const INCREMENT_REACTION = 'INCREMENT_REACTION';

const DATE = '07-12-16';
var iterator = 0;

var config = {
  apiKey: "35c86f61815f2421bb081cc7e82fbb98bb56a812",
  databaseURL: "https://camel-case-e34bc.firebaseio.com/"
};
firebase.initializeApp(config);
var Articles = firebase.database().ref(DATE);

export function fetchArticles() {
  return dispatch => {
    Articles.on('value', snapshot => {
      var data = [];
      for (var key in snapshot.val()){
        var obj = snapshot.val()[key];
        obj.id = key;
        data.push(obj)
      }
      dispatch({
        type: FETCH_ARTICLES,
        payload: data
      })
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  };
}

export function incrementReactions(id, reactionType, currentCount) {
  var reactionToAdd = {};
  reactionToAdd[reactionType] = currentCount + 1;
  return dispatch => {
    firebase.database().ref(DATE + '/' + id + '/reactions' ).update(reactionToAdd)
  }
}
