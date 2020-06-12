let zad2DOM =
  '<div class="zadanie zadanie2">' +
  '        <div class="zadanie_hero zadanie2_hero">' +
  "          <h2>Zadanie 2: Pociąg</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie2_tresc">' +
  "          <p>" +
  "            <span" +
  "              >Jedziemy pociągiem, który porusza się ruchem jednostajnym," +
  "              prostoliniowym i puszczamy w nim swobodnie piłkę tenisową.</span" +
  "            >" +
  "          </p>" +
  "          <p>" +
  "            <span><span> </span></span>" +
  "          </p>" +
  "          <p>" +
  "            <span" +
  "              >1. Czy w układzie peronu, równoległego do pociągu, tor" +
  "              ruchu piłki będzie inny niż w układzie pociągu?</span" +
  "            >" +
  "          </p>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              a) Nie, we wszystkich układach tor piłki będzie taki sam." +
  "            </p>" +
  '            <input type="checkbox" id="Zad211" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              b) Tak, w układzie peronu pociąg porusza się, dlatego tor piłki" +
  "              będzie zakrzywiony." +
  "            </p>" +
  '            <input type="checkbox" id="Zad212" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie1_odp">' +
  "            <p>" +
  "              c) Tak, w układzie peronu tor piłki będzie linią prostą." +
  "            </p>" +
  '            <input type="checkbox" id="Zad213" />' +
  '            <i class="fas fa-check mark-check-green inactive"></i>' +
  '            <i class="fas fa-times mark-check-red inactive"></i>' +
  "          </div>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad21" class="zadanie-button">Sprawdź</button>' +
  "          </div>" +
  "          <p>" +
  "            2. Podskakujemy w pociągu, ale lądujemy w tym samym miejscu w" +
  "            przedziale, z którego wyskoczyliśmy. Dlaczego tak się stało," +
  "            skoro pociąg jedzie?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad22" class="zadanie-button">Odpowiedź</button>' +
  '            <p id="Odp22" class="inactive-chekbox">' +
  "              Odpowiedź - " +
  "            </p>" +
  "          </div>" +
  "        </div>";

function getHTMLZad2() {
  return zad2DOM;
}

export { getHTMLZad2 };
