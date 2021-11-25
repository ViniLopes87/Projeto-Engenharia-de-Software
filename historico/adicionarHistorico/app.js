document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );
//evita a página recarregar ao apertar em "Enviar"
var form = document.getElementById("EnvHist");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
