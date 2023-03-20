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

// Add description to the project

let projectDescription = document.getElementById('taskDetails').value;
let boardDescription = []

function addProjectDescription (newBoardDescription){
  boardDescription.push(newBoardDescription)
localStorage.setItem('projectDescription', JSON.stringify(projectDescription ))
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

 //openning the filtering popup

 let filteringButton = document.getElementById('filterButton');
 let filterForm = document.getElementById('filterTasks');

 function filterTask(){
  filterForm.style.display = 'block'
 
// get input to filter
// let inputStatusToFilter = document.getElementById('tasksStatus')
// let inputUserToFilter = document.getElementById('selectedUser')
 

// Retrieve filterdata
  let filterData = JSON.parse(localStorage.getItem('taskBoard'));

// event listener
let formFilter = document.querySelector('.form-filter');
formFilter.addEventListener('submit', function(event) {
  event.preventDefault();
  let filterStatus = document.getElementById('tasksStatus').value;
  let filterUsers = document.getElementById('selectedUser').value;

  let filteredData = filterData.tasks.filter(tasks => tasks.owners.includes(filterUsers) && tasks.status === filterStatus);
  console.log(filteredData);
 
})
}

  function closeFilter() {
    filterForm.style.display = 'none';
  }
  
  filteringButton.addEventListener('click', filterTask);


 
 



//   sorting data

 function sortSelector(){
   document.getElementById('sortDropdown').classList.toggle('show')
 }


// user selection

function personSelection(){
 document.getElementById('dropdownUsers').classList.toggle('show')
 
}

const assignedTasks = document.getElementById('dropdownUsers').value;
const tasksStored = JSON.parse(localStorage.getItem('tasks'));

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
 

