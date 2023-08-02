const showFormButton = document.getElementById('add-list');
const closeFormButton = document.getElementById('close');
const modal = document.getElementById('modal');

var modalDarkness = document.getElementsByClassName("darkness")[0];
const addedListsElement = document.getElementById('addedLists');

var listOfLists = [];

const submitFormButton = document.getElementById('submit');
const addListForm = document.getElementById('addListForm');
const listNameInput = document.getElementById('listNameInput');

showFormButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  modalDarkness.style.display = "block";
});

closeFormButton.addEventListener('click', () => {
  closeModal();
});

function closeModal() {
  modal.style.display = 'none';
  modalDarkness.style.display = "none";
};

submitFormButton.addEventListener('click', () => {
  const newListName = listNameInput.value;
  if (newListName == '') {
    return;
  }
  listOfLists.push({ name: newListName, items: [] });
  renderLists();
  listNameInput.value = '';
  closeModal();
});

function createListItem(list) {
  return `<li>
    <hr width="100%" size="1rem">
    <a href="#" class="list">
      ${list.name}
    </a>
  </li>`;
}

function renderLists() {
  const listSelect = document.getElementById('addedLists');
  const listsHtml = listOfLists.map(createListItem).join('');
  listSelect.innerHTML = listsHtml;
}

renderLists();