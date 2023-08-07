var addNewElement = document.getElementById("add-new");
const modalTask = document.getElementById("modalTask");
const submitTaskFormButton = document.getElementById('submitTask');
const closeTaskFormButton = document.getElementById('closeTask');


addNewElement.addEventListener('click', () => {
    modalTask.style.display = "block";
});

addNewElement.addEventListener('click', () => {
    modalTask.style.display = 'flex';
    modalDarkness.style.display = "block";
  });
  
closeTaskFormButton.addEventListener('click', () => {
    closeModalTask();
});
function closeModalTask() {
    modalTask.style.display = 'none';
    modalDarkness.style.display = "none";
  };

submitTaskFormButton.addEventListener('click', () => {
   const newTask =  document.getElementById("taskInput");
   if (newTask.value== "") {
    return;
   }  
   addTask(newTask.value);
   newTask.value = "";
   closeModalTask();
});

function addTask(task) {
  var list;
titleHeadings.forEach(heading => {
  if (getComputedStyle(heading).display === "block") {
    list = heading.textContent.toLowerCase();
    return;
  }
});

  switch (list) {
    case "today":
      todayList.push(task);
      break;
    case "scheduled":
      scheduledList.push(task);
      break;
    case "flagged":
      flaggedList.push(task);
      break;
    case "all":
      allList.push(task);
      break;
    default:
      addTaskToList(list, task);
      showTasksOfList(list);
      break;
  };

  showTasks(list);
};

