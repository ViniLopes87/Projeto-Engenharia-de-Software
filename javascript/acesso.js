const cadastrados_alunos= [];
const cadastrados_professores =[];
const cadastrados_empresas =[];

var cadastrogeral = "";
var select = document.getElementById('status');
var selectTipo = document.getElementById('tipo');

function VerificarCadastro(){
    cadastrogeral = {
        nome:document.forms["cadastroG"]["nome"].value,
        cpf:document.forms["cadastroG"]["cpf"].value,
        matricula:document.forms["cadastroG"]["matricula"].value,
        email:document.forms["cadastroG"]["email"].value,
        senha:document.forms["cadastroG"]["senha"].value,
    }
    if(selectTipo.options[selectTipo.selectedIndex].value == "aluno"){
        window.location.href = "../Cadastro/Aluno/index.html"
    }
    else if(selectTipo.options[selectTipo.selectedIndex].value == "professor"){
        const professor = {
            nome:cadastrogeral.nome,
            cpf:cadastrogeral.cpf,
            matricula:cadastrogeral.matricula,
            email:cadastrogeral.email,
            senha:cadastrogeral.senha
        };
        cadastrados_professores.push(professor);
    }
    else{

    }
}

function VerificarCadastroAluno(){
    alert(cadastrogeral.nome);
    const aluno = {
        nome:cadastrogeral.nome,
        cpf:cadastrogeral.cpf,
        matricula:cadastrogeral.matricula,
        email:cadastrogeral.email,
        senha:cadastrogeral.senha,
        periodo:document.forms["cadastroF"]["periodo"].value,
        curso:document.forms["cadastroF"]["curso"].value,
        historico:document.forms["cadastroF"]["historico"].value,
        status:select.options[select.selectedIndex].value
    };
    cadastrados_alunos.push(aluno);
}

