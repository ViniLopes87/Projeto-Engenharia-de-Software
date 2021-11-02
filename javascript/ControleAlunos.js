localStorage.getItem("lista_alunos")
alunos = localStorage.getItem("lista_alunos").split(",")
function exibirlista(){
    var i = 1
    var result = []
    for( ; i<=alunos.length; i++){
        aluno = JSON.parse(localStorage.getItem(alunos[i]))
        result.push(aluno)
    }
    return result
}
function procurarAluno(){
    aluno = JSON.parse(localStorage.getItem(""))
    return aluno
}
function selecionarAluno(){
   
}
