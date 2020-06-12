var zad10DOM =
  '<div class="zadanie zadanie10" ;="">' +
  '        <div class="zadanie_hero zadanie10_hero">' +
  "          <h2>Zadanie 10: Magnesy</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie10_tresc">' +
  "          <p>" +
  "            Przyjrzyj się co dzieje się na ekranie telewizora." +
  "          </p>" +
  '          <div class="zadanie_film zadanie10_film">' +
  '            <div id="video7" class="embeded"></div>' +
  "          </div>" +
  "          <p>" +
  "            1. Korzystając z dostępnych źródeł dowiedz się podstawowych zasad" +
  "            działania monitora kineskopowego, następnie spróbuj wytłumaczyć" +
  "            dlaczego magnes działa w ten sposób na obraz." +
  "          </p>" +
  "          <p>" +
  "            Możesz skorzystać np. z tego artykułu" +
  '            <a href="https://pl.wikipedia.org/wiki/Monitor_kineskopowy"' +
  "              >https://pl.wikipedia.org/wiki/Monitor_kineskopowy</a" +
  "            >" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad101" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp101" class="inactive-chekbox">lorem 100</p>' +
  "          </div>" +
  "          <p>" +
  "            2. Czy użycie, tak samo silnego, elektromagnesu dałoby identyczny" +
  "            efekt?" +
  "            <span" +
  '              ><label for="Zad1021">Tak</label>' +
  '              <input type="checkbox" id="Zad1021" /></span' +
  "            >/" +
  "            <span" +
  '              ><label for="Zad1022">Nie</label' +
  '              ><input type="checkbox" id="Zad1022" />' +
  "              <i" +
  '                class="fas fa-check mark-check-green inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="green-mark-Zad102"' +
  "              ></i>" +
  "              <i" +
  '                class="fas fa-times mark-check-red inactive-chekbox"' +
  '                aria-hidden="true"' +
  '                id="red-mark-Zad102"' +
  "              ></i" +
  "            ></span>" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad102" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            3. Informacje na dysku twardym można uszkodzić przybliżając do niego" +
  "            silny magnes. Poszukaj w internecie wyjaśnienia działania takiego" +
  "            dysku i wytłumacz dlaczego dane da się uszkodzić w ten sposób." +
  "          </p>" +
  "          <p>" +
  "            Pomóc może ten artykuł:" +
  "            <a" +
  '              href="https://klinikadanych.pl/artykuly/budowa-i-dzialanie-dysku-twardego-jak-dziala-hdd"' +
  "              >https://klinikadanych.pl/artykuly/budowa-i-dzialanie-dysku-twardego-jak-dziala-hdd</a" +
  "            >" +
  "            szczególnie działy talerze, głowice oraz zapis i odczyt danych." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad103" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp103" class="inactive-chekbox">lorem 100</p>' +
  "          </div>" +
  "        </div>" +
  "      </div>";

function getHTMLZad10() {
  return zad10DOM;
}

export { getHTMLZad10 };
