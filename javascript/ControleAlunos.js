let cpf = document.getElementById("cpf");
const lista = document.getElementById("lista");//Por o ID da lista que Arthur irá criar na pagina 
var result = [];

function exibirlista(){
alunos = localStorage.getItem("lista_alunos").split(",");
    var i = 0;
    for( ; i<=alunos.length; i++){
        aluno = JSON.parse(localStorage.getItem(alunos[i]));
        result.push(aluno);
    }
     exibirAlunos();
}
function exibirAlunos() {
    lista.innerHTML = "";
    result.forEach(result => {
      const newLi = document.createElement("li");
      const newText = document.createTextNode(result.nome);
      newLi.appendChild(newText);
      lista.appendChild(newLi);
    });
  }
  
function procurarAluno(){
    if(cpf.value == " "){
       alert("Insira algo no campo CPF.")
    }
    else if(cpf.value.length<11||cpf.value.length>11){
            alert("Insira um número de CPF com tamanho valido.")
    }else{
       aluno = JSON.parse(localStorage.getItem(cpf))
       if(aluno==null){
          alert("CPF do aluno não encontrado!");
       }else{
           
       }
}

function selecionarAluno(){
   
}

}
exibirlista();

