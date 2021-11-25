function MeusDados() {
  const tipouser = sessionStorage.getItem("logado").split(",");
  const aluno = JSON.parse(localStorage.getItem(tipouser[1]));

  let tbody4 = document.getElementById("tbody4");

  let tr = tbody4.insertRow();

  let td_nome = tr.insertCell();
  let td_matricula = tr.insertCell();
  let td_periodo = tr.insertCell();
  let td_status = tr.insertCell();
  let td_cpf = tr.insertCell();
  let td_email = tr.insertCell();
  let td_curso = tr.insertCell();
  let td_historico = tr.insertCell();
  let td_avaliacao = tr.insertCell();

  td_nome.innerText = aluno.nome;
  td_matricula.innerText = aluno.matricula;
  td_periodo.innerText = aluno.periodo + "º";
  td_status.innerText = VefStatus(aluno.status);
  td_cpf.innerText = aluno.cpf;
  td_email.innerText = aluno.email;
  td_curso.innerText = aluno.curso;
  td_historico.innerText = aluno.historico;
  td_avaliacao.innerText = aluno.avaliacao;
}
function VefStatus(status) {
  if (status == "Finalizado") {
    return "Desempregado";
  } else {
    return status;
  }
}
MeusDados();
