var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

//evita a página recarregar ao apertar em "Enviar"
var form = document.getElementById("cadastroform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);