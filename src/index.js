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
import { getHTMLZad11 } from "./Zadanie11";
import { getHTMLZad12 } from "./Zadanie12";
import { getHTMLZad13 } from "./Zadanie13";
import { appendScripts, removeScripts } from "./scriptAppend";
import {
  initListenersType1,
  initOnlyOpenAnswers,
  InitChooseTwo,
  InitCheckValue,
  InitChooseOneFromThree,
  InitMultipleAnserwsFromThree,
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
let currentProblem = 0;

let spisZadanDOM =
  '<div class="list-zadania">' +
  "        <ul>" +
  '          <li><button class="list-item-zadanie">Kulki w butli</button></li>' +
  "        <li><button class='list-item-zadanie'>Pociąg</button></li>" +
  "          <li><button class='list-item-zadanie'>Słońce</button></li>" +
  "          <li><button class='list-item-zadanie'>Wenus - atmosfera</button></li>" +
  "          <li><button class='list-item-zadanie'>Samochód na orbicie</button></li>" +
  "          <li><button class='list-item-zadanie'>Drgania</button></li>" +
  "          <li><button class='list-item-zadanie'>Kulki w butli</button></li>" +
  "          <li><button class='list-item-zadanie'>Wyporność</button></li>" +
  "          <li><button class='list-item-zadanie'>Piłki</button></li>" +
  "          <li><button class='list-item-zadanie'>Magnesy</button></li>" +
  "          <li><button class='list-item-zadanie'>Światło</button></li>" +
  "          <li><button class='list-item-zadanie'>Gwiazdy</button></li>" +
  "          <li><button class='list-item-zadanie'>Lodówka</button></li>" +
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
    initProblem(1);
  });

  zadaniaList[1].addEventListener("click", () => {
    initProblem(2);
  });

  zadaniaList[2].addEventListener("click", () => {
    initProblem(3);
  });

  zadaniaList[3].addEventListener("click", () => {
    initProblem(4);
  });

  zadaniaList[4].addEventListener("click", () => {
    initProblem(5);
  });

  zadaniaList[5].addEventListener("click", () => {
    initProblem(6);
  });

  zadaniaList[6].addEventListener("click", () => {
    initProblem(7);
  });

  zadaniaList[7].addEventListener("click", () => {
    initProblem(8);
  });

  zadaniaList[8].addEventListener("click", () => {
    initProblem(9);
  });

  zadaniaList[9].addEventListener("click", () => {
    initProblem(10);
  });

  zadaniaList[10].addEventListener("click", () => {
    initProblem(11);
  });

  zadaniaList[11].addEventListener("click", () => {
    initProblem(12);
  });

  zadaniaList[12].addEventListener("click", () => {
    initProblem(13);
  });
}

function initProblem(problemId) {
  switch (problemId) {
    case 1:
      currentProblem = 1;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad1());
      initNextButton();
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
      break;

    case 2:
      currentProblem = 2;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad2());
      const Zad22 = document.querySelector("#Zad22");
      const Odp22 = document.querySelector("#Odp22");
      initOnlyOpenAnswers([Zad22], [Odp22]);
      initPreviousButton();
      initNextButton();
      InitChooseOneFromThree(
        "#Zad211",
        "#Zad212",
        "#Zad213",
        "#Zad21",
        "#red-mark-Zad213",
        "#red-mark-Zad211",
        "#green-mark-Zad212",
        true
      );
      appendScripts();
      break;

    case 3:
      currentProblem = 3;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad3());
      initPreviousButton();
      initNextButton();
      const Zad31 = document.querySelector("#Zad31");
      const Zad32 = document.querySelector("#Zad32");
      const Odp31 = document.querySelector("#Odp31");
      const Odp32 = document.querySelector("#Odp32");
      initOnlyOpenAnswers([Zad31, Zad32], [Odp31, Odp32]);
      appendScripts();
      break;

    case 4:
      currentProblem = 4;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad4());
      initPreviousButton();
      initNextButton();
      InitChart();
      const Zad42 = document.querySelector("#Zad42");
      const Odp42 = document.querySelector("#Odp42");
      initOnlyOpenAnswers([Zad42], [Odp42]);
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
      break;

    case 5:
      currentProblem = 5;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad5());
      initPreviousButton();
      initNextButton();
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
      break;

    case 6:
      currentProblem = 6;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad6());
      initPreviousButton();
      initNextButton();
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
      onYouTubePlayerAPIReady("yVkdfJ9PkRQ", 25, 97, "video2");
      onYouTubePlayerAPIReady("sJG-rXBbmCc", 1613, 1624, "video3");
      onYouTubePlayerAPIReady("FwraiTcshVU", 9, 26, "video4");
      appendScripts();
      break;

    case 7:
      currentProblem = 7;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad7());
      initPreviousButton();
      initNextButton();
      onYouTubePlayerAPIReady("1Xp_imnO6WE", 1, 21, "video5");
      appendScripts();
      break;

    case 8:
      currentProblem = 8;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad8());
      initPreviousButton();
      initNextButton();
      const Zad81 = document.querySelector("#Zad81");
      const Odp81 = document.querySelector("#Odp81");
      const Zad83 = document.querySelector("#Zad83");
      const Odp83 = document.querySelector("#Odp83");
      initOnlyOpenAnswers([Zad81, Zad83], [Odp81, Odp83]);
      InitChooseTwo(
        "#Zad822",
        "#Zad821",
        "#Zad82",
        "#green-mark-Zad82",
        "#red-mark-Zad82",
        false
      );
      appendScripts();
      break;

    case 9:
      currentProblem = 9;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad9());
      initPreviousButton();
      initNextButton();
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
      onYouTubePlayerAPIReady("UKbcBKNu4WE", 105, 124, "video6");
      appendScripts();
      break;

    case 10:
      currentProblem = 10;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad10());
      initPreviousButton();
      initNextButton();
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
      onYouTubePlayerAPIReady("_yEu2R1gYSs", 160, 223, "video7");
      appendScripts();
      break;

    case 11:
      currentProblem = 11;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad11());
      initPreviousButton();
      initNextButton();
      const Zad111 = document.querySelector("#Zad111");
      const Odp111 = document.querySelector("#Odp111");
      const Zad112 = document.querySelector("#Zad112");
      const Odp112 = document.querySelector("#Odp112");
      initOnlyOpenAnswers([Zad111, Zad112], [Odp111, Odp112]);
      appendScripts();
      break;

    case 12:
      currentProblem = 12;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad12());
      initPreviousButton();
      initNextButton();
      const Zad122 = document.querySelector("#Zad122");
      const Odp122 = document.querySelector("#Odp122");
      initOnlyOpenAnswers([Zad122], [Odp122]);
      InitChooseOneFromThree(
        "#Zad1211",
        "#Zad1213",
        "#Zad1212",
        "#Zad121",
        "#green-mark-Zad1212",
        "#red-mark-Zad1211",
        "#red-mark-Zad1213",
        true
      );
      appendScripts();
      break;

    case 13:
      currentProblem = 13;
      spisZadanActive = false;
      while (container.hasChildNodes()) container.firstChild.remove();
      container.insertAdjacentHTML("beforeend", getHTMLZad13());
      initPreviousButton();
      initNextButton();
      const Zad132 = document.querySelector("#Zad132");
      const Odp132 = document.querySelector("#Odp132");
      InitMultipleAnserwsFromThree(
        "#Zad131",
        "#Zad1311",
        "#Zad1312",
        "#Zad1313"
      );
      initOnlyOpenAnswers([Zad132], [Odp132]);
      InitChooseOneFromThree(
        "#Zad1331",
        "#Zad1332",
        "#Zad1333",
        "#Zad133",
        "#green-mark-Zad1333",
        "#red-mark-Zad1331",
        "#red-mark-Zad1332",
        true
      );
      appendScripts();
      break;
  }
}

function initPreviousButton() {
  const previousButton = document.querySelector("#previousButton");

  previousButton.addEventListener("click", () => {
    initProblem(currentProblem - 1);
  });
}

function initNextButton() {
  const nextButton = document.querySelector("#nextButton");

  nextButton.addEventListener("click", () => {
    initProblem(currentProblem + 1);
  });
}

initList();
