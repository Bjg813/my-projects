/***************************************
            modal-2.js
***************************************/

// Get modal element
const modal2 = document.getElementById('simpleModal');
// Get open modal button
const modalBtn2 = document.getElementById('modalBtn-2');
// Get close button
const closeBtn2 = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn2.addEventListener('click', openModal);
// Listen for close click
closeBtn2.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal2.style.display = 'block';   
}
// Function to close modal
function closeModal() {
    modal2.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal2) {
    modal.style.display = 'none';
    }
}