window.addEventListener("load", init);

function init() {
  const KUTYALISTA = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
  ];
  const ARTICLE = document.querySelector("article");
  ARTICLE.innerHTML = "<button>kutya</button>";
  const GOMB = document.querySelector("button");
  GOMB.addEventListener("click", function () {
    kutya(KUTYALISTA, ARTICLE);
  });
}


function kutya(LISTA, ARTICLE) {
  ARTICLE.innerHTML += LISTA[2];
}
