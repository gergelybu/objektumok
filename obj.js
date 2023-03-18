window.addEventListener("load", init);
const KUTYAK = [
  {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassag: 52,
    neme: "szuka",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "yorkshire terrier",
    lab: 4,
    marmagassag: 20,
    neme: "szuka",
    kor: 13,
  },
];
console.log(KUTYAK);
function init() {
  /** objektum, kulcs - érték párok */
  /*  const DEZI = {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassag: 52,
    neme: "szuka",
    kor: 13,
  };
  //KUTYAK.push(DEZI);
  const KIRA = {
    nev: "Kira",
    fajta: "yorkshire terrier",
    lab: 4,
    marmagassag: 20,
    neme: "szuka",
    kor: 13,
  };*/
  console.log(KUTYAK[0]);
  console.log(KUTYAK[1]);
  KUTYAK[0].nev = "Béla";
  console.log(KUTYAK[0].nev);
  KUTYAK[0].oltas = "van";
  console.log(KUTYAK[0]);
  delete KUTYAK[0].lab;
  console.log(KUTYAK[0]);
  /** Az összes bejárása */
  for (let index = 0; index < KUTYAK.length; index++) {
    console.log(index, ". kutya *******")
    for (const kulcs in KUTYAK[index]) {
      console.log(kulcs, KUTYAK[index][kulcs]);
    }
  }
}
