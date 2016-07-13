import firebase from 'firebase';
import reactfire from 'reactfire';
import moment from 'moment';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_SECTIONS = 'FETCH_SECTIONS';

var config = {
  apiKey: "35c86f61815f2421bb081cc7e82fbb98bb56a812",
  databaseURL: "https://camel-case-e34bc.firebaseio.com/"
};

var dateNow = moment().format('MM-DD-YY');
var currentlySelectedDate;
firebase.initializeApp(config);

export function fetchArticles(sectionFilter='All', date=dateNow) {
  currentlySelectedDate = date;
  var Articles = firebase.database().ref(date);
  return dispatch => {
    Articles.on('value', snapshot => {
      var data = [];
      for (var key in snapshot.val()){
        var obj = snapshot.val()[key];
        obj.id = key;
        if (sectionFilter !== 'All'){
          if (obj.section===sectionFilter){
            data.push(obj)
          }
        } else {
          data.push(obj)
        }
      }
      dispatch({
        type: FETCH_ARTICLES,
        payload: data
      })
    }, errorObject => {
      console.log("The read failed: " + errorObject.code);
    });
  };
}

export function fetchSections(date=dateNow) {
  var Articles = firebase.database().ref(date);
  return dispatch => {
    Articles.once('value').then(snapshot => {
      var data = ['All'];
      for (var key in snapshot.val()){
        var section = snapshot.val()[key]['section'];
        if (data.indexOf(section) === -1){
          data.push(section)
        }
      }
      dispatch({
        type: FETCH_SECTIONS,
        payload: data
      })
    }, errorObject => {
      console.log("The read failed: " + errorObject.code);
    });
  };
}

export function incrementReactions(id, reactionType, currentCount) {
  var reactionToAdd = {};
  reactionToAdd[reactionType] = currentCount + 1;
  return dispatch => {
    firebase.database().ref(currentlySelectedDate + '/' + id + '/reactions' ).update(reactionToAdd)
  }
}
