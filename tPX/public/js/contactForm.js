/***************************************
            contactForm.js
***************************************/
  
  // Initialize Firebase
   var config = {
    apiKey: "AIzaSyBcz_EVaJE14MzDGZNZnbVRviKrbewXKMM",
    authDomain: "tpx-project.firebaseapp.com",
    databaseURL: "https://tpx-project.firebaseio.com",
    projectId: "tpx-project",
    storageBucket: "tpx-project.appspot.com",
    messagingSenderId: "907578274024"
  };
  firebase.initializeApp(config);

  // Reference "messages" collection - which shows up on firebase database as "messages"
  const messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    // Save Message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}





