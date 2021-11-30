var selectNota = document.getElementById("nota");

function adicionarAvaliacao(){
    const tipouser = sessionStorage.getItem("logado").split(",");
    const  aluno = JSON.parse(localStorage.getItem(tipouser[1]));
    const AvaliaInfo = {
        matAluno: aluno.matricula,
        matricula: document.forms["formcad"]["matricula"].value,
        nome: document.forms["formcad"]["nome"].value,
        nota: selectNota.options[selectNota.selectedIndex].value,
        atividade: document.forms["formcad"]["avalia"].value,
        experiencia: document.forms["formcad"]["experiencia"].value,
    };
    const qtd = Math.random() * (1000 - 1) + 1;
    if (!localStorage.getItem("lista_avaliacao") == "") {
        localStorage.setItem("avaliacao:" + qtd, JSON.stringify(AvaliaInfo));
    
        localStorage.setItem(
          "lista_avaliacao",
          localStorage.getItem("lista_avaliacao") + "," + qtd
        );
      } else {
        localStorage.setItem("avaliacao:" + qtd, JSON.stringify(AvaliaInfo));
        localStorage.setItem("lista_avaliacao", qtd);
      }
      alert("Avaliação enviada!");
}

function exibirAvaliacao(){
    result = [];
    const listaavaliacao = document.getElementById("lista");
    const avaliacoes = localStorage.getItem("lista_avaliacao").split(",");
    for(let i = 0; i <avaliacoes.length; i++){
        const avaliacao = JSON.parse(localStorage.getItem("avaliacao:" + avaliacoes[i]));
        result.push(avaliacao);
    }
    listaavaliacao.innerHTML = "";
    result.forEach((result) => {
      if (result != null) {
        const newTr = document.createElement("tr");
        listaavaliacao.appendChild(newTr);
        var newText = "";
        newText = document.createTextNode(result.matricula);
        const newTh1 = document.createElement("th");
        newTh1.appendChild(newText);
        newTr.appendChild(newTh1);
        newText = document.createTextNode(result.nome);
        const newTh2 = document.createElement("th");
        newTh2.appendChild(newText);
        newTr.appendChild(newTh2);
        newText = document.createTextNode(result.nota);
        const newTh3 = document.createElement("th");
        newTh3.appendChild(newText);
        newTr.appendChild(newTh3);
        newText = document.createTextNode(result.atividade);
        const newTh4 = document.createElement("th");
        newTh4.appendChild(newText);
        newTr.appendChild(newTh4);
        newText = document.createTextNode(result.experiencia);
        const newTh5 = document.createElement("th");
        newTh5.appendChild(newText);
        newTr.appendChild(newTh5);
      }
    });
}


