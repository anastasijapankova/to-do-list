/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function accountPopup2() {
    document.getElementById("popUp2").classList.toggle("show");
  }

function accountPopup1() {
    document.getElementById("popUp1").classList.toggle("show");
  }

function addBoardPopup() {
    document.getElementByClass("add-board").classList.toggle("show");
}



var loginPopup = document.getElementById('login001');
var addBoard = document.getElementById("popUp3");


// When the user clicks anywhere outside of the login box, close it

// Close the dropdown if the user clicks outside of it

  window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
      var droppopup2 = document.getElementsByClassName("drop-account");
      var i;
      for (i = 0; i < droppopup2.length; i++) {
        var openDropdown = droppopup2[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
   }

  if (!event.target.matches('.fa-bell')) {
    console.log('yo', event.target)
    const el = document.querySelector(".bell-notify")
    if (el.classList.contains('show')) el.classList.remove('show') 
  }

  if (event.target == loginPopup) {
    loginPopup.style.display = "none"
  }


}
