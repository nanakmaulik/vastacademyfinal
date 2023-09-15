// const firebaseConfig = {
//     apiKey: "AIzaSyCqzNNXePqJpwN8pWKQOU6072-H1nGYDGE",
//     authDomain: "vaaa-e088e.firebaseapp.com",
//     databaseURL: "https://vaaa-e088e-default-rtdb.firebaseio.com",
//     projectId: "vaaa-e088e",
//     storageBucket: "vaaa-e088e.appspot.com",
//     messagingSenderId: "452899762024",
//     appId: "1:452899762024:web:dd08223edc2d015cc870dd",
//     measurementId: "G-38YYZ6VVNZ"
//   };
//   firebase.initializeApp(firebaseConfig);
//   const vaaaDB = firebase.database().ref('vaaa')
//   document.getElementById('form1').addEventListener("submit", submitForm); 
//   function submitForm(e) {
//     e.preventDefault();
//     var emailid = getElementVal('email');
//     var password = getElementVal('password');
//     var repeatpassword = getElementVal('repeatPassword');
//     console.log(email,password,repeatpassword);

//   }
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;

//   }