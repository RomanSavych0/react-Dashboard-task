import * as firebase from 'firebase'

const firebaseConfig={
    apiKey: "AIzaSyDi2fiKndzK-yenut34ImEvifbO7N0z3uU",
    authDomain: "dashboard-content-editor.firebaseapp.com",
    databaseURL: "https://dashboard-content-editor.firebaseio.com",
    projectId: "dashboard-content-editor",
    storageBucket: "dashboard-content-editor.appspot.com",
    messagingSenderId: "799673362888",
    appId: "1:799673362888:web:2916da1877cf03556e38fd"
};
export  let firebaseApp = firebase.initializeApp(firebaseConfig);
let database = firebaseApp.database();
export let test =()=>{
database.ref('users/' + 1 ).set({ 
userName:'name',
    email:'email', 
})
}
