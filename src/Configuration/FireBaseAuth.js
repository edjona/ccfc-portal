import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCEm-LzpHcXovQWKNFXDj4ldLOFvCb1Tqs',
  authDomain: 'ccfc-portal.firebaseapp.com',
  databaseURL: 'https://ccfc-portal.firebaseio.com',
  projectId: 'ccfc-portal',
  storageBucket: 'ccfc-portal.appspot.com',
  messagingSenderId: '750346375398',
  appId: '1:750346375398:web:9622439cc140dbdcce2b27',
  measurementId: 'G-KC9528BZCD',
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth;
