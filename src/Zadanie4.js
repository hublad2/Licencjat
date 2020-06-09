var zad4DOM =
  '<div class="zadanie zadanie4" ;="">' +
  '        <div class="zadanie_hero zadanie4_hero">' +
  "          <h2>Zadanie 4: Kulki w butli</h2>" +
  "        </div>" +
  '        <div class="zadanie_tabela zadanie4_tabela">' +
  "          <table>" +
  "            <tr>" +
  "              <td><b>Planeta</b></td>" +
  "              <td><b>Temperatura powierzchni [K]</b></td>" +
  "              <td><b>Odległość od Słońca [AU]</b></td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Merkury</td>" +
  "              <td>442</td>" +
  "              <td>0,4</td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Wenus</td>" +
  "              <td>737</td>" +
  "              <td>0,7</td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Ziemia</td>" +
  "              <td>288</td>" +
  "              <td>1</td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Mars</td>" +
  "              <td>210</td>" +
  "              <td>1,5</td>" +
  "            </tr>" +
  "          </table>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie4_tresc">' +
  '          <p dir="ltr">' +
  "            <span" +
  "              >Spójrz na załączoną tabelkę i odpowiedz na pytania</span" +
  "            >" +
  "          </p>" +
  "          <p>" +
  "            1. Temperatura powierzchni, pomijając Wenus," +
  "            <span" +
  '              ><label for="Zad411">maleje</label>' +
  '              <input type="checkbox" id="Zad411" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad412">rośnie</label' +
  '              ><input type="checkbox" id="Zad412" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad41"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad41"' +
  "              ></i" +
  "            ></span>" +
  "            wraz ze wzrostem odległości od Słońca." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad41" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  '          <p dir="ltr">' +
  "            <span" +
  "              >2. Wenus to planeta posiadająca gęstą atmosferę składającą się w" +
  "              96% z dwutlenku węgla, który jest gazem" +
  "              cieplarnianym. </span" +
  "            >Korzystając z tej informacji, i prostego diagramu poniżej, wyjaśnij" +
  "            w jaki sposób atmosfera Wenus może powodować wzrost" +
  "            temperatury na planecie." +
  "          </p>" +
  '          <img src="assets/green.png" alt="Schemat" class="img-container">' +
  '          <p dir="ltr">' +
  "            <span" +
  "              >3. Lądujemy na Wenus. Korzystając z wykresu odpowiedz na" +
  "              pytania.</span" +
  "            >" +
  "          </p>" +
  '          <div class="chart-container">' +
  '            <canvas id="myChart"></canvas>' +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              a) Czy gdybyśmy, po wylądowaniu, stanęli na wadze sprężynowej jej" +
  "              wskazania byłyby inne niż na Ziemi?" +
  "            </p>" +
  '            <label for="Zad421" class="two-choices-label">Tak</label>' +
  '            <input type="checkbox" id="Zad421" />' +
  "            /" +
  '            <label for="Zad422">Nie</label>' +
  '            <input type="checkbox" id="Zad422" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive-chekbox"' +
  '              aria-hidden="true"' +
  '              id="green-mark-Zad42"' +
  "            ></i>" +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive-chekbox"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad42"' +
  "            ></i>" +
  "          </div>" +
  '          <p dir="ltr">' +
  "            b) W jakiej odległości od Ziemi musielibyśmy się znaleźć, aby" +
  "            przyspieszenie ziemskie było równe temu z powierzchni Wenus?" +
  "          </p>" +
  '          <label for="Zad423">Wpisz odległość:</label>' +
  '          <input type="number" id="Zad423" class="number-input" />' +
  "          <i" +
  '            class="fas fa-check mark-check-green inactive-chekbox"' +
  '            aria-hidden="true"' +
  '            id="green-mark-Zad43"' +
  "          ></i>" +
  "          <i" +
  '            class="fas fa-times mark-check-red inactive-chekbox"' +
  '            aria-hidden="true"' +
  '            id="red-mark-Zad43"' +
  "          ></i>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad42" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p><span> </span></p>" +
  "          <p><span> </span></p>" +
  "        </div>" +
  "      </div>";

function getHTMLZad4() {
  return zad4DOM;
}

export { getHTMLZad4 };
