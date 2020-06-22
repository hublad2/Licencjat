var zad9DOM =
  '<div class="zadanie zadanie9" ;="">' +
  '        <div class="zadanie_hero zadanie9_hero">' +
  "          <h2>Zadanie 9: Piłki</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie9_tresc">' +
  "          <p>Przyjrzyj się zachowaniu piłek na filmie.</p>" +
  '          <figure class="zadanie_film zadanie9_film">' +
  '            <div id="video6" class="embeded"></div>' +
  "          <figcaption>Źródło: <a href='https://www.youtube.com/watch?v=UKbcBKNu4WE' target='_blank'>Simple Physics Demos</a></figcaption>" +
  "          </figure>" +
  "          <p>" +
  "            1. Duża piłka upuszczona razem z małą odbiła się na" +
  "            <span" +
  '              ><label for="Zad911">większą</label>' +
  '              <input type="checkbox" id="Zad911" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad912">mniejszą</label' +
  '              ><input type="checkbox" id="Zad912" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad91"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad91"' +
  "              ></i" +
  "            ></span>" +
  "            wysokość w stosunku do sytuacji, gdy odbijała się sama, upuszczona z takiej samej wysokości." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad91" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. W jaki sposób można wytłumaczyć wzrost wysokości na jaką wznosi" +
  "            się mała piłka?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad92" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp92" class="inactive-chekbox">Duża piłka uderzyła małą, przekazując jej część swojej energii.</p>' +
  "          </div>" +
  '<div class="nav-buttons">' +
  '            <button class="zadanie-button" id="previousButton">' +
  "              Poprzednie zadanie" +
  "            </button>" +
  '            <button class="zadanie-button" id="nextButton">' +
  "              Następne zadanie" +
  "            </button>" +
  "          </div>" +
  "        </div>" +
  "      </div>";

function getHTMLZad9() {
  return zad9DOM;
}

export { getHTMLZad9 };
