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

let taskBoard = {
    tasks: []
  }
  
const form = document.getElementById('addNewTask');
const submitButton = document.getElementById('taskSubmit');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
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
  form.reset();
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


//  create owner-details div for each value
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

  