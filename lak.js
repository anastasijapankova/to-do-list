// TO OPEN THE POPUP INFORMATION FORM

let informationIcon = document.getElementById('informationIcon');
let informationForm = document.getElementById('informationForm');

function openInfromationForm() {
  informationForm.style.display = 'block';
}

function closeInformationForm() {
  informationForm.style.display = 'none';
}

informationIcon.addEventListener('click', openInfromationForm);

// ADD DESCRTIPTION TO THE PROJECT

let projectDescription = document.getElementById('taskDetails').value;
let boardDescription = []

function addProjectDescription (newBoardDescription){
  boardDescription.push(newBoardDescription)
localStorage.setItem('projectDescription', JSON.stringify(projectDescription))
}

// ADD FOVOURITE PROJECT TO THE LOCAL STORGE

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

  // OPENNING A NEW TASK FORM

  let newTaskForm = document.getElementById('taskFormButton') ;
  let newTaskAddition = document.getElementById('taskInput');

  function addTaskForm(){
    newTaskAddition.style.display = 'block';
  }

  function closeTask() {
    newTaskAddition.style.display = 'none';
  }
  newTaskForm .addEventListener('click', addTaskForm);

// RETRIEVE THE FORM AND SUBMIT BUTTON ELEMENTS

let taskBoard = JSON.parse(localStorage.getItem('taskBoard'))||{
  
    tasks: []
  }

const taskForm = document.getElementById('addNewTask');
const submitButton = document.getElementById('taskSubmit');

// ADD AN EVENT LISTENER TO THE SUBMIT BUTTON

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); 
  
// RETRIEVE THE VALUES OF THE FORM INPUT ELEMENTS
  const taskName = document.getElementById('taskName').value;
  const taskDesc = document.getElementById('taskDetails').value;
  const owners = getOwners();
  const date = document.getElementById('assignDate').value;
  const status = document.getElementById('status').value;
  
// CREATE A NEW TASK OBJECT USING FORM INPUT
  const task = {
    boardId: 1,
    name: taskName,
    description: taskDesc,
    owners: owners,
    date: date,
    status: status
  };
  
  // ADD THE NEW TASK TO THE TASK BOARD AND STORE IT IN THE LOCAL STORAGE
  taskBoard.tasks.push(task);
  localStorage.setItem('taskBoard', JSON.stringify(taskBoard));
  
  
  // RESET NEW TASK FORM
  taskForm.reset();
});

// RETRIEVE THE SELECTED OWNERS FROM THE CHECKBOX
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

// RETRIEVE THE OWNERS FROM THE LOCAL STORAGE TO AN ARRY
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


// CREATE OWNER-DETAILS DIVS FOR EACH VALUE FOR COLLABORATORS
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


// SEARCH DATA FROM THE LOCAL STORAGE BASED ON TASK OR TASK


const formSearch = document.getElementById('formSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults'); 

formSearch.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputSearch = searchInput.value.toLowerCase();
  // Retrieve data from local storage
  const searchData = JSON.parse(localStorage.getItem('taskBoard'));
// console.log(searchData)
  // Filter the data based on search input

const filteredData = searchData.tasks.filter(function(tasks) {
  return tasks.name.toLowerCase().includes(inputSearch ) ||
         tasks.description.toLowerCase().includes(inputSearch );
});

  console.log(filteredData)
  });
  

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



//  OPENNNG THE FILTERING POPUP AND RETRIEVE FILTERED DATA

let filteringButton = document.getElementById('filterButton');
let filterForm = document.getElementById('filterTasks');
let filterData = JSON.parse(localStorage.getItem('taskBoard'));

function filterTask(){
  filterForm.style.display = 'block'
}

function closeFilter() {
    filterForm.style.display = 'none';
}


// EVENT LISTENER FOR FILTER FORM
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



// SELECT TASKS BASED ON USERS

function personSelection(){
 document.getElementById('dropdownUsers').classList.toggle('show')
 
}
const personFilterForm = document.getElementById('dropdownUsers')


personFilterForm.addEventListener('click', function(event){
  event.preventDefault();
  const assignedTasks = event.target.textContent.trim();
  function taskByPerson (){
    const tasksStored = JSON.parse(localStorage.getItem('taskBoard'));
    let filtereUserdData = tasksStored.tasks.filter(tasks => tasks.owners.includes(assignedTasks));
    return filtereUserdData
  }
  console.log(taskByPerson())

})


 
//CLOSE THE DROPDOWN WHEN USER CLICK OUTSIDE OF THE DROPDOWN
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
 
