/***************************************
            modal.js
***************************************/

// Get modal element
const modal = document.getElementById('simpleModal');
// Get open modal button
const modalBtn = document.getElementById('modalBtn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
// Get body element
const body = document.getElementById('body');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);
// Stop body scroll when modal is open
body.addEventListener("scroll", noscroll);

// Function to open modal
function openModal() {
    modal.style.display = 'block';  
    noscroll();
}
// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e) {
    if(e.target === modal) {
    modal.style.display = 'none';
    }
}

function noscroll() {
    body.scrollTo(0,0);
}