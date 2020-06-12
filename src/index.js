import { getHTMLZad1 } from "./Zadanie1";
import { getHTMLZad2 } from "./Zadanie2";
import { getHTMLZad3 } from "./Zadanie3";
import { getHTMLZad4 } from "./Zadanie4";
import { getHTMLZad5 } from "./Zadanie5";
import { getHTMLZad6 } from "./Zadanie6";
import { getHTMLZad7 } from "./Zadanie7";
import { getHTMLZad8 } from "./Zadanie8";
import { getHTMLZad9 } from "./Zadanie9";
import { getHTMLZad10 } from "./Zadanie10";
import { appendScripts, removeScripts } from "./scriptAppend";
import {
  initListenersType1,
  initOnlyOpenAnswers,
  InitChooseTwo,
  InitCheckValue,
  InitChooseOneFromThree,
} from "./InitType1";
import { onYouTubePlayerAPIReady } from "./videoNew";
import { InitChart } from "./charts";
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

let spisZadanActive = true;

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
  if (!spisZadanActive) {
    spisZadanActive = true;
    while (container.hasChildNodes()) container.firstChild.remove();
    removeScripts();
    container.insertAdjacentHTML("beforeend", spisZadanDOM);
    initList();
  }
});

function initList() {
  const zadaniaList = document.querySelectorAll(".list-item-zadanie");

  zadaniaList[0].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad1();
    container.insertAdjacentHTML("beforeend", zadanie);
    onYouTubePlayerAPIReady("p5m4TCN5upQ", 1, 21, "video1");
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
    spisZadanActive = false;
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

  zadaniaList[2].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad3();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad31 = document.querySelector("#Zad31");
    const Zad32 = document.querySelector("#Zad32");
    const Odp31 = document.querySelector("#Odp31");
    const Odp32 = document.querySelector("#Odp32");
    initOnlyOpenAnswers([Zad31, Zad32], [Odp31, Odp32]);
    appendScripts();
  });

  zadaniaList[3].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad4();
    container.insertAdjacentHTML("beforeend", zadanie);
    InitChart();
    InitChooseTwo(
      "#Zad411",
      "#Zad412",
      "#Zad41",
      "#green-mark-Zad41",
      "#red-mark-Zad41",
      false
    );
    InitChooseTwo(
      "#Zad421",
      "#Zad422",
      "#Zad42",
      "#green-mark-Zad42",
      "#red-mark-Zad42",
      false
    );
    InitCheckValue(
      "#Zad42",
      "#Zad423",
      100,
      700,
      "#green-mark-Zad43",
      "#red-mark-Zad43",
      false
    );
    appendScripts();
  });

  zadaniaList[4].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad5();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad51 = document.querySelector("#Zad51");
    const Zad53 = document.querySelector("#Zad53");
    const Odp51 = document.querySelector("#Odp51");
    const Odp53 = document.querySelector("#Odp53");
    initOnlyOpenAnswers([Zad51, Zad53], [Odp51, Odp53]);
    InitChooseOneFromThree(
      "#Zad521",
      "#Zad522",
      "#Zad523",
      "#Zad52",
      "#green-mark-Zad523",
      "#red-mark-Zad521",
      "#red-mark-Zad522",
      true
    );
    appendScripts();
  });

  zadaniaList[5].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad6();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad62 = document.querySelector("#Zad62");
    const Zad63 = document.querySelector("#Zad63");
    const Odp62 = document.querySelector("#Odp62");
    const Odp63 = document.querySelector("#Odp63");
    initOnlyOpenAnswers([Zad62, Zad63], [Odp62, Odp63]);
    InitChooseTwo(
      "#Zad611",
      "#Zad612",
      "#Zad61",
      "#green-mark-Zad61a",
      "#red-mark-Zad61a",
      false
    );
    InitChooseTwo(
      "#Zad613",
      "#Zad614",
      "#Zad61",
      "#green-mark-Zad61b",
      "#red-mark-Zad61b",
      false
    );
    onYouTubePlayerAPIReady("yVkdfJ9PkRQ", 1, 21, "video2");
    onYouTubePlayerAPIReady("xXXF2C-vrQE", 1, 21, "video3");
    onYouTubePlayerAPIReady("FwraiTcshVU", 1, 21, "video4");
    appendScripts();
  });

  zadaniaList[6].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad7();
    container.insertAdjacentHTML("beforeend", zadanie);
    onYouTubePlayerAPIReady("1Xp_imnO6WE", 1, 21, "video5");
    appendScripts();
  });

  zadaniaList[7].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad8();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad81 = document.querySelector("#Zad81");
    const Odp81 = document.querySelector("#Odp81");
    initOnlyOpenAnswers([Zad81], [Odp81]);
    InitChooseTwo(
      "#Zad822",
      "#Zad821",
      "#Zad82",
      "#green-mark-Zad82",
      "#red-mark-Zad82",
      false
    );
    appendScripts();
  });

  zadaniaList[8].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad9();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad92 = document.querySelector("#Zad92");
    const Odp92 = document.querySelector("#Odp92");
    initOnlyOpenAnswers([Zad92], [Odp92]);
    InitChooseTwo(
      "#Zad912",
      "#Zad911",
      "#Zad91",
      "#green-mark-Zad91",
      "#red-mark-Zad91",
      false
    );
    onYouTubePlayerAPIReady("UKbcBKNu4WE", 1, 21, "video6");
    appendScripts();
  });

  zadaniaList[9].addEventListener("click", () => {
    spisZadanActive = false;
    while (container.hasChildNodes()) container.firstChild.remove();
    let zadanie = getHTMLZad10();
    container.insertAdjacentHTML("beforeend", zadanie);
    const Zad101 = document.querySelector("#Zad101");
    const Odp101 = document.querySelector("#Odp101");
    const Zad103 = document.querySelector("#Zad103");
    const Odp103 = document.querySelector("#Odp103");
    initOnlyOpenAnswers([Zad101, Zad103], [Odp101, Odp103]);
    InitChooseTwo(
      "#Zad1021",
      "#Zad1022",
      "#Zad102",
      "#green-mark-Zad102",
      "#red-mark-Zad102",
      false
    );
    onYouTubePlayerAPIReady("_yEu2R1gYSs", 1, 21, "video7");
    appendScripts();
  });
}

initList();
