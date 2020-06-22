var zad14DOM =
  '<div class="zadanie zadanie14" ;="">' +
  '  <div class="zadanie_hero zadanie14_hero">' +
  "    <h2>Zadanie 14: Powietrze</h2>" +
  "  </div>" +
  '  <div class="zadanie_tresc zadanie14_tresc">' +
  "    <p>" +
  "      Spójrz na wykres zależności gęstości powietrza od" +
  "      wysokości nad poziomem morza." +
  "    </p>" +
  '    <div class="chart-container">' +
  '      <canvas id="myChart"></canvas>' +
  "    </div>" +
  "    <p>" +
  "      1. Co można odczytać z przedstawionego wykresu?" +
  "    </p>" +
  '    <div class="zadanie1_odp">' +
  "      <p>a) Gęstość powietrza rośnie wraz ze wzrostem wysokości n.p.m.</p>" +
  '      <input type="checkbox" id="Zad1411" />' +
  "      <i" +
  '        class="fas fa-times mark-check-red inactive"' +
  '        aria-hidden="true"' +
  '        id="red-mark-Zad1411"' +
  "      ></i>" +
  "    </div>" +
  '    <div class="zadanie1_odp">' +
  "      <p>b) Gęstość powietrza maleje wraz ze wzrostem wysokości n.p.m.</p>" +
  '      <input type="checkbox" id="Zad1412" />' +
  "      <i" +
  '        class="fas fa-check mark-check-green inactive"' +
  '        aria-hidden="true"' +
  '        id="green-mark-Zad1412"' +
  "      ></i>" +
  "    </div>" +
  '    <div class="zadanie1_odp">' +
  "      <p>c) Gęstość powietrza nie zależy od wysokości n.p.m.</p>" +
  '      <input type="checkbox" id="Zad1413" />' +
  "      <i" +
  '        class="fas fa-times mark-check-red inactive"' +
  '        aria-hidden="true"' +
  '        id="red-mark-Zad1413"' +
  "      ></i>" +
  "    </div>" +
  '    <div class="zadanie_odpowiedz">' +
  '      <button id="Zad141" class="zadanie-button">Sprawdź</button>' +
  "    </div>" +
  "    <p>" +
  "      2. W wysokich górach woda wrze w niższej temperaturze niż na poziomie 0 m" +
  "      n.p.m. Możliwy jest też odwrotny efekt - w pewnych warunkach woda wrze w" +
  "      temperaturze wyższej niż 100°C." +
  "    </p>" +
  "    <p>" +
  "      Co możemy zrobić, aby uzyskać wodę wrzącą w temperaturze wyższej niż" +
  "      100°C?" +
  "    </p>" +
  '    <div class="zadanie_odpowiedz">' +
  '      <button id="Zad142" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '      <p id="Odp142" class="inactive-chekbox">Możemy zwiększyć ciśnienie działające na wodę.</p>' +
  "    </div>" +
  "    <p>" +
  "      3. Czy w wodzie o temperaturze 120°C parzenie herbaty następowałoby" +
  "      szybciej? Odpowiedź uzasadnij." +
  "    </p>" +
  '    <div class="zadanie_odpowiedz">' +
  '      <button id="Zad143" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '      <p id="Odp143" class="inactive-chekbox">Tak, ponieważ cząsteczki wody i liści herbaty poruszałyby się szybciej w wyższej temperaturze, co prowadziłoby do szybszego uwalniania substancji chemicznych z liści herbaty.</p>' +
  "    </div>" +
  '    <div class="nav-buttons">' +
  '      <button class="zadanie-button" id="previousButton">' +
  "        Poprzednie zadanie" +
  "      </button>" +
  '      <button class="zadanie-button" id="nextButton">' +
  "        Następne zadanie" +
  "      </button>" +
  "    </div>" +
  "  </div>" +
  "</div>";

function getHTMLZad14() {
  return zad14DOM;
}

export { getHTMLZad14 };
