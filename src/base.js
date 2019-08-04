import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCanIrFbztsARkuJqD2Pxgg11wxwRjs8EQ",
  authDomain: "catch-of-the-day-4699c.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-4699c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
