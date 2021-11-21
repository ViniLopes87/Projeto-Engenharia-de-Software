document.querySelector(".close").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
if (!localStorage.getItem("lista_pendencia") == "") {
    const lista = localStorage.getItem("lista_pendencia").split(",");
    window.alert(
      "Você possui " + lista.length + " Pendências."
    );
  }
  