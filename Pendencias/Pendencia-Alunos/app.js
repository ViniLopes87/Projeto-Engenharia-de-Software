document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );
  exibePendencia();
  const addbtn = document.getElementById("addbtn");
const tipouser = sessionStorage.getItem("logado").split(",");
addbtn.style.display = "block";



