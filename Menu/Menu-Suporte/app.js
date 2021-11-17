document
  .querySelector(".close")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );
if (!localStorage.getItem("lista_sugestao") == "") {
  const lista = localStorage.getItem("lista_sugestao").split(",");
  window.alert(
    "O suporte possui " + lista.length + " sugestões/reclamações na lista."
  );
}
