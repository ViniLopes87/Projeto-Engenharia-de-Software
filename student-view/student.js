 result = []
 //resultOne = []
 //const lista = document.getElementById('list')
 const filter = document.getElementById('filtrar')
 const btFiltrar = document.getElementById("btFiltrar")
 //const response = document.getElementById("resp")
function studentView() {
  window.location.href = ".student-view/student-view.html";
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
  let tbody = document.getElementById('tbody')
  for(let i = 0; i < result.length;i++){

      let tr = tbody.insertRow();
      
      let td_nome = tr.insertCell();
      let td_matricula = tr.insertCell();
      let td_periodo = tr.insertCell();
      let td_status = tr.insertCell();
      let td_info = tr.insertCell();

      td_nome.innerText = result[i].nome;
      td_matricula.innerText = result[i].matricula;
      td_periodo.innerText = result[i].periodo+"º";
      td_status.innerText = result[i].status;
      
      let imgInfo = document.createElement('info');
      imgInfo.innerText = "(+)"
      td_info.appendChild(imgInfo);
      imgInfo.setAttribute("onclick","teste()")
  } 
  //lista.innerHTML = "";
  //result.forEach((result) => { if(result!=null){
    //const newLi = document.createElement("li");
    //const newText = document.createTextNode(result.nome + " - " + result.matricula +" - " + result.periodo + " - " + result.status);
    //newLi.appendChild(newText);
    //lista.appendChild(newLi);
  //}
  //});
}
function filtrarAluno() {
  let tbody2 = document.getElementById('tbody2');
  tbody2.innerText = "";
  if(filter.value!=""){
    aluno  = JSON.parse(localStorage.getItem(filter.value))
    if(aluno!=null){
      tbody.style.display = 'none';

      let tr = tbody2.insertRow();
  
      let td_nome = tr.insertCell();
      let td_matricula = tr.insertCell();
      let td_periodo = tr.insertCell();
      let td_status = tr.insertCell();
      let td_info = tr.insertCell();
  
      td_nome.innerText = aluno.nome;
      td_matricula.innerText = aluno.matricula;
      td_periodo.innerText = aluno.periodo+"º";
      td_status.innerText = aluno.status;
      
  
      let imgInfo = document.createElement('info');
      imgInfo.innerText = "(+)"
      td_info.appendChild(imgInfo);
      imgInfo.setAttribute("onclick","teste()")
      
      //const newText = aluno.nome + " - " + aluno.matricula +" - " + aluno.periodo + " - " + aluno.status;
      //response.innerHTML = newText;
      //tbody.style.display = "none"
  
    }else{
      alert('CPF do aluno não encontrado')
    }
  }else{
     alert('Insira um CPF no campo')
  }
  
  
  
}
function teste(){
  alert('teste')
}
  btFiltrar.onclick = filtrarAluno;
  exibirlista();


