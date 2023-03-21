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
  

  console.log(`===========================================================`)
/*
**********************************************************



*/
// storing and getting data from information popup

// let projectName = document.getElementsByClassName('selected-project-name')
// projectName.textContent = '..............'


// let ProjectDetails = document.getElementsByClassName('project-description')

// let 


// To open the popup information form 

/*let informationIcon = document.getElementById('informationIcon');
let informationForm = document.getElementById('informationForm');

function openInfromationForm() {
  informationForm.style.display = 'block';
}

function closeInformationForm() {
  informationForm.style.display = 'none';
}

informationIcon.addEventListener('click', openInfromationForm);

// Add description to the project

let projectDescription = document.getElementById('taskDetails').value;
let boardDescription = []

function addProjectDescription (newBoardDescription){
  boardDescription.push(newBoardDescription)
localStorage.setItem('projectDescription', JSON.stringify(projectDescription))
}

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

// Retrieve the form and submit button elements

let taskBoard = JSON.parse(localStorage.getItem('taskBoard'))||{
  
    tasks: []
  }

const taskForm = document.getElementById('addNewTask');
const submitButton = document.getElementById('taskSubmit');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  // Retrieve the values of the form input elements
  const taskName = document.getElementById('taskName').value;
  const taskDesc = document.getElementById('taskDetails').value;
  const owners = getOwners();
  const date = document.getElementById('assignDate').value;
  const status = document.getElementById('status').value;
  
  // Create a new task object with the form values
  const task = {
    boardId: 1,
    name: taskName,
    description: taskDesc,
    owners: owners,
    date: date,
    status: status
  };
  
  // Add the new task to the task board and store it in local storage
  taskBoard.tasks.push(task);
  localStorage.setItem('taskBoard', JSON.stringify(taskBoard));
  
  
  // Reset the form inputs
  taskForm.reset();
});

// Helper function to retrieve the selected owners
function getOwners() {
  const owners = [];
  const checkboxes = document.querySelectorAll('.assign-person');
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      owners.push(checkbox.nextElementSibling.textContent);
    }
  });
  return owners;
}

// Retrieve owners array from local storage
let retrievedOwners = localStorage.getItem("taskBoard");
let projectCollaborators = JSON.parse(retrievedOwners);

let collaborators = [];

projectCollaborators.tasks.forEach(task => {
  collaborators = collaborators.concat(task.owners);
});

let uniqeCollaborators = [];
collaborators.forEach((person) => {
    if (!uniqeCollaborators.includes(person)){
        uniqeCollaborators.push(person)
    }
})


//  create owner-details div for each value for collaborators
    let ownersDiv = document.querySelector(".owners");
    uniqeCollaborators.forEach(function(owner) {
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


// search data from the storage


const formSearch = document.getElementById('formSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults'); 

// formSearch.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const inputSearch = searchInput.value.toLowerCase();
// //   // Retrieve data from local storage
//   const searchData = JSON.parse(localStorage.getItem('taskBoard'));
// console.log(searchData)
//   // Filter the data based on search input

// const filteredData = searchData.tasks.filter(function(item) {
//   return item.name.toLowerCase().includes(inputSearch ) ||
//          item.description.toLowerCase().includes(inputSearch );
// });


  // const filteredData = searchData.task.filter(function(item) {
  //   for (const property in item) {
  //     if (typeof item[property] === 'string' && item[property].toLowerCase().includes(inputSearch)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // });

//   // Display the search results
  // if (filteredData.length > 0) {
  //   const searchResultDiv = '<ul>' + filteredData.map(function(item) {
  //     return '<li>' + item.name + ': ' + item.description + '</li>';
  //   }).join('') + '</ul>';
  //   searchResults.textContent = searchResultDiv;
  // } else {
  //   searchResults.textContent = 'No results found.';
  // }
// });

 //openning the filtering popup and retrive filtered data

let filteringButton = document.getElementById('filterButton');
let filterForm = document.getElementById('filterTasks');
let filterData = JSON.parse(localStorage.getItem('taskBoard'));

function filterTask(){
  filterForm.style.display = 'block'
}

function closeFilter() {
    filterForm.style.display = 'none';
}


// event listener
let formFilter = document.querySelector('.form-filter');

formFilter.addEventListener('submit', function(event) {
  event.preventDefault();
  let filterStatus = document.getElementById('tasksStatus').value;
  let filterUsers = document.getElementById('selectedUser').value;

  let filteredData = filterData.tasks.filter(tasks => tasks.owners.includes(filterUsers) && tasks.status === filterStatus);
  console.log(filteredData);

formFilter.reset()
 
})
 
filteringButton.addEventListener('click', filterTask);



//   SORTING DATA BASED ON ASSIGN DATE



function sortSelector() {
  document.getElementById('sortDropdown').classList.toggle('show');
}

let sortButton = document.getElementById('sortSelectorButton');
let sortFormDrop = document.getElementById('sortDropdown');

function sortByDate() {
  let sortData = JSON.parse(localStorage.getItem('taskBoard'));
  return sortData.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
}

sortFormDrop.addEventListener('click', function(event){
  event.preventDefault();
  let statusSelection = event.target.id;
  if (statusSelection === 'optionSelect') {
    let sortedTasks = sortByDate();
    console.log(sortedTasks);
  }
});

// console.log(sortByDate())

//  function sortSelector(){
//   document.getElementById('sortDropdown').classList.toggle('show')
// }

// let sortButton = document.getElementById('sortSelectorButton');
// let sortFormDrop = document.getElementById('sortDropdown')

// function sortByDate() {
//   let sortData = JSON.parse(localStorage.getItem('taskBoard'));
//   return sortData.tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
// }

// sortFormDrop.addEventListener('click', function(event){
//   event.preventDefault();
//   let statusSelection = document.getElementById('sortSelector').value;
//   if (statusSelection == 'Date') {
//     let sortedTasks = sortByDate();
//     console.log(sortedTasks);
    // do something with sortedTasks
//   }
// });
// console.log(sortByDate)
   // sort tasks array based on date
// sortData.sort((a, b) => new Date(a.date) - new Date(b.date));

// store the sorted tasks array in local storage
// localStorage.setItem('tasks', JSON.stringify(tasks));


  // let statusSelection = document.getElementsByClassName('sotr-selector').value
  //   let sortDataSelect = sortData.tasks.filter(tasks =>tasks.date === statusSelection);

  // let sortDataSelect = sortData.tasks.includes(statusSelection);
  // console.log(sortDataSelect);

  //   let sortDataSelect = sortData.tasks.filter(tasks => tasks.status === statusSelection || tasks.date === statusSelection);
  // console.log(sortDataSelect);
//  })



// user selection

function personSelection(){
 document.getElementById('dropdownUsers').classList.toggle('show')
 
}

const assignedTasks = document.getElementById('dropdownUsers').value;
const tasksStored = JSON.parse(localStorage.getItem('taskBoard'));

function taskByPerson (task){

}

// const tasksAssignedToPerson = tasksStored.tasksStored.filter(tasksStored => tasksStored.owners.includes(assignedTasks));


 
//  Close the dropdown menu if the user clicks outside of it
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
 
*/