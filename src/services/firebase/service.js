import db from "./broker";
import firebase from "firebase";
import moment from "moment";

const COLLECTION = "locations";
export default {
  getCoordinates() {
    // let citiesRef = db.collection("groceryLists").limitToLast(10);

    //.where("users[0].name', '==', 'userName')
    let cityRef = db.collection(COLLECTION);
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
  add({ lat, lng }) {
    let cityRef = db.collection(COLLECTION);

    let data = {
      created: firebase.firestore.FieldValue.serverTimestamp(),
      timestamp: Date.now(),
      infected: true,
      infectedDays: 1,
      local: {
        lat: lat,
        lng: lng,
      },
      lastSteps: [],
    };
    return cityRef.add(data);
  },
};
