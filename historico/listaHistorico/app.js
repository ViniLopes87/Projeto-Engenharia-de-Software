document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );
const addbtn = document.getElementById("addbtn");
const tipouser = sessionStorage.getItem("logado").split(",");
const aluno = JSON.parse(localStorage.getItem(tipouser[1]));
if (aluno.status == "Finalizado" || aluno.status == "desempregado") {
  addbtn.innerHTML = "Adicionar";
  addbtn.onclick = PageAdd;
  addbtn.style.display = "block";
} else {
  addbtn.innerHTML = "Finalizar";
  addbtn.onclick = RemoveEmprego;
  addbtn.style.display = "block";
}
ExibeEmprego();

function PageAdd() {
  location.href = "../adicionarHistorico/index.html";
}
