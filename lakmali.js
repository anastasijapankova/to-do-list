// To add name to the board
let projectName = localStorage.getItem('..............')














// To open the popup information form 

  let informationIcon = document.getElementById('informationIcon');
  let informationForm = document.getElementById('informationForm');
  
  function openInfromationForm() {
    informationForm.style.display = 'block';
  }
  
  function closeInformationForm() {
    informationForm.style.display = 'none';
  }
  
  informationIcon.addEventListener('click', openInfromationForm);


// get data from local storage for popup form


//   favourite projects toggle stars

  // let star = document.getElementById('outLineStar');

  // let toggleStar = true;

  // star.addEventListener('click', function(){
  //   toggleStar = !toggleStar;
  //   if (toggleStar){
  //       star.src = "img/star-64.png";
  //   } else{
  //       star.src = "img/starfill-64.png";}
    
  // })

// add favourite projrcts to local storage

let star = document.getElementById('outLineStar');
let isProjectFavoriute = false;

if (localStorage.getItem('isProjectFavoriute') === 'true') {
  isProjectFavoriute = true;
  star.src = "img/starfill-64.png";
}

star.addEventListener('click', function() {
  isProjectFavoriute = !isProjectFavoriute;
  if (isProjectFavoriute) {
    star.src = "img/starfill-64.png";
    localStorage.setItem('isProjectFavoriute', 'true');
  } else {
    star.src = "img/star-64.png";
    localStorage.removeItem('isProjectFavoriute');
  }
});


  // openning of new task form

  let newTaskForm = document.getElementById('taskFormButton') ;
  let newTaskAddition = document.getElementById('taskInput');

  function addTaskForm(){
    newTaskAddition.style.display = 'block';
  }

  function closeTask() {
    newTaskAddition.style.display = 'none';
  }
  newTaskForm .addEventListener('click', addTaskForm);

// storing data from new task popup

// Get the task form, input fields 
// (task name, task details, asign person, date asign and status)
const taskForm = document.getElementById('addNewTask');
const inputTaskName = document.getElementById('taskName');
const inputDescription = document.getElementById('taskDetails');
const dateAssign = document.getElementById('assignDate');
const taskStatus = document.getElementById('status');
// const assingPerson = document.getElementsByClassName('assign-person').length;
const taskList = document.getElementById('taskList');

// Get the task name, description from local storage or create an empty array
let newTasks =  [];
let addedDescription = [];
let taskAssignDate = [];
let assignStatus = [];
// let taskAssingPerson = [];

// Function to add a task to the list and update local storage
function addTask(taskName) {
  newTasks.push(taskName);
  localStorage.setItem('tasksName', JSON.stringify(newTasks));
}

function descriptionTask(taskDetails){
  addedDescription.push(taskDetails);
  localStorage.setItem('taskDescription', JSON.stringify(addedDescription));
}

function dateOfAssign(assignDate){
  taskAssignDate.push(assignDate);
  localStorage.setItem('assignDate', JSON.stringify(taskAssignDate));
}

function taskAssignStatus(status){
  assignStatus.push(status);
  localStorage.setItem('status', JSON.stringify(assignStatus))
}


// Add an event listener to the task form
taskForm.addEventListener('submit', event => {
  event.preventDefault();

  const taskName = inputTaskName.value;
  addTask(taskName);
  inputTaskName.value = '';

  const taskDetails = inputDescription.value;
  descriptionTask(taskDetails);
  inputDescription.value = '';

  const assignDate = dateAssign.value;
  dateOfAssign(assignDate);
  dateAssign.value = '';

  const status = taskStatus.value;
  taskAssignStatus(status);
  taskStatus.value ='';
});

document.getElementById("taskSubmit").addEventListener("click", function() {
  const owners = [];
  let checkboxes = document.querySelectorAll(".assign-person");
  checkboxes.forEach(function(checkbox) {
    // If checkbox is checked, add its value to owners array
    if (checkbox.checked) {
      owners.push(checkbox.nextElementSibling.textContent);
    }
  });

  // Store owners array in local storage
  localStorage.setItem("owners", JSON.stringify(owners));

  // Retrieve owners array from local storage
  let retrievedOwners = JSON.parse(localStorage.getItem("owners"));

  // Loop through retrievedOwners and create owner-details div for each value
    let ownersDiv = document.querySelector(".owners");
    retrievedOwners.forEach(function(owner) {
    let ownerDetailsDiv = document.createElement("div");
    ownerDetailsDiv.classList.add("owner-details");
    let ownerImage = document.createElement("img");
    ownerImage.classList.add("responsible");
    ownerImage.setAttribute("src", "img/male-user-64.png");
    let ownerParagraph = document.createElement("p");
    ownerParagraph.classList.add("owner");
    ownerParagraph.textContent = owner;
    ownerDetailsDiv.appendChild(ownerImage);
    ownerDetailsDiv.appendChild(ownerParagraph);
    ownersDiv.appendChild(ownerDetailsDiv);
  });
});

  //search data from the local storage

  const formSearch = document.getElementById('formSearch');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults'); 

  formSearch.addEventListener('submit', function(eventSubmit) {
    eventSubmit.preventDefault();
    const userSerchInput = searchInput.value.toLowerCase();

    // Retrieve data from local storage
    const dataFromStorage = JSON.parse(localStorage.getItem('key'));

    // Filter the data based on search query
    const filteredData = dataFromStorage.filter(function(resultItem) {
      return resultItem.name.toLowerCase().includes(userSerchInput) || []
      resultItem.description.toLowerCase().includes(userSerchInput);
    });

    // Display the search results
    if (filteredData.length > 0) {
      const serachDiv = '<div>' + filteredData.map(function(resultItem) {
        return '<p>' + resultItem.name + ': ' + resultItem.description + '</p>';
      }).join('') + '</div>';
      searchResults.textContent = serachDiv;
    } else {
      searchResults.textContent = 'No results found.';
    }
  });



  //openning the filtering popup

  let filteringButton = document.getElementById('filterButton');
  let filterForm = document.getElementById('filterTasks');

  function filterTask(){
    filterForm.style.display = 'block'
  }
  function closeFilter() {
    filterForm.style.display = 'none';
  }
  
  filteringButton.addEventListener('click', filterTask)

//   sorting data

  function sortSelector(){
    document.getElementById('sortDropdown').classList.toggle('show')
  }


// user selection

function personSelection(){
  document.getElementById('dropdownUsers').classList.toggle('show')
  
}

  
//   // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-user')) {
      let userDropdowns = document.getElementsByClassName("formUsers");
      let i;
      for (i = 0; i <  userDropdowns.length; i++) {
        let openUserDropdown = userDropdowns[i];
        if (openUserDropdown.classList.contains('show')) {
          openUserDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.sort')){
      console.log('', event.target)
      let sortClose = document.querySelector('.sortForm')
      if(sortClose.classList.contains('show'))sortClose.classList.remove('show')
    }
  }
  

// storing and getting data from information popup

// let projectName = document.getElementsByClassName('selected-project-name')
// projectName.textContent = '..............'


// let ProjectDetails = document.getElementsByClassName('project-description')

// let 


