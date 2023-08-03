const showFormButton = document.getElementById('add-list');
const closeFormButton = document.getElementById('close');
const modal = document.getElementById('modal');

var modalDarkness = document.getElementsByClassName("darkness")[0];
const addedListsElement = document.getElementById('addedLists');

var listOfLists = [];

const submitFormButton = document.getElementById('submit');
const addListForm = document.getElementById('addListForm');
const listNameInput = document.getElementById('listNameInput');

function closeModal() {
  modal.style.display = 'none';
  modalDarkness.style.display = "none";
};

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

showFormButton.addEventListener('click', () => {
  modal.style.display = 'flex';
  modalDarkness.style.display = "block";
});

closeFormButton.addEventListener('click', () => {
  closeModal();
});

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

renderLists();

const addedLists = document.getElementById("addedLists");
const nameOfListHeading = document.getElementById("nameOfList");
var titleHeadings = document.querySelectorAll(".title h1");

function handleListClick(event) {
  event.preventDefault();

  var clickedLink = event.target;
  var listName = clickedLink.textContent.trim();

  titleHeadings.forEach(heading => {
      heading.style.display = "none";
  });

  nameOfListHeading.textContent = listName;
  nameOfListHeading.style.display = "block";

  listOfLists.forEach(list => {
    if (list.name === listName) {
      todosListElement.innerHTML = list.items.map(createTodoItem).join('');
    }
  })
}

addedLists.addEventListener("click", handleListClick);
