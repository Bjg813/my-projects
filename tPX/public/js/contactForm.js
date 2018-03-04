/***************************************
            contactForm.js
***************************************/
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3wJ8eEcgOv8KAd2lzQH1TycE6dTh5a4I",
    authDomain: "insightoutside-e160a.firebaseapp.com",
    databaseURL: "https://insightoutside-e160a.firebaseio.com",
    projectId: "insightoutside-e160a",
    storageBucket: "insightoutside-e160a.appspot.com",
    messagingSenderId: "542485823813"
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
    let attend = getInputVal('attend');
    let questions = getInputVal('questions');

    // Save Message
    saveMessage(name, company, email, attend, questions);

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
function saveMessage(name, company, email, attend, questions) {
    let newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        attend: attend,
        questions: questions
    });
}





