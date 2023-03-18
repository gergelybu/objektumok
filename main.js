window.addEventListener("load", init);

const KUTYALISTA = [
  {
    nev: "Dézi",
    fajta: "keverék",
    marmagassag: 52,
    neme: "szuka",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "yorkshire terrier",
    marmagassag: 20,
    neme: "szuka",
    kor: 13,
  },
  {
    nev: "Bobo",
    fajta: "shiba inu",
    marmagassag: 40,
    neme: "kan",
    kor: 5,
  },
  {
    nev: "Kutya",
    fajta: "golden retriever",
    marmagassag: 60,
    neme: "kan",
    kor: 9,
  },
];

function init() {
  const ARTICLE = document.querySelector("article");
  const MAIN = document.querySelector("main");
  console.log(KUTYALISTA);
  let txt = osszeAllit();
  ARTICLE.innerHTML = txt;
  txt = tablazat();
  MAIN.innerHTML = txt;
  const GOMB = document.getElementsByClassName("torles");
  for (let index = 0; index < GOMB.length; index++) {
    GOMB[index].addEventListener("click", function () {
      torles(index);
    });
  }

  /*GOMB.addEventListener("click", function () {
    kutya(KUTYALISTA, ARTICLE);
  })*/
}

/*function kutya(LISTA, ARTICLE) {
  ARTICLE.innerHTML += LISTA[2];
}*/

function osszeAllit() {
  let txt = "";
  for (let index = 0; index < KUTYALISTA.length; index++) {
    txt += "<div>";
    for (const key in KUTYALISTA[index]) {
      txt += `<p>
                     ${key}: ${KUTYALISTA[index][key]}
                 </p>`;
      //console.log(KUTYALISTA[index][key])
    }
    txt += "<button class='torles'>Törlés</button></div>";
  }
  //console.log(txt);
  return txt;
}

function tablazat() {
  let txt = "<table>";
  for (const key in KUTYALISTA[0]) {
    txt += `<th>${key}</th>`;
  }
  for (let index = 0; index < KUTYALISTA.length; index++) {
    txt += "<tr>";
    for (const key in KUTYALISTA[index]) {
      txt += `<td>${KUTYALISTA[index][key]}</td>`;
    }
    txt += "</tr>";
  }
  txt += "</thead>";
  return txt;
}

function torles(i) {
  console.log(KUTYALISTA[i]);
  KUTYALISTA.splice(i);
  console.log(KUTYALISTA[i]);
}
