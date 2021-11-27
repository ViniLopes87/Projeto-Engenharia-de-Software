var selectStatus = document.getElementById("status");

function addEmprego() {
  const tipouser = sessionStorage.getItem("logado").split(",");
  const aluno = JSON.parse(localStorage.getItem(tipouser[1]));
  const HistInfo = {
    nome: document.forms["EnvHist"]["nome"].value,
    cnpj: document.forms["EnvHist"]["cnpj"].value,
    status: selectStatus.options[selectStatus.selectedIndex].value,
    cargo: document.forms["EnvHist"]["cargo"].value,
    atividades: document.forms["EnvHist"]["atividades"].value,
  };
  for (i = 0; i < 10; i++) {
    if (
      localStorage.getItem("historico:" + aluno.matricula + "," + i) == null
    ) {
      localStorage.setItem(
        "historico:" + aluno.matricula + "," + i,
        JSON.stringify(HistInfo)
      );
      break;
    }
  }
  aluno.status = HistInfo.status;
  aluno.historico = HistInfo.nome;
  localStorage.setItem(aluno.cpf, JSON.stringify(aluno));
  window.location.href = "../listaHistorico/index.html";
  alert("Emprego adicionado!");
}
function ExibeEmprego() {
  const menulista = document.getElementById("lista");
  result = [];
  const tipouser = sessionStorage.getItem("logado").split(",");
  const aluno = JSON.parse(localStorage.getItem(tipouser[1]));
  for (i = 10; i >= 0; i--) {
    if (!localStorage.getItem("historico:" + aluno.matricula + "," + i) == "") {
      HistF = JSON.parse(
        localStorage.getItem("historico:" + aluno.matricula + "," + i)
      );
      result.push(HistF);
    }
  }
  menulista.innerHTML = "";
  result.forEach((result) => {
    if (result != null) {
      const newTr = document.createElement("tr");
      menulista.appendChild(newTr);
      var newText = "";
      newText = document.createTextNode(result.nome);
      const newTh1 = document.createElement("th");
      newTh1.appendChild(newText);
      newTr.appendChild(newTh1);
      newText = document.createTextNode(result.cnpj);
      const newTh2 = document.createElement("th");
      newTh2.appendChild(newText);
      newTr.appendChild(newTh2);
      newText = document.createTextNode(formatarMsg(result.cargo));
      const newTh3 = document.createElement("th");
      newTh3.appendChild(newText);
      newTr.appendChild(newTh3);
      newText = document.createTextNode(formatarMsg(result.status));
      const newTh4 = document.createElement("th");
      newTh4.appendChild(newText);
      newTr.appendChild(newTh4);
    }
  });
}
function RemoveEmprego() {
  const tipouser = sessionStorage.getItem("logado").split(",");
  const aluno = JSON.parse(localStorage.getItem(tipouser[1]));
  for (i = 0; i < 10; i++) {
    if (!localStorage.getItem("historico:" + aluno.matricula + "," + i) == "") {
      HistF = JSON.parse(
        localStorage.getItem("historico:" + aluno.matricula + "," + i)
      );
      if (HistF.status != "Finalizado") {
        HistF.status = "Finalizado";
        localStorage.setItem(
          "historico:" + aluno.matricula + "," + i,
          JSON.stringify(HistF)
        );
        aluno.status = HistF.status;
        aluno.historico = "--";
        localStorage.setItem(aluno.cpf, JSON.stringify(aluno));
        break;
      }
    }
  }
  window.location.reload();
  alert("Emprego Finalizado.");
}
function formatarMsg(msg) {
  switch (msg) {
    case "qa":
      return "QA";
    case "frontend":
      return "Front-end";
    case "backend":
      return "Back-end";
    case "fullstack":
      return "Full Stack";
    case "contratado":
      return "Contratado";
    case "estagiando":
      return "Estagiando";
    case "Finalizado":
      return "Finalizado";
  }
}
