const cabecalho = document.querySelector("header");
const links = document.querySelectorAll("a");
const itensScroll = document.querySelectorAll(".js-scroll");
const botoesJogos = document.querySelectorAll(".js-button");
const faq = document.querySelector("#faq");
const faqH2 = document.querySelectorAll("#faq h2");
const setaBotao = document.querySelector("#seta");
const botaoMenu = document.querySelector("#menuBotao");
let textoJogo = document.querySelector(".js-text");
let imgJogo = document.querySelector(".js-img");

function scrollSessoes(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  section.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
  cabecalho.querySelector("ul").classList.remove("expandir");
  botaoMenu.classList.remove("ativo");
}

faqH2[0].classList.add("ativo");
faqH2[0].nextElementSibling.classList.add("ativo");

function setarjogos(event) {
  let sessaoLancamento = document.querySelector("#lancamento");
  if (event.currentTarget === botoesJogos[0]) {
    sessaoLancamento.classList.add("gow");
    sessaoLancamento.classList.remove("gta");
    sessaoLancamento.classList.remove("unc");
    textoJogo.innerHTML =
      " Embarque com Kratos e Atreus <br> numa jornada no mundo nórdico!";
    imgJogo.src = "img/logoGow.png";
    imgJogo.setAttribute("width", "600px");
  } else if (event.currentTarget === botoesJogos[1]) {
    sessaoLancamento.classList.remove("gow");
    sessaoLancamento.classList.remove("unc");
    sessaoLancamento.classList.add("gta");
    textoJogo.innerHTML =
      "Entre na pele de Michael, Franklin e Trevor  <br> na vida de ladrões de bancos!";
    imgJogo.src = "img/logoGta.png";
    imgJogo.setAttribute("width", "300px");
  } else if (event.currentTarget === botoesJogos[2]) {
    sessaoLancamento.classList.remove("gow");
    sessaoLancamento.classList.remove("gta");
    sessaoLancamento.classList.add("unc");
    textoJogo.innerHTML =
      "Encare as aventuras de um explorador de tesouros <br> chamado Nathan Drake!";
    imgJogo.src = "img/logoUnc.png";
    imgJogo.setAttribute("width", "600px");
  } else {
  }
}

function esconderMenu() {
  if (window.scrollY > 600) {
    cabecalho.classList.add("ativo");
    setaBotao.classList.add("ativo");
  } else {
    cabecalho.classList.remove("ativo");
    setaBotao.classList.remove("ativo");
  }
}

function expandirMenu() {
  cabecalho.classList.toggle("ativo");
}

function exibirSessoes() {
  if (itensScroll.length) {
    itensScroll.forEach((item) => {
      const windowMetade = Math.round(window.innerHeight * 0.8);
      const sectionTop = item.getBoundingClientRect().top;
      let isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) item.classList.add("ativo");
      else item.classList.remove("ativo");
    });
  }
}

function mostrarTexto(event) {
  let evento = event.currentTarget;
  evento.classList.toggle("ativo");
  evento.nextElementSibling.classList.toggle("ativo");
}

function mostrarMenu() {
  cabecalho.querySelector("ul").classList.toggle("expandir");
  botaoMenu.classList.toggle("ativo");
}

window.addEventListener("scroll", esconderMenu);
window.addEventListener("scroll", exibirSessoes);
setaBotao.addEventListener("click", expandirMenu);
botaoMenu.addEventListener("click", mostrarMenu);
links.forEach((link) => {
  link.addEventListener("click", scrollSessoes);
});
botoesJogos.forEach((botao) => {
  botao.addEventListener("click", setarjogos);
});
faqH2.forEach((h2) => {
  h2.addEventListener("click", mostrarTexto);
});
