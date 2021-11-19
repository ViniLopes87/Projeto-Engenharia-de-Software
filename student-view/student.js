 //export function AlunoSelecionado() {};
 //import {AlunoSelecionado} from 'data-student.js';
 result = []
 const filter = document.getElementById('filtrar')
 const btFiltrar = document.getElementById("btFiltrar")

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
      imgInfo.innerText = "(+)";
      imgInfo.setAttribute("onclick","ExibirDados("+result[i].cpf+")");
      td_info.appendChild(imgInfo);
      
  } 

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
      imgInfo.innerText = "(+)";
      imgInfo.setAttribute("onclick","ExibirDados("+ aluno.cpf +")");
      td_info.appendChild(imgInfo);
  
    }else{
      alert('CPF do aluno não encontrado')
    }
  }else{
     alert('Insira um CPF no campo')
  }
}

function ExibirDados(Cpf){
  divtb = document.getElementById('divtb');
  aluno = JSON.parse(localStorage.getItem(Cpf));
  if(aluno!=null){
    divtb.style.width = "55rem"
    divtb.style.left = "20%"
    tb1 = document.getElementById('tb1');
    tb2 = document.getElementById('tb2');
    tbody3 = document.getElementById('tbody3');
    tbody3.innerText = "";
    tb1.style.display = 'none';
    tb2.style.display = 'block';
    
    let tr = tbody3.insertRow();
  
    let td_nome = tr.insertCell();
    let td_matricula = tr.insertCell();
    let td_periodo = tr.insertCell();
    let td_status = tr.insertCell();
    let td_cpf = tr.insertCell();
    let td_email = tr.insertCell();
    let td_curso = tr.insertCell();
    let td_historico = tr.insertCell();
    let td_avaliacao = tr.insertCell();
    let td_voltainfo = tr.insertCell();
  
    td_nome.innerText = aluno.nome;
    td_matricula.innerText = aluno.matricula;
    td_periodo.innerText = aluno.periodo+"º";
    td_status.innerText = aluno.status;
    td_cpf.innerText = aluno.cpf;
    td_email.innerText = aluno.email;
    td_curso.innerText = aluno.curso;
    td_historico.innerText = aluno.historico;
    td_avaliacao.innerText = aluno.avaliacao;
  
    let imgInfo = document.createElement('info');
    imgInfo.innerText = "(-)";
    imgInfo.setAttribute("onclick","voltar()");
    td_voltainfo.appendChild(imgInfo); 
  }else{
    alert('erro');
  }
}
function voltar(){
  tb1 = document.getElementById('tb1');
  tb2 = document.getElementById('tb2');
  divtb = document.getElementById('divtb');
  divtb.style.width = "30rem"
  divtb.style.left = "40%"
  tb1.style.display = 'block';
  tb2.style.display = 'none';
}

btFiltrar.onclick = filtrarAluno;
exibirlista();


