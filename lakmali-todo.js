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

let projectDescription = document.querySelector('project-description').textContent;
let boardDescription = []

function addProjectDescription (projectDescription ){
  boardDescription.push(projectDescription)
localStorage.setItem('projectDescription', JSON.stringify(boardDescription))
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
console.log(searchData)
  // Filter the data based on search input

const filteredData = searchData.tasks.filter(function(tasks) {
  return tasks.name.toLowerCase().includes(inputSearch ) ||
         tasks.description.toLowerCase().includes(inputSearch );
});

  console.log(filteredData)

  // CREATING SEARCH RESULT POPUP FORM 

  for (let i = 0; i < filteredData.length; i++){
    createTaskSearch(i)
  }
  function createTaskSearch(i){
    let popupSearchForm = document.querySelector('.searchResult-form');
    let searchResultItemDiv = document.createElement('div');
    searchResultItemDiv.classList.add('search-result-items');
    let searchTaskName = document.createElement('h3');
    searchTaskName.classList.add('search-task-name');
    let searchTaskDescription = document.createElement('p');
    searchTaskDescription.classList.add('search-task-description');
    searchTaskName.textContent = filteredData[i].name;
    searchTaskDescription.textContent = filteredData[i].description;
    // let filterTaskPlanner = document.querySelector('.filter-tasks-planner');
    let searchTaskOwners = document.createElement('div');
    searchTaskOwners.classList.add('search-task-owners');
    let searchPersonDetails = document.createElement('div');
    searchPersonDetails.classList.add('search-person-details');
    let personImageSearchResult = document.createElement('img');
    personImageSearchResult.classList.add('person-image-search-result');
    personImageSearchResult.setAttribute("src", "img/male-user-64.png");
    let personSearchColl = document.createElement('p');
    personSearchColl.classList.add('person-search-coll');
    personSearchColl.textContent = 'Person';
    let personSearchTasksOwner = document.createElement('p');
    personSearchTasksOwner.classList.add('person-searchtasks-owner');
    personSearchTasksOwner.textContent = (filteredData[i].owners).join(' ');
    let dateSearchTask = document.createElement('div');
    dateSearchTask.classList.add('date-search-task');
    let calanderSearch = document.createElement('img');
    calanderSearch.classList.add('calander-search');
    calanderSearch.setAttribute('src', "/img/CalendarCheck.png");
    let nameDateSearch = document.createElement('p');
    nameDateSearch.classList.add('name-date-search');
    nameDateSearch.textContent = 'Date';
    let dateTaskSearch = document.createElement('p');
    dateTaskSearch.classList.add('date-task-search');
    dateTaskSearch.textContent = filteredData[i].date;
    let statusSearchTasks = document.createElement('div');
    statusSearchTasks.classList.add('status-search-tasks');
    let statusDetailsSearch = document.createElement('div');
    statusDetailsSearch.classList.add('status-details-search');
    let chartSearch = document.createElement('img');
    chartSearch.classList.add('chart-search');
    chartSearch.setAttribute('src', "/img/ChartLine.png");
    let statusSearchTaskName = document.createElement('p');
    statusSearchTaskName.classList.add('status-search-taskname');
    statusSearchTaskName.textContent = 'Status';
    let statusSearchTask = document.createElement('p');
    statusSearchTask.classList.add('status-search-task');
    statusSearchTask.textContent = filteredData[i].status
    popupSearchForm.appendChild( searchResultItemDiv);
    // popupSearchForm.appendChild( searchTaskPlanner);
    searchResultItemDiv.appendChild(searchTaskName);
    searchResultItemDiv.appendChild(searchTaskDescription);
    searchResultItemDiv.appendChild(searchTaskOwners);
    searchTaskOwners.appendChild(searchPersonDetails);
    searchPersonDetails.appendChild(personImageSearchResult);
    searchPersonDetails.appendChild(personSearchColl);
    searchPersonDetails.appendChild(personSearchTasksOwner);
    searchResultItemDiv.appendChild(dateSearchTask);
    dateSearchTask.appendChild(calanderSearch);
    dateSearchTask.appendChild(nameDateSearch);
    dateSearchTask.appendChild(dateTaskSearch);
    searchResultItemDiv.appendChild(statusSearchTasks);
    statusSearchTasks.appendChild(statusDetailsSearch);
    statusDetailsSearch.appendChild(chartSearch);
    statusDetailsSearch.appendChild(statusSearchTaskName);
    statusDetailsSearch.appendChild(statusSearchTask);
  
  }
  });
  // ADD EVENT LISTENERS FOR CLOSES SEARCH POPUP

  let popupSearchForm = document.querySelector('.searchResult-form');
  function closeSearchResultForm() {
    popupSearchForm.style.display = 'none';
  }
  popupSearchForm.addEventListener('click', closeSearchResultForm);
  
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

// CREATING FILTER RESULT POPUP FORM 

for (let i = 0; i < filteredData.length; i++){
  createTaskFilters(i)
}

function createTaskFilters(i){
  let popupFilterForm = document.querySelector('.filter-popup');
  let filterResultItemDiv = document.createElement('div');
  filterResultItemDiv.classList.add('filter-result-items');
  let filterTaskName = document.createElement('h3');
  filterTaskName.classList.add('filter-task-name');
  let filterTaskDescription = document.createElement('p');
  filterTaskDescription.classList.add('filter-task-description');
  filterTaskName.textContent = filteredData[i].name;
  filterTaskDescription.textContent = filteredData[i].description;
  // let filterTaskPlanner = document.querySelector('.filter-tasks-planner');
  let filterTaskOwners = document.createElement('div');
  filterTaskOwners.classList.add('filter-task-owners');
  let personDetails = document.createElement('div');
  personDetails.classList.add('person-details');
  let personImageFilterResult = document.createElement('img');
  personImageFilterResult.classList.add('person-image-filter-result');
  personImageFilterResult.setAttribute("src", "img/male-user-64.png");
  let personFilterColl = document.createElement('p');
  personFilterColl.classList.add('person-filter-coll');
  personFilterColl.textContent = 'Person';
  let personFilterTasksOwner = document.createElement('p');
  personFilterTasksOwner.classList.add('person-filtertasks-owner');
  personFilterTasksOwner.textContent = (filteredData[i].owners).join(' ');
  let dateFilterTask = document.createElement('div');
  dateFilterTask.classList.add('date-filter-task');
  let calanderFilter = document.createElement('img');
  calanderFilter.classList.add('calander-filter');
  calanderFilter.setAttribute('src', "/img/CalendarCheck.png");
  let nameDateFilter = document.createElement('p');
  nameDateFilter.classList.add('name-date-filter');
  nameDateFilter.textContent = 'Date';
  let dateTaskFilter = document.createElement('p');
  dateTaskFilter.classList.add('date-task-filter');
  dateTaskFilter.textContent = filteredData[i].date;
  let statusFilterTasks = document.createElement('div');
  statusFilterTasks.classList.add('status-filter-tasks');
  let statusDetailsFilter = document.createElement('div');
  statusDetailsFilter.classList.add('status-details-filter');
  let chartFilter = document.createElement('img');
  chartFilter.classList.add('chart-filter');
  chartFilter.setAttribute('src', "/img/ChartLine.png");
  let statusFilterTaskName = document.createElement('p');
  statusFilterTaskName.classList.add('status-filter-taskname');
  statusFilterTaskName.textContent = 'Status';
  let statusFilterTask = document.createElement('p');
  statusFilterTask.classList.add('status-filter-task');
  statusFilterTask.textContent = filteredData[i].status
  popupFilterForm.appendChild( filterResultItemDiv);
  // popupFilterForm.appendChild( filterTaskPlanner);
  filterResultItemDiv.appendChild(filterTaskName);
  filterResultItemDiv.appendChild(filterTaskDescription);
  filterResultItemDiv.appendChild(filterTaskOwners);
  filterTaskOwners.appendChild(personDetails);
  personDetails.appendChild(personImageFilterResult);
  personDetails.appendChild(personFilterColl);
  personDetails.appendChild(personFilterTasksOwner);
  filterResultItemDiv.appendChild(dateFilterTask);
  dateFilterTask.appendChild(calanderFilter);
  dateFilterTask.appendChild(nameDateFilter);
  dateFilterTask.appendChild(dateTaskFilter);
  filterResultItemDiv.appendChild(statusFilterTasks);
  statusFilterTasks.appendChild(statusDetailsFilter);
  statusDetailsFilter.appendChild(chartFilter);
  statusDetailsFilter.appendChild(statusFilterTaskName);
  statusDetailsFilter.appendChild(statusFilterTask );

}
 
})
 
filteringButton.addEventListener('click', filterTask);



  // ADD EVENT LISTENERS FOR CLOSES FILTER POPUP
  
  let popupFilterForm = document.querySelector('.filter-popup');
  function closeFilterResultForm() {
    popupFilterForm.style.display = 'none';
  }
  popupFilterForm.addEventListener('click', closeFilterResultForm);

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
// CREATING SORTED RESULT POPUP FORM 

for (let i = 0; i < sortedTasks.length; i++){
  createTaskSort(i)
}

function createTaskSort(i){
  let popupSortForm = document.querySelector('.sort-popup');
  let sortResultItemDiv = document.createElement('div');
  sortResultItemDiv.classList.add('sort-result-items');
  let sortTaskName = document.createElement('h3');
  sortTaskName.classList.add('sort-task-name');
  let sortTaskDescription = document.createElement('p');
  sortTaskDescription.classList.add('sort-task-description');
  sortTaskName.textContent = sortedTasks[i].name;
  sortTaskDescription.textContent = sortedTasks[i].description;
  // let sortTaskPlanner = document.querySelector('.sort-tasks-planner');
  let sortTaskOwners = document.createElement('div');
  sortTaskOwners.classList.add('sort-task-owners');
  let personSortDetails = document.createElement('div');
  personSortDetails.classList.add('person-details');
  let personImageSortResult = document.createElement('img');
  personImageSortResult.classList.add('person-image-sort-result');
  personImageSortResult.setAttribute("src", "img/male-user-64.png");
  let personSortColl = document.createElement('p');
  personSortColl.classList.add('person-sort-coll');
  personSortColl.textContent = 'Person';
  let personSortTasksOwner = document.createElement('p');
  personSortTasksOwner.classList.add('person-sorttasks-owner');
  personSortTasksOwner.textContent = (sortedTasks[i].owners).join('  ');
  let dateSortTask = document.createElement('div');
  dateSortTask.classList.add('date-sort-task');
  let calanderSort = document.createElement('img');
  calanderSort.classList.add('calander-sort');
  calanderSort.setAttribute('src', "/img/CalendarCheck.png");
  let nameDateSort= document.createElement('p');
  nameDateSort.classList.add('name-date-sort');
  nameDateSort.textContent = 'Date';
  let dateTaskSort = document.createElement('p');
  dateTaskSort.classList.add('date-task-sort');
  dateTaskSort.textContent = sortedTasks[i].date;
  let statusSortTasks = document.createElement('div');
  statusSortTasks.classList.add('status-sort-tasks');
  let statusDetailsSort = document.createElement('div');
  statusDetailsSort.classList.add('status-details-sort');
  let chartSort= document.createElement('img');
  chartSort.classList.add('chart-sort');
  chartSort.setAttribute('src', "/img/ChartLine.png");
  let statusSortTaskName = document.createElement('p');
  statusSortTaskName.classList.add('status-sort-taskname');
  statusSortTaskName.textContent = 'Status';
  let statusSortTask = document.createElement('p');
  statusSortTask.classList.add('status-sort-task');
  statusSortTask.textContent = sortedTasks[i].status
  popupSortForm.appendChild( sortResultItemDiv);
  // popupSortForm.appendChild( sortTaskPlanner);
  sortResultItemDiv.appendChild(sortTaskName);
  sortResultItemDiv.appendChild(sortTaskDescription);
  sortResultItemDiv.appendChild(sortTaskOwners);
  sortTaskOwners.appendChild(personSortDetails);
  personSortDetails.appendChild(personImageSortResult);
  personSortDetails.appendChild(personSortColl);
  personSortDetails.appendChild(personSortTasksOwner);
  sortResultItemDiv.appendChild(dateSortTask);
  dateSortTask.appendChild(calanderSort);
  dateSortTask.appendChild(nameDateSort);
  dateSortTask.appendChild(dateTaskSort);
  sortResultItemDiv.appendChild(statusSortTasks);
  statusSortTasks.appendChild(statusDetailsSort);
  statusDetailsSort.appendChild(chartSort);
  statusDetailsSort.appendChild(statusSortTaskName);
  statusDetailsSort.appendChild(statusSortTask );

}
 
}

});

  // ADD EVENT LISTENERS FOR CLOSES SORT POPUP
  
  let popupSortForm = document.querySelector('.sort-popup');
  function closeSortResultForm() {
    popupSortForm.style.display = 'none';
  }
  popupSortForm.addEventListener('click', closeSortResultForm);

// SELECT TASKS BASED ON USERS

function personSelection(){
 document.getElementById('dropdownUsers').classList.toggle('show')
 
}
const personFilterForm = document.getElementById('dropdownUsers')


personFilterForm.addEventListener('click', function(event){
  event.preventDefault();
  const assignedTasks = event.target.textContent.trim();
  function taskByPerson (){
    let tasksStored = JSON.parse(localStorage.getItem('taskBoard'));
    let filteredUserData = tasksStored.tasks.filter(tasks => tasks.owners.includes(assignedTasks));
    return filteredUserData;
    
  }
  console.log(taskByPerson())
let userFilterData= taskByPerson ()
// CREATING USER ASSIGN TASK RESULT POPUP FORM 


  for (let i = 0; i < userFilterData.length; i++){
  let popupPersonForm = document.querySelector('.person-popup');
  let personResultItemDiv = document.createElement('div');
  personResultItemDiv.classList.add('person-result-items');
  let personTaskName = document.createElement('h3');
  personTaskName.classList.add('person-task-name');
  let personTaskDescription = document.createElement('p');
  personTaskDescription.classList.add('person-task-description');
  personTaskName.textContent =  userFilterData[i].name;
  personTaskDescription.textContent = userFilterData[i].description;
  // let personTaskPlanner = document.querySelector('.person-tasks-planner');
  let personTaskOwners = document.createElement('div');
  personTaskOwners.classList.add('person-task-owners');
  let personPersonDetails = document.createElement('div');
  personPersonDetails.classList.add('person-details');
  let personImagePersonResult = document.createElement('img');
  personImagePersonResult.classList.add('person-image-person-result');
  personImagePersonResult.setAttribute("src", "img/male-user-64.png");
  let personPersonColl = document.createElement('p');
  personPersonColl.classList.add('person-person-coll');
  personPersonColl.textContent = 'Person';
  let personPersonTasksOwner = document.createElement('p');
  personPersonTasksOwner.classList.add('person-persontasks-owner');
  personPersonTasksOwner.textContent = (userFilterData[i].owners).join(' ');
  let datePersonTask = document.createElement('div');
  datePersonTask.classList.add('date-person-task');
  let calanderPerson = document.createElement('img');
  calanderPerson.classList.add('calander-person');
  calanderPerson.setAttribute('src', "/img/CalendarCheck.png");
  let nameDatePerson= document.createElement('p');
  nameDatePerson.classList.add('name-date-person');
  nameDatePerson.textContent = 'Date';
  let dateTaskPerson = document.createElement('p');
  dateTaskPerson.classList.add('date-task-person');
  dateTaskPerson.textContent = userFilterData[i].date;
  let statusPersonTasks = document.createElement('div');
  statusPersonTasks.classList.add('status-person-tasks');
  let statusDetailsPerson= document.createElement('div');
  statusDetailsPerson.classList.add('status-details-person');
  let chartPerson= document.createElement('img');
  chartPerson.classList.add('chart-person');
  chartPerson.setAttribute('src', "/img/ChartLine.png");
  let statusPersonTaskName = document.createElement('p');
  statusPersonTaskName.classList.add('status-person-taskname');
  statusPersonTaskName.textContent = 'Status';
  let statusPersonTask = document.createElement('p');
  statusPersonTask.classList.add('status-person-task');
  statusPersonTask.textContent = userFilterData[i].status
  popupPersonForm.appendChild( personResultItemDiv);
  // popupPersonForm.appendChild( personaskPlanner);
  personResultItemDiv.appendChild(personTaskName);
  personResultItemDiv.appendChild(personTaskDescription);
  personResultItemDiv.appendChild(personTaskOwners);
  personTaskOwners.appendChild(personPersonDetails);
  personPersonDetails.appendChild(personImagePersonResult);
  personPersonDetails.appendChild(personPersonColl);
  personPersonDetails.appendChild(personPersonTasksOwner);
  personResultItemDiv.appendChild(datePersonTask);
  datePersonTask.appendChild(calanderPerson);
  datePersonTask.appendChild(nameDatePerson);
  datePersonTask.appendChild(dateTaskPerson);
  personResultItemDiv.appendChild(statusPersonTasks);
  statusPersonTasks.appendChild(statusDetailsPerson);
  statusDetailsPerson.appendChild(chartPerson);
  statusDetailsPerson.appendChild(statusPersonTaskName);
  statusDetailsPerson.appendChild(statusPersonTask );

}
 
})

  // ADD EVENT LISTENERS FOR CLOSES USER POPUP
  
  let popupPersonForm = document.querySelector('.person-popup');
  function closePersonResultForm() {
    popupPersonForm.style.display = 'none';
  }
  popupPersonForm.addEventListener('click', closePersonResultForm);
 
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
 