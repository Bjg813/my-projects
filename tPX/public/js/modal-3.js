/***************************************
            modal-3.js
***************************************/

// Get modal element
const modal3 = document.getElementById('simpleModal');
// Get open modal button
const modalBtn3 = document.getElementById('modalBtn-3');
// Get close button
const closeBtn3 = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn3.addEventListener('click', openModal);
// Listen for close click
closeBtn3.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal3.style.display = 'block';   
}
// Function to close modal
function closeModal() {
    modal3.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal3) {
    modal.style.display = 'none';
    }
}