import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD1YOkEP518vxrsjn0JHNNsbyWs6nJrKAk",
  authDomain: "tienda-963d5.firebaseapp.com",
  databaseURL: "https://tienda-963d5.firebaseio.com",
}

firebase.initializeApp(firebaseConfig)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
