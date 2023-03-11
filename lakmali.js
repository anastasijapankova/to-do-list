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