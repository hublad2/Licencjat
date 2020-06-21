let zad3DOM =
  '<div class="zadanie zadanie3">' +
  '        <div class="zadanie_hero zadanie3_hero">' +
  "          <h2>Zadanie 3: Słońce</h2>" +
  "        </div>" +
  '        <div class="zadanie_tabela zadanie3_tabela">' +
  "          <table>" +
  "            <tr>" +
  '              <td rowspan="2"><b>Planeta</b></td>' +
  '              <td colspan="2"><b>Odległość od Słońca (AU)</b></td>' +
  '              <td colspan="2">' +
  "                <b>Natężenie promieniowania (kW/m<sup>2</sup>)</b>" +
  "              </td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td><b>Minimalna odległość</b></td>" +
  "              <td><b>Maksymalna odległość</b></td>" +
  "              <td><b>Minimalne</b></td>" +
  "              <td><b>Maksymalne</b></td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Merkury</td>" +
  "              <td>0.3075</td>" +
  "              <td>0.4667</td>" +
  "              <td>6.272</td>" +
  "              <td>14.446</td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Ziemia</td>" +
  "              <td>0.9833</td>" +
  "              <td>1.017</td>" +
  "              <td>1.321</td>" +
  "              <td>1.413</td>" +
  "            </tr>" +
  "            <tr>" +
  "              <td>Mars</td>" +
  "              <td>1.382</td>" +
  "              <td>1.666</td>" +
  "              <td>0.492</td>" +
  "              <td>0.715</td>" +
  "            </tr>" +
  "          </table>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie3_tresc">' +
  "          <p>" +
  "            <span" +
  "              >Spójrz na tabelkę przedstawiającą odległośći planety od Słońca, a także natężeń promienowania w najbardziej nasłonecznionych punktach planety." +
  "              Odpowiedz na podstawie tych danych na" +
  "              poniższe pytania. </span" +
  "            ><span>W zadaniu zakładamy, że Słońce świeci ze stałą mocą.</span>" +
  "          </p>" +
  "          <p>" +
  "            <span><span> </span></span>" +
  "          </p>" +
  "          <p>" +
  "            1. W jaki sposób można wytłumaczyć różnicę w maksymalnym natężeniu" +
  "            promieniowania docierającego do Ziemi i Marsa?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad31" class="zadanie-button">Przykładowa Odpowiedź</button>' +
  '            <p id="Odp31" class="inactive-chekbox">Odległość Marsa od Słońca jest większa niż odległość Ziemi od Słońca, przez co mimo że Słońce świeci z taką samą mocą, to moc ta rozkłada się na większą powierzchnię.</p>' +
  "          </div>" +
  "          <p>" +
  "            2. W jaki sposób można wytłumaczyć różnicę w natężeniu" +
  "            promieniowania docierającego do Merkurego?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad32" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp32" class="inactive-chekbox">Orbita Merkurego nie jest kołowa, jego odległość od Słońca zmienia się.</p>' +
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

function getHTMLZad3() {
  return zad3DOM;
}

export { getHTMLZad3 };
