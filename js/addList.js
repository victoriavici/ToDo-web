const showFormButton = document.getElementById('add-list');
const closeFormButton = document.getElementById('close');
const modal = document.getElementById('modal');
var modalDarkness = document.getElementsByClassName("darkness")[0];

showFormButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  modalDarkness.style.display = "block";
});

closeFormButton.addEventListener('click', () => {
  modal.style.display = 'none';
  modalDarkness.style.display = "none";
});