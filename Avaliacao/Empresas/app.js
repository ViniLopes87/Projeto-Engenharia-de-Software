document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

var form3= document.getElementById("formcad");
function handleForm(event) { event.preventDefault(); } 
form3.addEventListener('submit', handleForm);