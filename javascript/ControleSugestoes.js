var selectIssue = document.getElementById("issue");
var opt = "";

function SendSugestao() {
  qtd = Math.random() * (1000 - 1) + 1;
  const InfoGeral = {
    codigo: qtd,
    matricula: document.forms["EnvSugest"]["matricula"].value,
    email: document.forms["EnvSugest"]["email"].value,
    issue: selectIssue.options[selectIssue.selectedIndex].value,
    page: document.forms["EnvSugest"]["page"].value,
    Texp: document.forms["EnvSugest"]["experiencia"].value,
  };
  if (!localStorage.getItem("lista_sugestao") == "") {
    localStorage.setItem("codigo:" + qtd, JSON.stringify(InfoGeral));

    localStorage.setItem(
      "lista_sugestao",
      localStorage.getItem("lista_sugestao") + "," + qtd
    );
  } else {
    localStorage.setItem("codigo:" + qtd, JSON.stringify(InfoGeral));
    localStorage.setItem("lista_sugestao", qtd);
  }
  alert("Sugestão enviada!");
}
function ExibeSugestao() {
  const menulista = document.getElementById("lista");
  var i = 0;
  result = [];
  sugestoes = localStorage.getItem("lista_sugestao").split(",");
  for (i; i <= sugestoes.length; i++) {
    sugestoesF = JSON.parse(localStorage.getItem("codigo:" + sugestoes[i]));
    result.push(sugestoesF);
  }
  menulista.innerHTML = "";
  result.forEach((result) => {
    if (result != null) {
      const newTr = document.createElement("tr");
      menulista.appendChild(newTr);
      for (q = 1; q <= 5; q++) {
        var newText = "";
        const deletar = document.createTextNode("Deletar");
        switch (q) {
          case 1:
            newText = document.createTextNode(result.email);
            const newTh1 = document.createElement("th");
            newTh1.appendChild(newText);
            newTr.appendChild(newTh1);
            break;
          case 2:
            newText = document.createTextNode(formatarMsg(result.issue));
            const newTh2 = document.createElement("th");
            newTh2.appendChild(newText);
            newTr.appendChild(newTh2);
            break;
          case 3:
            newText = document.createTextNode(formatarMsg(result.page));
            const newTh3 = document.createElement("th");
            newTh3.appendChild(newText);
            newTr.appendChild(newTh3);
            break;
          case 4:
            newText = document.createTextNode(result.Texp);
            const newTh4 = document.createElement("th");
            newTh4.appendChild(newText);
            newTr.appendChild(newTh4);
            break;
          case 5:
            newText = document.createElement("button");
            const newTh5 = document.createElement("th");
            newText.setAttribute(
              "onclick",
              "DeletarSugest(" + result.codigo + ")"
            );
            newText.appendChild(deletar);
            newTh5.appendChild(newText);
            newTr.appendChild(newTh5);
        }
      }
    }
  });
}
function DeletarSugest(codigo) {
  localStorage.removeItem("codigo:" + codigo);
  sugestoes = localStorage.getItem("lista_sugestao").split(",");
  localStorage.removeItem("lista_sugestao");
  for (j = 0; j <= sugestoes.length; j++) {
    if (sugestoes[j] != codigo && sugestoes[j] != null) {
      if (j === 0) {
        localStorage.setItem("lista_sugestao", sugestoes[j]);
      } else {
        localStorage.setItem(
          "lista_sugestao",
          localStorage.getItem("lista_sugestao") + "," + sugestoes[j]
        );
      }
    }
  }
  window.location.reload();
}
function formatarMsg(msg) {
  switch (msg) {
    case "bug":
      return "Bug";
    case "sugestao":
      return "Sugestão";
    case "reclamacao":
      return "Reclamação";
    case "duvida":
      return "Dúvida";
    case "visualizar":
      return "Visualizar dados";
    case "sugestao":
      return "Sugestão";
    case "home":
      return "Home do Menu";
    case "avaliacaoEmpresa":
      return "Avaliar Empresa";
    case "avaliacaoEstagiario":
      return "Avaliar Estágiario";
    case "login":
      return "Login";
    case "cadastro":
      return "Cadastro";
  }
}
