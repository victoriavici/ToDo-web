const showFormButton = document.getElementById('add-list');
const closeFormButton = document.getElementById('close');
const modalList = document.getElementById('modalList');

var modalDarkness = document.getElementsByClassName("darkness")[0];
const addedListsElement = document.getElementById('addedLists');


const submitFormButton = document.getElementById('submit');
const addListForm = document.getElementById('addListForm');
const listNameInput = document.getElementById('listNameInput');

function closeModal() {
  modalList.style.display = 'none';
  modalDarkness.style.display = "none";
};

showFormButton.addEventListener('click', () => {
  modalList.style.display = 'flex';
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
  saveDataToJson();
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
  addNewElement.style.display = "flex";
  changeColor("var(--color-white)");

  listOfLists.forEach(list => {
    if (list.name === listName) {
      todosListElement.innerHTML = list.items.map(createTodoItem).join('');
    }
  })
}

addedLists.addEventListener("click", handleListClick);

function addTaskToList(listName, task) {
  listOfLists.forEach(list => {
    if (list.name === listName) {
      list.items.push(task);
      return;
    }
  });
  saveDataToJson();
  renderLists();
}

function removeTaskOfList(listName, task) {
  listOfLists.forEach((list, index) => {
    if (list.name === listName) {
        list.items = list.items.filter(item => item !== task);
        listOfLists[index] = (list);
        return;
    }
  });
  saveDataToJson();
  renderLists();
}

function showTasksOfList(listName) {
  listOfLists.forEach(list => {
    if (list.name === listName) {
      todosListElement.innerHTML = list.items.map(createTodoItem).join('');
    }
  })
}



