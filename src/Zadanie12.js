var zad12DOM =
  '<div class="zadanie zadanie12" ;="">' +
  '        <div class="zadanie_hero zadanie12_hero">' +
  "          <h2>Zadanie 12: Gwiazdy</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie12_tresc">' +
  "          <p>" +
  "            Spójrz na diagram Hertzsprunga-Russella. Jest to wykres" +
  "            klasyfikujący gwiazdy ze względu na ich obserwowany kolor (widmo), i" +
  "            moc promieniowania." +
  "          </p>" +
  "<figure class='img-figure'>" +
  "          <img" +
  '            src="./assets/Diagram_H-R2_PL.gif"' +
  '            alt="Diagram Hertzsprunga-Russella"' +
  '            class="img-container"' +
  "          />" +
  "<figcaption>Żródło: <a href='https://pl.wikipedia.org/wiki/Diagram_Hertzsprunga-Russella#/media/Plik:Diagram_H-R2_PL.gif' target='_blank'>Wikipedia - Diagram_Hertzsprunga-Russella</a></figcaption>" +
  "</figure>" +
  "          <p>" +
  "            1. Korzystając z wykresu, możemy stwierdzić, że z największą mocą" +
  "            promieniują:" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>a) Białe karły i podolbrzymy</p>" +
  '            <input type="checkbox" id="Zad1211" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1211"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>b) Hiperolbrzymy</p>" +
  '            <input type="checkbox" id="Zad1212" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  '              id="green-mark-Zad1212"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>c) Nowe</p>" +
  '            <input type="checkbox" id="Zad1213" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad1213"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad121" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Na wykresie Słońce znajduje się w centrum, z mocą promieniowania" +
  "            równą 1, a widmo jest sklasyfikowane jako żółte. Skoro obserwowany kolor Słońca jest żółty," +
  "            to dlaczego obserwujemy różne kolory, przepuszczając światło słoneczne przez pryzmat?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad122" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp122" class="inactive-chekbox">Słońce wydaje się żółte, ale w rzeczywistości promienuje w szerokim spektrum długości fal. Nasze oczy interpretują to jako kolor biały, biało-żółty. Rozszczepiając wiązkę takiego promieniowania w pryzmacie, zmieniamy nieco bieg promienii o poszczególnych kolorach, przez co da się je rozdzielone, zauważyć.</p>' +
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

function getHTMLZad12() {
  return zad12DOM;
}

export { getHTMLZad12 };
