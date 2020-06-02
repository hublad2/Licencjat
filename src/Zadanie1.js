let zad1DOM =
  '<div class="zadanie" style="grid-template-rows: 200px 2fr 2fr";>' +
  '        <div class="zadanie_hero">' +
  "         <h2>Zadanie 1: Kulki w butli</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc">' +
  "          <p>Spójrz na załączony film</p>" +
  "          <p>" +
  "            1. Przy zjawiskach które mogą, wyjaśniać zachowania kulek" +
  "            dopisz P (Prawda), w przeciwnym wypadku dopisz F (Fałsz)" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>- Różnice w gęstości cieczy w butelce </p>" +
  '            <input type="checkbox" id="Zad111" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>- Dużo większa gęstość kulek niebieskich od białych </p>" +
  '            <input type="checkbox" id="Zad112" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>- Dyfuzja cząsteczek cieczy</p>" +
  '            <input type="checkbox" id="Zad113" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad11">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Zaproponuj co może być przyczyną takiego zachowania kulek." +
  "            Uzasadnij odpowiedź." +
  "          </p>" +
  "          <p>" +
  "            Pytanie podpowiedź: Czy w butelce mogą znajdować się dwie" +
  "            różne ciecze?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad12">Odpowiedź</button>' +
  '            <p id="Odp12" class="inactive">' +
  "              Odpowiedź - To wszystko wina sędziego" +
  "            </p>" +
  "          </div>" +
  "        </div>" +
  '        <div class="zadanie_film">' +
  '          <div id="video1" class="embeded"></div>' +
  "        </div>" +
  " </div>";

function getHTMLZad1() {
  return zad1DOM;
}

export { getHTMLZad1 };
