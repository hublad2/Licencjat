var zad13DOM =
  '<div class="zadanie zadanie13" ;="">' +
  '        <div class="zadanie_hero zadanie13_hero">' +
  "          <h2>Zadanie 13: Lodówka</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie13_tresc">' +
  "          <p>" +
  "            Lodówka sprężarkowa składa się z elementów:" +
  "          </p>" +
  "          <ul>" +
  "            <li>" +
  "              parownika o temperaturze niższej od temperatury otoczenia," +
  "              pobierającego ciepło z jej wnętrza" +
  "            </li>" +
  "            <li>" +
  "              skraplacza o temperaturze wyższej od temperatury otoczenia," +
  "              oddającego ciepło do otoczenia" +
  "            </li>" +
  "            <li>sprężarki sprężającej substancję chłodniczą</li>" +
  "          </ul>" +
  "          <img" +
  '            src="./assets/schemat-lodówki.png"' +
  '            alt="Schemat lodówki"' +
  '            class="img-container"' +
  "          />" +
  "          <p>" +
  "            1. Chcemy ulepszyć lodówkę, np. poprzez poprawę wymiany ciepła" +
  "            pomiędzy skraplaczem i otoczeniem. Co mogłoby dać zamierzony efekt?" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>a) Zwiększenie powierzchni skraplacza</p>" +
  '            <input type="checkbox" id="Zad1311" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              b) Użycie wiatraka do poprawy przepływu powietrza przy skraplaczu" +
  "            </p>" +
  '            <input type="checkbox" id="Zad1312" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>c) Zwiększenie temperatury otoczenia</p>" +
  '            <input type="checkbox" id="Zad1313" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad131" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Częstym problemem w przypadku użytkowania lodówki jest osadzanie" +
  "            się szronu na wewnętrznych ściankach zamrażalnika, szczególnie przy" +
  "            parowniku." +
  "          </p>" +
  "          <p>" +
  "            Czy może to skutkować wzrostem temperatury w zamrażalniku? Odpowiedź" +
  "            uzasadnij." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad132" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp132" class="inactive-chekbox">Odpowiedź - Tak, szron może izolować wnętrze zamrażalnika od parownika, co utrudni pobieranie ciepła z wnętrza.</p>' +
  "          </div>" +
  "          <p>" +
  "            3. Do lodówki, w której wnętrzu panuje temperatura 5°C wsadzamy" +
  "            kubek gorącej herbaty o temperaturze 90°C i kubek z colą o" +
  "            temperaturze 20°C, w obu kubkach objętość cieczy jest taka sama." +
  "            Po 5 minutach sprawdzamy temperatury napojów. Jakie są możliwe" +
  "            wartości ich temperatur?" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>a) 100°C i 5°C</p>" +
  '            <input type="checkbox" id="Zad1331" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1331"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>b) 80°C i 10°C</p>" +
  '            <input type="checkbox" id="Zad1332" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1332"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>c) 80°C i 3°C</p>" +
  '            <input type="checkbox" id="Zad1333" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  '              id="green-mark-Zad1333"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad133" class="zadanie-button">Sprawdź</button>' +
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

function getHTMLZad13() {
  return zad13DOM;
}

export { getHTMLZad13 };
