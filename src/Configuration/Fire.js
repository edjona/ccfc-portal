import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBE6avQcp53vH-8qKARGEsLMfrUqO9my4Q',
  authDomain: 'community-cell-47aaf.firebaseapp.com',
  databaseURL: 'https://community-cell-47aaf.firebaseio.com',
  projectId: 'community-cell-47aaf',
  storageBucket: 'community-cell-47aaf.appspot.com',
  messagingSenderId: '303255482411',
  appId: '1:303255482411:web:bda97518770bdc0f043a6e',
  measurementId: 'G-LD90QV2C1L',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
