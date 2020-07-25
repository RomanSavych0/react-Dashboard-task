import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC0-jhS1ktdp9cSbobaaZQUSm6cG5hxofk',
  authDomain: 'test-35783.firebaseapp.com',
  databaseURL: 'https://test-35783.firebaseio.com',
  projectId: 'test-35783',
  storageBucket: 'test-35783.appspot.com',
  messagingSenderId: '8446532193',
  appId: '1:8446532193:web:a3fe32668910d13f2ca820',
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.database()
export const test = () => {
  database.ref('users/' + 1).set({
    userName: 'name',
    email: 'email',
  })
}
