import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('9ULKXrx8iPn4XHlzetT9').collection('cartItems').doc('ikMzIuyXpC7dQnsk9Zi7');
firestore.doc('/users/9ULKXrx8iPn4XHlzetT9/cartItems/ikMzIuyXpC7dQnsk9Zi7');
firestore.collection('/users/9ULKXrx8iPn4XHlzetT9/cartItems');