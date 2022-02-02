import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig={}

let app;

if(firebase.apps.length==0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}

const auth=app.auth();
const db=app.firestore();
const storage=app.storage();

export {auth,db,storage};