var zad11DOM =
  '<div class="zadanie zadanie11" ;="">' +
  '        <div class="zadanie_hero zadanie11_hero">' +
  "          <h2>Zadanie 11: Światło</h2>" +
  "        </div>" +
  '        <div class="zadanie_tresc zadanie11_tresc">' +
  "          <p>" +
  "            Galileusz jako pierwszy podjął próbę zmierzenia prędkości światła. W" +
  "            tym celu dwie osoby wyposażone w latarnie z przesłoną stawały na" +
  "            wzgórzach oddalonych o parę kilometrów, następnie jedna z nich" +
  "            odsłaniała swoją przesłonę, i czekała aż ta druga odsłoni swoją." +
  "            Prędkość światła miała być obliczana na podstawie opóźnienia w podnoszeniu" +
  "            przesłon." +
  "          </p>" +
  "          <p>" +
  "            1. Eksperyment Galileusza nie powiódł się, odsłonięcia przesłony" +
  "            wydawały się następować natychmiast. Uczony mógł tylko oszacować, że" +
  "            prędkość światła przekracza 30 km/s. Jakie czynniki doprowadziły do" +
  "            porażki doświadczenia?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad111" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp111" class="inactive-chekbox">Gdyby prędkość światła była mniejsza, eksperyment Galileusza mógłby się powieść. Obecnie wiemy, że światło porusza się z prędkościa 300 tysięcy kilometrów na sekundę, Galileusz potrzebował dużo dokładniejszych narzędzi do pomiaru czasu i rejestrowania odsłonięcia przesłony. Prędkość światła jest bardzo duża a Galileusz nie dysponował </p>' +
  "          </div>" +
  "          <p>" +
  "            2. Załóżmy, że chcemy przeprowadzić eksperyment Galileusza obecnie," +
  "            mając do dyspozycji najnowsze narzędzia. Co można by zrobić, aby" +
  "            usprawnić eksperyment?" +
  "          </p>" +
  '          <div class="zadanie_odpowiedz">' +
  '            <button id="Zad112" class="zadanie-button">Przykładowa odpowiedź</button>' +
  '            <p id="Odp112" class="inactive-chekbox">Obecnie można by użyć dokładniejszych metod pomiaru czasu, laserów zamiast latarni, detektora światła zamiast oczu i lustra zamiast osoby odsłaniającej przesłonę. Dzięki temu musielibyśmy zmierzyć jedynie odległość do i od lustra oraz czas od włączenia lasera do zarejestrowania go w detektorze.</p>' +
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

function getHTMLZad11() {
  return zad11DOM;
}

export { getHTMLZad11 };
