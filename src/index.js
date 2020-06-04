import { getHTMLZad1 } from "./Zadanie1";
import { getHTMLZad2 } from "./Zadanie2";
import { appendScripts, removeScripts } from "./scriptAppend";
import { initListenersType1 } from "./InitType1";
import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCD80AF1aUd88KAiC-FfHC0xEj_H2JEvXA",
  authDomain: "zadania-b5048.firebaseapp.com",
  databaseURL: "https://zadania-b5048.firebaseio.com",
  projectId: "zadania-b5048",
  storageBucket: "zadania-b5048.appspot.com",
  messagingSenderId: "126515339750",
  appId: "1:126515339750:web:24a16b746b4595a9823627",
  measurementId: "G-0LVDYJC829",
};

firebase.initializeApp(firebaseConfig);

const container = document.querySelector(".container");
const spisZadan = document.querySelector("#spis-zadan");

let spisZadanDOM =
  '<div class="list-zadania">' +
  "        <ul>" +
  '          <li><button class="list-item-zadanie">Zadanie 1</button></li>' +
  "        <li><button class='list-item-zadanie'>Zadanie 2</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 3</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 4</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 5</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 6</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 7</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 8</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 9</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 10</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 11</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 12</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 13</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 14</button></li>" +
  "          <li><button class='list-item-zadanie'>Zadanie 15</button></li>" +
  "        </ul>" +
  "      </div>";

container.insertAdjacentHTML("beforeend", spisZadanDOM);
initList();

spisZadan.addEventListener("click", () => {
  while (container.hasChildNodes()) container.firstChild.remove();
  removeScripts();
  container.insertAdjacentHTML("beforeend", spisZadanDOM);
  initList();
});

function initList() {
  const zadaniaList = document.querySelectorAll(".list-item-zadanie");

  zadaniaList[0].addEventListener("click", () => {
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad1();
    container.insertAdjacentHTML("beforeend", zadanie);
    initListenersType1(
      "#Zad11",
      "#Zad111",
      "#Zad112",
      "#Zad113",
      "#Zad12",
      "#Odp12"
    );
    appendScripts();
  });

  zadaniaList[1].addEventListener("click", () => {
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad2();
    container.insertAdjacentHTML("beforeend", zadanie);
    initListenersType1(
      "#Zad21",
      "#Zad211",
      "#Zad212",
      "#Zad213",
      "#Zad22",
      "#Odp22"
    );
    appendScripts();
  });
}

initList();
