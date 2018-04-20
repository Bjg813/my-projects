/***************************************
            modal-4.js
***************************************/

// Get modal element
const modal4 = document.getElementById('simpleModal');
// Get open modal button
const modalBtn4 = document.getElementById('modalBtn-4');
// Get close button
const closeBtn4 = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn4.addEventListener('click', openModal);
// Listen for close click
closeBtn4.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal4.style.display = 'block';   
}
// Function to close modal
function closeModal() {
    modal4.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal4) {
    modal.style.display = 'none';
    }
}