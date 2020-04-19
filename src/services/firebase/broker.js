import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyCnt0ug9TZhcYtWn2jAQwhgwWmPxIL78xE",
  authDomain: "diseasemaps-74aac.firebaseapp.com",
  databaseURL: "https://diseasemaps-74aac.firebaseio.com",
  projectId: "diseasemaps-74aac",
  storageBucket: "diseasemaps-74aac.appspot.com",
  messagingSenderId: "463180539951",
  appId: "1:463180539951:web:cba2d54ebd0723da743eda",
  measurementId: "G-Q5FYF1Y21R",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// };
// firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
