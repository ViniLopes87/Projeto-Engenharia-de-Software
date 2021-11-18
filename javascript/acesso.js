const cadastrados_alunos = [];
const cadastrados_professores = [];
const cadastrados_empresas = [];

var cadastrogeral = "";
var select = document.getElementById("status");
var selectTipo = document.getElementById("tipo");
var selectTipoLogin = document.getElementById("tipologin");

function VerificarCadastro() {
  cadastrogeral = {
    nome: document.forms["cadastroG"]["nome"].value,
    cpf: document.forms["cadastroG"]["cpf"].value,
    matricula: document.forms["cadastroG"]["matricula"].value,
    email: document.forms["cadastroG"]["email"].value,
    senha: document.forms["cadastroG"]["senha"].value,
  };
  if (selectTipo.options[selectTipo.selectedIndex].value == "aluno") {
    localStorage.setItem("cadastro", JSON.stringify(cadastrogeral));
    window.location.href = "./Cadastro/Aluno/index.html";
  } else if (
    selectTipo.options[selectTipo.selectedIndex].value == "professor"
  ) {
    const professor = {
      nome: cadastrogeral.nome,
      cpf: cadastrogeral.cpf,
      matricula: cadastrogeral.matricula,
      email: cadastrogeral.email,
      senha: cadastrogeral.senha,
    };
    //Lista de CPF
    if (!localStorage.getItem("lista_professores") == "") {
      cadastrados_alunos.push(localStorage.getItem("lista_professores"));
      localStorage.setItem(
        "lista_professores",
        professor.cpf + "," + localStorage.getItem("lista_professores")
      );
    } else {
      localStorage.setItem("lista_professores", professor.cpf + ",");
    }
    //Lista de Cadastrados
    localStorage.setItem(professor.cpf, JSON.stringify(professor));
    alert("Cadastro concluído!");
  } else {
    const empresa = {
      nome: cadastrogeral.nome,
      cnpj: cadastrogeral.cpf,
      email: cadastrogeral.email,
      matricula: cadastrogeral.matricula,
      senha: cadastrogeral.senha,
    };
    //Lista de CPF
    if (!localStorage.getItem("lista_empresa") == "") {
      cadastrados_alunos.push(localStorage.getItem("lista_empresa"));
      localStorage.setItem(
        "lista_empresa",
        empresa.cnpj + "," + localStorage.getItem("lista_empresa")
      );
    } else {
      localStorage.setItem("lista_empresa", empresa.cnpj + ",");
    }
    //Lista de Cadastrados
    localStorage.setItem(empresa.cnpj, JSON.stringify(empresa));
    alert("Cadastro concluído!");
  }
}

function VerificarCadastroAluno() {
  const cadastrog = localStorage.getItem("cadastro");
  const informs = JSON.parse(cadastrog);
  const aluno = {
    nome: informs.nome,
    cpf: informs.cpf,
    matricula: informs.matricula,
    email: informs.email,
    senha: informs.senha,
    periodo: document.forms["cadastroF"]["periodo"].value,
    curso: document.forms["cadastroF"]["curso"].value,
    historico: document.forms["cadastroF"]["historico"].value,
    status: select.options[select.selectedIndex].value,
    avaliacao: "5",
  };
  //Lista de CPF
  if (!localStorage.getItem("lista_alunos") == "") {
    cadastrados_alunos.push(localStorage.getItem("lista_alunos"));
    localStorage.setItem(
      "lista_alunos",
      aluno.cpf + "," + localStorage.getItem("lista_alunos")
    );
  } else {
    localStorage.setItem("lista_alunos", aluno.cpf + ",");
  }
  //Lista de Cadastrados
  localStorage.setItem(aluno.cpf, JSON.stringify(aluno));
  alert("Cadastro concluído!");
  window.location.href = "../../index.html";
}

function VerificarLogin() {
  const pessoa = JSON.parse(
    localStorage.getItem(document.forms["LoginG"]["cpf"].value)
  );
  if (pessoa == null) {
    if (
      document.forms["LoginG"]["cpf"].value === "admin" &&
      document.forms["LoginG"]["senha"].value === "admin"
    ) {
      window.location.href = "./Menu/Menu-Suporte/index.html";
    } else {
      alert("CPF/CNPJ ou senha incorretos...");
    }
  } else {
    if (
      selectTipoLogin.options[selectTipoLogin.selectedIndex].value ==
        "professor" &&
      pessoa.periodo == null
    ) {
      if (pessoa.senha === document.forms["LoginG"]["senha"].value) {
        alert("Bem-vindo " + pessoa.nome + "!");
        window.location.href = "./Menu/Menu-Professor/index.html";
        sessionStorage.setItem("logado", "professor," + pessoa.cpf);
      } else {
        alert("CPF/CNPJ ou senha incorretos...");
      }
    } else if (
      selectTipoLogin.options[selectTipoLogin.selectedIndex].value == "aluno" &&
      pessoa.periodo != null
    ) {
      if (pessoa.senha === document.forms["LoginG"]["senha"].value) {
        alert("Bem-vindo " + pessoa.nome + "!");
        window.location.href = "./Menu/Menu-Aluno/index.html";
        sessionStorage.setItem("logado", "aluno," + pessoa.cpf);
      } else {
        alert("CPF/CNPJ ou senha incorretos...");
      }
    } else {
      if (
        pessoa.senha === document.forms["LoginG"]["senha"].value &&
        pessoa.cnpj != null
      ) {
        alert("Bem-vindo " + pessoa.nome + "!");
        window.location.href = "./Menu/Menu-Empresa/index.html";
        sessionStorage.setItem("logado", "empresa," + pessoa.cnpj);
      } else {
        alert("CPF/CNPJ ou senha incorretos...");
      }
    }
  }
}
