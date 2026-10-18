// Abre e fecha as dúvidas frequentes
document.querySelectorAll(".duvida-botao").forEach(function (botao) {
  botao.addEventListener("click", function () {
    var item = botao.parentElement;
    var aberta = item.classList.toggle("aberta");
    botao.setAttribute("aria-expanded", aberta);
    botao.querySelector("span").textContent = aberta ? "−" : "+";
  });
});
