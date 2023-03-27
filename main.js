import { KUTYAKULCS, KUTYALISTA } from "./lista.js";

window.addEventListener("load", init);

let SORREND = 0;

function init() {
  generalas();
  const BEKULD = document.getElementById("bekuld");
  console.log(KUTYALISTA);
  BEKULD.addEventListener("click", bekuldes);
}

function osszeAllit() {
  let txt = "";
  for (let index = 0; index < KUTYALISTA.length; index++) {
    txt += `<div class="kartyak"><div class="features" id=${index}><ul>`;
    for (const key in KUTYALISTA[index]) {
      txt += `<li><p>
                     ${key}: ${KUTYALISTA[index][key]}
                 </p></li>`;
    }
    txt += "</ul></div><button class='torles'>Törlés</button></div>";
  }
  return txt;
}

function tablazat() {
  let txt = "<div class='tablazat'><table><tr class='fejlec'>";
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
  txt += "</thead></table></div>";
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
  const KOR = document.getElementById("kor");
  const MAIN = document.querySelector("main");
  const BEVITEL = { nev: "", fajta: "", marmagassag: 0, neme: "", kor: 0 };
  BEVITEL["nev"] = NEV.value;
  BEVITEL["fajta"] = FAJTA.value;
  BEVITEL["marmagassag"] = parseInt(MARMAG.value);
  if (KAN.checked) {
    BEVITEL["neme"] = "kan";
  } else {
    BEVITEL["neme"] = "szuka";
  }
  BEVITEL["kor"] = parseInt(KOR.value);
  KUTYALISTA.push(BEVITEL);
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
  const FEJLEC = document.querySelectorAll("th");
  console.log(FEJLEC);
  for (let index = 0; index < FEJLEC.length; index++) {
    FEJLEC[index].addEventListener("click", function () {
      if (SORREND % 2 == 0) {
        rendezBarmiSzerint(KUTYALISTA, `${FEJLEC[index].innerHTML}`, 1);
      }else{
        rendezBarmiSzerint(KUTYALISTA, `${FEJLEC[index].innerHTML}`, -1);
      }
      SORREND+=1;
    });
  }
  return SORREND
}

function rendezBarmiSzerint(lista, kulcs, irany) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek *= irany;
    return ertek;
  });
  console.log(lista);
  generalas();
}
