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

  let taskForm = document.getElementById('taskFormButton') ;
  let newTaskAddition = document.getElementById('taskInput');

  function addTaskForm(){
    newTaskAddition.style.display = 'block';
  }

  function closeTask() {
    newTaskAddition.style.display = 'none';
  }
  taskForm.addEventListener('click', addTaskForm);

  //search data from the storage

  // let formSearch = document.getElementById('formSearch');
  // let searchInput = document.getElementById('searchInput');
  // let searchResults = document.getElementById('searchResult');

  // formSearch.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   const inputSearch = searchInput.value.toLowerCase();
  //   const dataSearch = JSON.parse(localStorage.getItem('myData'));

  //   const filteredDataSearch = dataSearch.filter(function(item) {
  //     return item.name.toLowerCase().includes(inputSearch) ||
  //            item.description.toLowerCase().includes(inputSearch);
  //   });

    // Display the search results
    // if (filteredDataSearch.length > 0) {
    //   const html = '<ul>' + filteredDataSearch.map(function(item) {
    //     return '<li>' + item.name + ': ' + item.description + '</li>';
    //   }).join('') + '</ul>';
    //   searchResults.textContent = html;
    // } else {
    //   searchResults.textContent = 'No results found.';
    // }
  // });

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

//////////////////////////////////////////////////////////////
// <script>
  // const formSearch = document.getElementById('formSearch');
  // const searchInput = document.getElementById('searchInput');
  // const searchResults = document.getElementById('searchResults'); */}

  // formSearch.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   const query = searchInput.value.toLowerCase();

    // Retrieve data from local storage
    // const data = JSON.parse(localStorage.getItem('myData'));

    // Filter the data based on search query
    // const filteredData = data.filter(function(item) {
    //   return item.name.toLowerCase().includes(query) ||
    //          item.description.toLowerCase().includes(query);
    // });

    // Display the search results
    // if (filteredData.length > 0) {
    //   const html = '<ul>' + filteredData.map(function(item) {
    //     return '<li>' + item.name + ': ' + item.description + '</li>';
    //   }).join('') + '</ul>';
    //   searchResults.innerHTML = html;
    // } else {
    //   searchResults.innerHTML = 'No results found.';
    // }
  // });
// </script>