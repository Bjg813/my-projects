/***************************************
            modal-1.js
***************************************/

// Get modal element
const modal1 = document.getElementById('simpleModal');
// Get open modal button
const modalBtn1 = document.getElementById('modalBtn-1');
// Get close button
const closeBtn1 = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn1.addEventListener('click', openModal);
// Listen for close click
closeBtn1.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal1.style.display = 'block';   
}
// Function to close modal
function closeModal() {
    modal1.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal1) {
    modal.style.display = 'none';
    }
}