cont=1;
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
        if(aluno.matricula==sugestoes[i]){
            for(j=0; j<10; j++){
                if(localStorage.getItem("id:" + sugestoes[i]+","+j)){
                    sugestoesF = JSON.parse(localStorage.getItem("id:" + sugestoes[i]+","+j));
                    sugestoesF = {
                      matricula: sugestoesF.matricula,
                      nome: sugestoesF.nome,
                      prazo: sugestoesF.prazo,
                      Texp: sugestoesF.Texp,
                      numero: j
                    }
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
        const newTh3 = document.createElement("th3")
        const newTh4 = document.createElement("th4")
        const text = document.createTextNode(result.Texp);
        const data = document.createTextNode(result.prazo)
        const file = document.createElement("input")
        file.setAttribute("type","file")
        const button = document.createElement("button")
        button.setAttribute(
          "onclick",
          "deletarPendencia(" + result.matricula+","+result.numero+")"
        );
        newTh.appendChild(text);
        newTh2.appendChild(data);
        newTh3.appendChild(file);
        newTh4.appendChild(button);
        newTr.appendChild(newTh);
        newTr.appendChild(newTh2);
        newTr.appendChild(newTh3)
        newTr.appendChild(newTh4)
      }
    });
  }

  function deletarPendencia(matricula, numero) {
    localStorage.removeItem("id:" + matricula+","+numero);
    sugestoes = localStorage.getItem("lista_pendencia").split(",");
    cont = 0;
    for (i = 0; i <= sugestoes.length; i++) {
      if(matricula==sugestoes[i]){
          for(j=0; j<10; j++){
            if(localStorage.getItem("id:" + sugestoes[i]+","+j)){
              cont++
              alert(cont)
            }
          }
      }
    }
    if(cont!=1){
      localStorage.removeItem("lista_pendencia");
      for (j = 0; j <= sugestoes.length; j++) {
        if (sugestoes[j] != matricula && sugestoes[j] != null) {
          if (j === 0) {
            localStorage.setItem("lista_pendencia", sugestoes[j]);
          } else {
            localStorage.setItem(
              "lista_pendencia",
              localStorage.getItem("lista_pendencia") + "," + sugestoes[j]
            );
          }
        }
      }
    }
    window.location.reload();
  }