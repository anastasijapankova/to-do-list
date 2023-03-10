/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function accountPopup() {
    document.getElementById("popUp2").classList.toggle("show");
  }

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
  }

  function accountPopup1() {
    document.getElementById("popUp1").classList.toggle("show");
  }