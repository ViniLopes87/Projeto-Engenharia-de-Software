 result = []
 resultOne = []
 const lista = document.getElementById('list')
 const filter = document.getElementById('filtrar')
 const btFiltrar = document.getElementById("btFiltrar")
 const response = document.getElementById("resp")
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
  result.forEach((result) => { if(result!=null){
    const newLi = document.createElement("li");
    const newText = document.createTextNode(result.nome + " - " + result.matricula +" - " + result.periodo + " - " + result.status);
    newLi.appendChild(newText);
    lista.appendChild(newLi);
  }
  });
}
function filtrarAluno() {
  aluno  = JSON.parse(localStorage.getItem(filter.value))
  if(aluno!=null){
    const newText = aluno.nome + " - " + aluno.matricula +" - " + aluno.periodo + " - " + aluno.status;
    response.innerHTML = newText;
    lista.style.display = "none"
  }else{
    alert('CPF do aluno não encontrado')
  }
  
}
  btFiltrar.onclick = filtrarAluno;
  exibirlista();


