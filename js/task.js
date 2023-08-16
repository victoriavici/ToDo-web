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
    case "done":
      doneList.push(task);
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
  saveDataToJson();
};

document.addEventListener("click", function(event) {

  if (event.target.classList.contains("checkmark")) {
    var taskText = event.target.nextElementSibling.textContent;
    
    var list;
  titleHeadings.forEach(heading => {
  if (getComputedStyle(heading).display === "block") {
    list = heading.textContent.toLowerCase();
    return;
  }
});

  switch (list) {
    case "today":
      todayList = todayList.filter(item => item !== taskText);
      break;
    case "scheduled":
      scheduledList = scheduledList.filter(item => item !== taskText);
      break;
    case "all":
      var before = todayList.length;
      todayList = todayList.filter(item => item !== taskText);
      if (before == todayList.length) {
        scheduledList = scheduledList.filter(item => item !== taskText);
      }
      break;
    case "done":
        break;
    default:
      removeTaskOfList(list, taskText);
      break;
  };  
  if (list !== "done") {
    doneList.push(taskText);
    updateCount();
    showTasks(list);
    }
  }; 
  saveDataToJson();
});