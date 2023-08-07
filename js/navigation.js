const todayList = ["dat si ranajky", "dat si obed"];
const scheduledList = ["dat si ranajky", "spravit todolist"];
const doneList = ["ta vlajocka este nie je"]
var allList = [...todayList, ...scheduledList, ...doneList];

const todosListElement = document.getElementById('todos');

function updateItemCount(elementId, itemList) {
  const countElement = document.getElementById(elementId);
  countElement.textContent = itemList.length;
}

updateItemCount('todayCount', todayList);
updateItemCount('allCount', allList);
updateItemCount('scheduledCount', scheduledList);
updateItemCount('doneCount', doneList);

function createTodoItem(task) {
  return (
    `<li>
      <svg>
        <circle cx="13" cy="13" r="11"></circle>
      </svg>
      <p>${task}</p>
    </li>`
  );
}

todosListElement.innerHTML = todayList.map(createTodoItem).join('');

function changeColor(color) {
  const rootElement = document.documentElement;
  rootElement.style.setProperty('--color-svg', color);
}

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".nav a");
  var titleHeadings = document.querySelectorAll(".title h1");

  function handleClick(event) {
    event.preventDefault();
    var clickedLink = event.currentTarget;
    var targetId = clickedLink.getAttribute("data-target");
    var color = clickedLink.getAttribute("data-color");

    titleHeadings.forEach(heading => {
      if (heading.id === targetId) {
        heading.style.display = "block";
      } else {
        heading.style.display = "none";
      }
    });
    changeColor(color);

    showTasks(targetId);
  }

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", handleClick);
  });
});

function showTasks(targetId) {
  addNewElement.style.display = "flex";
  switch (targetId) {
    case "today":
      todosListElement.innerHTML = todayList.map(createTodoItem).join('');
      updateItemCount('todayCount', todayList);
      break;
    case "scheduled":
      todosListElement.innerHTML = scheduledList.map(createTodoItem).join('');
      updateItemCount('scheduledCount', scheduledList);
      break;
    case "done":
      todosListElement.innerHTML = doneList.map(createTodoItem).join('');
      updateItemCount('doneCount', doneList)
      addNewElement.style.display = "none";
      break;
    case "all":
      todosListElement.innerHTML = allList.map(createTodoItem).join('');
    default:
      break;
  }
  allList = [...todayList, ...scheduledList, ...doneList];
  updateItemCount('allCount', allList);
}