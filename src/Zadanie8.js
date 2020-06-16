var zad8DOM =
  '<div class="zadanie zadanie8" ;="">' +
  '        <div class="zadanie_hero zadanie8_hero">' +
  "          <h2>Zadanie 8: Wyporność</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie8_tresc">' +
  "          <p>" +
  "            1. Statki przeważnie buduje się z metalu, znacznie gęstszego od" +
  "            gęstości wody." +
  "          </p>" +
  "          <p>" +
  "            a) Skoro na wodzie unoszą się ciała o gęstości mniejszej od gęstości" +
  "            wody, to w jaki sposób można wytłumaczyć unoszenie się statków na" +
  "            jej powierzchni." +
  "          </p>" +
  "          <p>" +
  "            b) Czy podobnie jak przy statkach na wodzie, da się zbudować maszynę" +
  "            unoszącą się w powietrzu dzięki sile wyporu?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad81" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp81" class="inactive-chekbox">Odpowiedź - a) Mimo, że metale wykorzystywane do budowy statków, mają gęstość większą od gęstości wody, to przez ich kształt obejmują także wiele pustych przestrzeni (wypełnionych powietrzem). Licząc średnią gęstość takiej konstrukcji, okazuje się, że jej gęstość jest mniejsza od gęstości wody. b) Tak, aby to osiągnąć musimy, podobnie jak w przypadku statku, mieć dużo pustych przestrzeni ale tym razem wypełnionych gazem lżejszym od powietrza np. wodorem. Konstrukcje takie to np. sterowce, balony.</p>' +
  "          </div>" +
  "          <p>" +
  "            2. Łodzie podwodne mogą regulować swoje zanurzenie, poprzez" +
  "            wpompowywanie i wypompowywanie wody z kadłuba." +
  "          </p>" +
  "          <p>" +
  "            a) Woda musi być" +
  "            <span" +
  '              ><label for="Zad821">wpompowana</label>' +
  '              <input type="checkbox" id="Zad821" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad822">wypompowana</label' +
  '              ><input type="checkbox" id="Zad822" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad82"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad82"' +
  "              ></i" +
  "            ></span>" +
  "            do/z kadłuba, aby łódź podwodna zmniejszyła zanurzenie." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad82" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "<p>" +
  "3. Czy łódź podwodna może zanurzyć się dowolnie głęboko? Co sprawia, że" +
  " podróże głęboko pod powierzchnię wody mogą być niebezpieczne? (pomijając " +
  "możliwość napotkania towarzystwa)" +
  "</p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad83" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp83" class="inactive-chekbox">Odpowiedź - ciśnienie wewnątrz łodzi podwodnej jest niższe niż na zewnątrz (w wodzie). Różnica ciśnieć pomiędzy wnętrzem łodzi a otoczeniem wzrasta wraz ze zwiększaniem głębokości. Siły wywierane na poszycie wzrastają i jeżeli przekroczą wartości, do których konstukcja jest przystosowana, łódź podwodna zostanie zgnieciona.</p>' +
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

function getHTMLZad8() {
  return zad8DOM;
}

export { getHTMLZad8 };
