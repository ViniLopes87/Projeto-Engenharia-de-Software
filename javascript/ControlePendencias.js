cont=1;
console.log("inicial"+cont)
function sendPendencia() {
    qtd = Math.random() * (1000 - 1) + 1;
    const InfoGeral = {
      matricula: document.forms["EnvPendencia"]["matricula"].value,
      nome: document.forms["EnvPendencia"]["nome"].value,
      prazo: document.forms["EnvPendencia"]["prazo"].value,
      Texp: document.forms["EnvPendencia"]["pendencia"].value,
    };
    for(i=0; i<10; i++){
        if(localStorage.getItem("id:" + InfoGeral.matricula+","+i)){
            cont=i+1
            break;
        }
    }
    if (!localStorage.getItem("lista_pendencia") == "") {
      localStorage.setItem("id:" + InfoGeral.matricula+","+cont, JSON.stringify(InfoGeral));
        
      if(cont === 1){
        localStorage.setItem(
            "lista_pendencia",
            localStorage.getItem("lista_pendencia") + "," + InfoGeral.matricula
          );
      }
    } else {
        console.log("um"+cont)
      localStorage.setItem("id:" + InfoGeral.matricula+","+cont, JSON.stringify(InfoGeral));
      localStorage.setItem("lista_pendencia", InfoGeral.matricula);
    }
    alert("Pendência enviada!");
}

//evita a página recarregar ao apertar em "Enviar"
var form = document.getElementById("EnvPendencia");
function handleForm(event) {
  event.preventDefault();
}   

function exibePendencia() {
    const menulista = document.getElementById("lista");
    const tipouser = sessionStorage.getItem("logado").split(",");
    aluno = JSON.parse(localStorage.getItem(tipouser[1]));
    var i = 0;
    result = [];
    sugestoes = localStorage.getItem("lista_pendencia").split(",");
    for (i; i <= sugestoes.length; i++) {
        console.log(aluno.matricula)
        if(aluno.matricula==sugestoes[i]){
            for(j=0; j<10; j++){
                if(localStorage.getItem("id:" + sugestoes[i]+","+j)){
                    sugestoesF = JSON.parse(localStorage.getItem("id:" + sugestoes[i]+","+j));
                    result.push(sugestoesF);
                }
            }
        }
    }
    menulista.innerHTML = "";
    result.forEach((result) => {
      if (result != null) {
        const newTr = document.createElement("tr");
        menulista.appendChild(newTr);
        const newTh = document.createElement("th");
        const newTh2 = document.createElement("th2");
        const text = document.createTextNode(result.Texp);
        const data = document.createTextNode(result.prazo)
        newTh.appendChild(text);
        newTh2.appendChild(data);
        newTr.appendChild(newTh);
        newTr.appendChild(newTh2);
      }
    });
  }