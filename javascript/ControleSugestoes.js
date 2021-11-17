var selectIssue = document.getElementById("issue");
var opt = "";

function SendSugestao() {
  const tipouser = sessionStorage.getItem("logado").split(",");
  const InfoGeral = {
    tipo: tipouser[0],
    matricula: document.forms["EnvSugest"]["matricula"].value,
    email: document.forms["EnvSugest"]["email"].value,
    issue: selectIssue.options[selectIssue.selectedIndex].value,
    page: document.forms["EnvSugest"]["page"].value,
    Texp: document.forms["EnvSugest"]["experiencia"].value,
  };
  localStorage.setItem(
    "matricula:" + InfoGeral.matricula,
    JSON.stringify(InfoGeral)
  );
  if (!localStorage.getItem("lista_sugestao") == "") {
    localStorage.setItem(
      "lista_sugestao",
      localStorage.getItem("lista_sugestao") + "," + InfoGeral.matricula
    );
  } else {
    localStorage.setItem("lista_sugestao", InfoGeral.matricula);
  }
  alert("Sugestão enviada!");
}
function ExibeSugestao() {
  const menulista = document.getElementById("lista");
  var i = 0;
  result = [];
  sugestoes = localStorage.getItem("lista_sugestao").split(",");
  for (i; i <= sugestoes.length; i++) {
    sugestoesF = JSON.parse(localStorage.getItem("matricula:" + sugestoes[i]));
    result.push(sugestoesF);
  }
  menulista.innerHTML = "";
  result.forEach((result) => {
    if (result != null) {
      const newLi = document.createElement("li");
      const newText = document.createTextNode(
        result.email +
          " - " +
          formatarMsg(result.issue) +
          " - " +
          formatarMsg(result.page) +
          " - " +
          result.Texp
      );
      newLi.appendChild(newText);
      menulista.appendChild(newLi);
    }
  });
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
