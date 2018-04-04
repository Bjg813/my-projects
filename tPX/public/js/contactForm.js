/***************************************
            contactForm.js
***************************************/
var config = {
    apiKey: "AIzaSyARjBjW3EqWFe9rdC7RRPtdRIm0ji74zsI",
    authDomain: "insightoutside-196ac.firebaseapp.com",
    databaseURL: "https://insightoutside-196ac.firebaseio.com",
    projectId: "insightoutside-196ac",
    storageBucket: "insightoutside-196ac.appspot.com",
    messagingSenderId: "512796009566"
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
    let title = getInputVal('title');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let attend = getInputVal('attend');
    let questions = getInputVal('questions');

    // Save Message
    saveMessage(name, title, company, email, attend, questions);

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
function saveMessage(name, title, company, email, attend, questions) {
    let newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        title: title,
        company: company,
        email: email,
        attend: attend,
        questions: questions
    });
}





