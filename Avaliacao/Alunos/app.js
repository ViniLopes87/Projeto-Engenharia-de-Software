document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

var form3= document.getElementById("formcad");
function handleForm(event) { event.preventDefault(); } 
form3.addEventListener('submit', handleForm);


function SendAvaliacao() {
    const tipouser = sessionStorage.getItem("logado").split(",");
const aluno = localStorage.getItem(tipouser[1]);
const avaliacaotexto = document.getElementById("areatexto")
const avaliacaostar = document.getElementById("estrelas")
alert(avaliacaotexto);
    alert("Avaliação enviada!");
}