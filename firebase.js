// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK6FDbXynBjEXE9xohLcVUbpH76qr4Tbo",
  authDomain: "conatactform-214d9.firebaseapp.com",
  databaseURL: "https://conatactform-214d9-default-rtdb.firebaseio.com",
  projectId: "conatactform-214d9",
  storageBucket: "conatactform-214d9.appspot.com",
  messagingSenderId: "614139426780",
  appId: "1:614139426780:web:187c3d61ae0c9663130119",
  measurementId: "G-1EXDZDTKPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, child, update, remove }
  from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js'

// var name = document.getElementById('nameID').addEventListener

const sendBtn = document.getElementById('contactForm');
sendBtn.addEventListener('submit', writeUserData);

// const database = getDatabase();

function writeUserData(e) {

  e.preventDefault();

  const date = new Date();

  var name = getSubmittedValues('nameID');
  var email = getSubmittedValues('emailID');
  var msg = getSubmittedValues('msgID');

  var body = 'Name : ' + name + '<br>Email : ' + email + '<br>Message : ' + msg ;

  // ------------------- SMTP Mail Sending ----------------------

  // Email.send({
  //   Host: "smtp.gmail.com",
  //   Username: "vivekkalal.nextech@gmail.com",
  //   Password: "VivekNextech",
  //   To: 'vivekkalal20@gmail.com',
  //   From: "vivekkalal.nextech@gmail.com",
  //   Subject: "Message From Contact Form from" + name,
  //   Body: body

  // }).then(
  //   message => {
  //     if(message == 'OK'){
  //       alert('Your Mail Has been Sent Thank you for contacting us')
  //     }else{
  //       alert('There is an error sending msg')
  //     }
  //   }
  // );
  
  // ============================================================


  const db = getDatabase();

  set(ref(db, 'users/' + name + date.getTime().toString().substring()), {
    Username: name,
    EmailID: email,
    Message: msg,
  });

  alert('Message Sent Succesfully !!! \n Thank you for Contacting Us \n will soon get in touch with you')

  document.getElementById('nameID').value = "";
  document.getElementById('emailID').value = "";
  document.getElementById('msgID').value = "";
}

function getSubmittedValues(id) {
  return document.getElementById(id).value;
}