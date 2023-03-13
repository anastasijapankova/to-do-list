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


//   favourite projects toggle stars

  let star = document.getElementById('outLineStar');

  let toggleStar = true;

  star.addEventListener('click', function(){
    toggleStar = !toggleStar;
    if (toggleStar){
        star.src = "img/star-64.png";
    } else{
        star.src = "img/starfill-64.png";}
    
  })


  // openning of new task form

  let taskForm = document.getElementById('taskFormButton') ;
  let newTaskAddition = document.getElementById('taskInput');

  function addTaskForm(){
    newTaskAddition.style.display = 'block';
  }

  function closeTask() {
    newTaskAddition.style.display = 'none';
  }
  taskForm.addEventListener('click', addTaskForm);

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
  