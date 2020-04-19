import db from "./broker";
import firebase from "firebase";
import moment from "moment";
export default {
  getCoordinates() {
    // let citiesRef = db.collection("groceryLists").limitToLast(10);

    //.where("users[0].name', '==', 'userName')
    let cityRef = db.collection("groceryLists");
    //  .where("users[0].name", "==", "userName"); //.doc("uaDZw5I6SKWNQG7XTBBn");
    return cityRef
      .get()
      .then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push(doc.data());
          // console.log(doc.id, "=>", doc.data());
        });
        return list;
      })
      .catch((err) => {
        console.log("Error getting document", err);
        return Promise.reject(err);
      });
  },
  add() {
    let cityRef = db.collection("groceryLists");

    let data = {
      created: firebase.firestore.FieldValue.serverTimestamp(),
      timestamp: Date.now(),
      infected: true,
      infectedDays: 3,
      local: {
        lat: -21.805149,
        lng: -43.5702964,
      },
      lastSteps: [
        {
          date: moment(Date.now()).subtract(1, "day").valueOf(),
          lat: -22.805149,
          lng: -45.5702964,
        },
        {
          date: moment(Date.now()).subtract(2, "day").valueOf(),
          lat: -24.805149,
          lng: -46.5702964,
        },
      ],
    };
    return cityRef.add(data);
  },
};
