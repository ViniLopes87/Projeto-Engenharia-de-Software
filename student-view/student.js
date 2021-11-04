 result = []
 const lista = document.getElementById('list')
 let filter = document.getElementsByTagName('filter')
function studentView() {
  window.location.href = ".student-view/student-view.html";
}

function teste(){
 console.log('teste')
}

function exibirlista() {
  alunos = localStorage.getItem("lista_alunos").split(",");
  var i = 0;
  for (; i <= alunos.length; i++) {
    aluno = JSON.parse(localStorage.getItem(alunos[i]));
    result.push(aluno);
  }
  exibirAlunos();
}
function exibirAlunos() {
  lista.innerHTML = "";
  result.forEach((result) => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(result.nome+ " - " + result.matricula);
    newLi.appendChild(newText);
    lista.appendChild(newLi);
  });
}
function filtrarAluno() {
   
}
exibirlista();
