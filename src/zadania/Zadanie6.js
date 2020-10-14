var zad6DOM =
  '<div class="zadanie zadanie6" ;="">' +
  '        <div class="zadanie_hero zadanie6_hero">' +
  "          <h2>Zadanie 6: Drgania</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie6_tresc">' +
  "          <p>" +
  "            1. Spójrz na film przedstawiający wiele wahadeł wprawionych w" +
  "            drgania równocześnie." +
  "          </p>" +
  '          <figure class="zadanie_film zadanie6_film">' +
  '            <div id="video2" class="embeded"></div>' +
  "          <figcaption>Źródło: <a href='https://www.youtube.com/watch?v=yVkdfJ9PkRQ' target='_blank'>Pendulum Waves</a></figcaption>" +
  "          </figure>" +
  "          <p>" +
  "            Wahadło z przodu (najbliższe do nas) ma" +
  "            <span" +
  '              ><label for="Zad611">dłuższy</label>' +
  '              <input type="checkbox" id="Zad611" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad612">krótszy</label' +
  '              ><input type="checkbox" id="Zad612" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad61a"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad61a"' +
  "              ></i" +
  "            ></span>" +
  "            okres od tego na końca, ponieważ jest zawieszone na" +
  "            <span" +
  '              ><label for="Zad611">dłuższej</label>' +
  '              <input type="checkbox" id="Zad613" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad612">krótszej</label' +
  '              ><input type="checkbox" id="Zad614" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad61b"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad61b"' +
  "              ></i" +
  "            ></span>" +
  "            nitce." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad61" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Obejrzyj film." +
  "          </p>" +
  '          <figure class="zadanie_film zadanie6_film">' +
  '            <div id="video3" class="embeded"></div>' +
  "          <figcaption>Źródło: <a href='https://www.youtube.com/watch?v=sJG-rXBbmCc' target='_blank'>For the Love of Physics - Walter Lewin - May 16, 2011</a></figcaption>" +
  "          </figure>" +
  "          <p>" +
  "            a) Wyjaśnij, dlaczego wahadło nie uderzyło nauczyciela." +
  "          </p>" +
  "          <p>" +
  "            b) Co musiałby zrobić nauczyciela, żeby wahadło go dotknęło, mimo że stał w tym samym miejscu." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad62" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp62" class="inactive-chekbox">a) Wahadło puszczone w ten sposób bez prędkości początkowej ma maksymalną energię potencjalną w miejscu puszczania, dlatego po pełnym cyklu, jeżeli nie ma strat energii, powinno wrócić w dokładnie to samo miejsce. <br></br> b) Nauczyciel powinien popchnąć wahadło. Gdyby nauczyciel popchnął wahadło podczas puszczania go, wahadło miałoby zarówno energię potencjalną grawitacji w tym miejscu jak i energię kinetyczną dzięki popchnięciu. Podczas powrotu do nauczyciela cała energia zamieniłaby się w energię potencjalną, czyli wahadło musiałoby wznieść się na wysokość wyższą, niż ta z której było puszczone.</p>' +
  "          </div>" +
  "          <p>3. Obejrzyj film.</p>" +
  '          <figure class="zadanie_film zadanie6_film">' +
  '            <div id="video4" class="embeded"></div>' +
  "          <figcaption>Źródło: <a href='https://www.youtube.com/watch?v=FwraiTcshVU' target='_blank'>physics demonstrations Sound longitunal wave (science experiments)</a></figcaption>" +
  "          </figure>" +
  "          <p>" +
  "            Dlaczego płomień porusza się przy głośniku?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad63" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp63" class="inactive-chekbox">Głośnik powoduje okresowe ruchy powietrza do przodu i do tyłu. Płomień porusza się w rytmie tych zmian.</p>' +
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

function getHTMLZad6() {
  return zad6DOM;
}

export { getHTMLZad6 };
