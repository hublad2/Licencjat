var zad5DOM =
  '<div class="zadanie zadanie5" ;="">' +
  '        <div class="zadanie_hero zadanie5_hero">' +
  "          <h2>Zadanie 5: Samochód na orbicie</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie5_tresc">' +
  "          <p>" +
  "            Samochód elektryczny został umieszczony na stabilnej, kołowej" +
  "            orbicie okołoziemskiej, w okolicach orbity Księżyca." +
  "          </p>" +
  "          <p>1. Narysuj siły działające na samochód.</p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad51" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp51" class="inactive-chekbox">Odpowiedź -</p>' +
  "          </div>" +
  "          <p>" +
  "            2. Spójrz na załączoną tabelkę i wybierz możliwą wartość" +
  "            prędkości samochodu na orbicie." +
  "          </p>" +
  '          <div class="zadanie_tabela zadanie5_tabela">' +
  "            <table>" +
  "              <tr>" +
  "                <td><b>Orbita</b></td>" +
  "                <td><b>Odległość do środka Ziemi [km]</b></td>" +
  "                <td><b>Wartość prędkości [km/s]</b></td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>Niska orbita okołoziemska</td>" +
  "                <td>6,600-8,400</td>" +
  "                <td>6.9-7.8</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>Orbita geostacjonarna</td>" +
  "                <td>42,000</td>" +
  "                <td>3.1</td>" +
  "              </tr>" +
  "              <tr>" +
  "                <td>Orbita Księżyca</td>" +
  "                <td>363,000-406,000</td>" +
  "                <td>0.97-1.08</td>" +
  "              </tr>" +
  "            </table>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>a) 7 km/s</p>" +
  '            <input type="checkbox" id="Zad521" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad521"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>b) 0.01 km/s</p>" +
  '            <input type="checkbox" id="Zad522" />' +
  "            <i" +
  '              class="fas fa-times mark-check-red inactive"' +
  '              aria-hidden="true"' +
  '              id="red-mark-Zad522"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>c) 1 km/s</p>" +
  '            <input type="checkbox" id="Zad523" />' +
  "            <i" +
  '              class="fas fa-check mark-check-green inactive"' +
  '              aria-hidden="true"' +
  '              id="green-mark-Zad523"' +
  "            ></i>" +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad52" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            3. Czy włączenie silnika i kręcenie kołami pomoże nam wrócić" +
  "            na Ziemię? Zakładamy, że samochód nie generuje gazów" +
  "            wylotowych." +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad53" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp53" class="inactive-chekbox">Odpowiedź -</p>' +
  "          </div>" +
  "        </div>" +
  "      </div>";

function getHTMLZad5() {
  return zad5DOM;
}

export { getHTMLZad5 };
