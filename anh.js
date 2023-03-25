/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function accountPopup2() {
//     document.getElementById("popUp2").classList.toggle("show");
//   }
function accountPopup2(event) {
  event.stopPropagation(); // Add this line to stop the event from propagating
  document.getElementById("popUp2").classList.toggle("show");
}


function accountPopup1() {
    document.getElementById("popUp1").classList.toggle("show");
  }

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content 
- This allows the user to have multiple dropdowns without any conflict */
var addBoard = document.getElementsByClassName("for-board");
var i;

for (i = 0; i < addBoard.length; i++) {
  addBoard[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var addBoardContent = this.nextElementSibling;
    if (addBoardContent.style.display === "block") {
      addBoardContent.style.display = "none";
    } else {
      addBoardContent.style.display = "block";
    }
  });
}

var listBoard = document.getElementsByClassName("list-board");
var i;
for (i = 0; i < listBoard.length; i++) {
  listBoard[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var listBoardContent = this.nextElementSibling;
    if (listBoardContent.style.display === "block") {
      listBoardContent.style.display = "none";
    } else {
      listBoardContent.style.display = "block";
    }
  });
}


//for the login 
var loginPopup = document.getElementById('login001');

function openLoginPopup(event) {
  event.stopPropagation();
  console.log('hey')
  loginPopup.style.display = 'block';
}

// Close the dropdown if the user clicks outside of it

  //window.onclick = function(event) {
  //   if (!event.target.matches('.drop-btn')) {
  //     var droppopup2 = document.getElementsByClassName("drop-account");
  //     var i;
  //     for (i = 0; i < droppopup2.length; i++) {
  //       var openDropdown = droppopup2[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //  }

  // if (!event.target.matches('.fa-bell')) {
  //   console.log('yo', event.target)
  //   const el = document.querySelector(".bell-notify")
  //   if (el.classList.contains('show')) el.classList.remove('show') 
  // }
  // // When the user clicks anywhere outside of the login box, close it
  // if (event.target == loginPopup) {
  //   loginPopup.style.display = "none"
  // }


  

// window.onclick = function(event) {
//   if (!event.target.matches('.drop-btn')) {
//     var droppopup2 = document.getElementsByClassName("drop-account");
//     var i;
//     for (i = 0; i < droppopup2.length; i++) {
//       var openDropdown = droppopup2[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }

//   if (!event.target.matches('.fa-bell')) {
//     const el = document.querySelector(".bell-notify")
//     if (el.classList.contains('show')) el.classList.remove('show') 
//   }
  
//   // When the user clicks anywhere outside of the login box, close it
//   // if (event.target == loginPopup) {
//   //   loginPopup.style.display = "none"
//   // }
//   // Prevent hiding dropdown when clicking on the "Sign in" button
//   if (event.target == document.getElementById('signinBtn')) {
//     event.stopPropagation();
//   }
// }



 //Saving Add Board data in localStorage
function boardfunct(event) {
  event.preventDefault();
  var board_title = document.getElementById("brd-title").value;
  var board_author = document.getElementById("brd-author").value;
  var board_visible = document.getElementById("visibility").value;

  localStorage.setItem('get_board_title', board_title);
  localStorage.setItem('get_board_author', board_author);
  localStorage.setItem('get_visibility', board_visible)

  document.getElementById('my-title-here').innerHTML = localStorage.getItem('get_board_title');
}




  // ADD EVENT LISTENERS FOR CLOSES ADD BOARD POPUP
  let addBoardPopupForm = document.querySelector('.add-board')
  let addBoardPopupButton = document.querySelector('.add-board-popup');
  function saveBoardTitle() {
    addBoardPopupForm.style.display = 'none';
  }
  addBoardPopupButton.addEventListener('click', saveBoardTitle);

