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
    nev: "Doge",
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
  generalas();
  const BEKULD = document.getElementById("bekuld");
  console.log(KUTYALISTA);
  BEKULD.addEventListener("click", bekuldes);
}


function osszeAllit() {
  let txt = "";
  for (let index = 0; index < KUTYALISTA.length; index++) {
    txt += "<div>";
    for (const key in KUTYALISTA[index]) {
      txt += `<p>
                     ${key}: ${KUTYALISTA[index][key]}
                 </p>`;
    }
    txt += "<button class='torles'>Törlés</button></div>";
  }
  return txt;
}

function tablazat() {
  let txt = "<table><tr>";
  for (const key in KUTYALISTA[0]) {
    txt += `<th>${key}</th>`;
  }
  txt += "</tr>";
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
  console.log(i);
  KUTYALISTA.splice(i, 1);
  generalas();
}

function bekuldes() {
  const URLAP = document.getElementById("urlap");
  const NEV = document.getElementById("nev");
  const FAJTA = document.getElementById("fajta");
  const MARMAG = document.getElementById("marmagassag");
  const KAN = document.getElementById("kan");
  const SZUKA = document.getElementById("szuka");
  const KOR = document.getElementById("kor");
  const MAIN = document.querySelector("main");
  const BEVITEL = { nev: "", fajta: "", marmagassag: 0, neme: "", kor: 0 };
  BEVITEL["nev"] = NEV.value;
  BEVITEL["fajta"] = FAJTA.value;
  BEVITEL["marmagassag"] = parseInt(MARMAG.value);
  if (KAN) {
    BEVITEL["neme"] = "kan";
  } else {
    BEVITEL["neme"] = "szuka";
  }
  BEVITEL["kor"] = parseInt(KOR.value);
  KUTYALISTA.push(BEVITEL);
  console.log(KUTYALISTA);
  generalas();
}

function generalas() {
  const ARTICLE = document.querySelector("article");
  const MAIN = document.querySelector("main");
  let txt = osszeAllit();
  ARTICLE.innerHTML = txt;
  txt = tablazat();
  MAIN.innerHTML = txt;
  const GOMB = document.getElementsByClassName("torles");
  console.log(GOMB.length);
  for (let index = 0; index < GOMB.length; index++) {
    GOMB[index].addEventListener("click", function () {
      torles(index);
    });
  }
}
