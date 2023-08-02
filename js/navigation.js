const todayList = ["dat si ranajky", "dat si obed"];
const scheduledList = ["dat si ranajky", "spravit todolist"];
const flaggedList = ["ta vlajocka este nie je"]
const allList = [...todayList, ...scheduledList, ...flaggedList];

//const allList = [...new Set([...todayList, ...scheduledList, ...flaggedList])];

const todosListElement = document.getElementById('todos');

function updateItemCount(elementId, itemList) {
  const countElement = document.getElementById(elementId);
  countElement.textContent = itemList.length;
}

updateItemCount('todayCount', todayList);
updateItemCount('allCount', allList);
updateItemCount('scheduledCount', scheduledList);
updateItemCount('flaggedCount', flaggedList);

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

todosListElement.innerHTML = flaggedList.map(createTodoItem).join('');

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav a");
  var titleHeadings = document.querySelectorAll(".title h1");

  function handleClick(event) {
    event.preventDefault();
    var clickedLink = event.currentTarget;
    var targetId = clickedLink.getAttribute("data-target");
    var color = clickedLink.getAttribute("data-color");

    function changeColor(color) {
      const rootElement = document.documentElement;
      rootElement.style.setProperty('--color-svg', color);
    }

    titleHeadings.forEach(heading => {
      if (heading.id === targetId) {
        heading.style.display = "block";
      } else {
        heading.style.display = "none";
      }
    });
    changeColor(color);

    switch (targetId) {
      case "today":
        todosListElement.innerHTML = todayList.map(createTodoItem).join('');
        break;
      case "scheduled":
        todosListElement.innerHTML = scheduledList.map(createTodoItem).join('');
        break;
      case "flagged":
        todosListElement.innerHTML = flaggedList.map(createTodoItem).join('');
        break;
      case "all":
        todosListElement.innerHTML = allList.map(createTodoItem).join('');
      default:
        break;
    }
  }

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", handleClick);
  });
});