// Funkcja do generowania losowego koloru w formacie hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  //Zmienne dla przycisków: Używam document.querySelector do znalezienia przycisków w dokumencie HTML za pomocą ich atrybutów data-start i data-stop.
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let colorChangeInterval = null; //Zmienna colorChangeInterval: Służy do przechowywania identyfikatora interwału, aby go zatrzymać, kiedy użytkownik naciśnie przycisk "Stop".

  //Nasłuchiwanie na przycisku "Start": Gdy przycisk "Start" jest naciśnięty, przycisk staje się nieaktywny (aby zapobiec wielokrotnemu kliknięciu), a kolor tła <body> zaczyna zmieniać się co sekundę.
  startButton.addEventListener('click', () => {
    startButton.disabled = true; // Wyłącz przycisk Start, aby nie można było go kliknąć ponownie
    colorChangeInterval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor(); //Stosowanie stylów inline w kontekście JavaScript oznacza bezpośrednie modyfikowanie stylów elementu poprzez jego właściwość style. W podanym kodzie modyfikuję kolor tła (backgroundColor) elementu <body> właśnie w ten sposób, co jest formą stylu inline. Kiedy używam tej linii wewnątrz funkcji setInterval, co sekundę generuję nowy kolor za pomocą funkcji getRandomHexColor() i przypisuję go bezpośrednio do właściwości style.backgroundColor elementu <body>. Jest to równoznaczne ze zmianą stylów inline, ponieważ modyfikuje to bezpośrednio atrybut style elementu HTML, podobnie jak gdybym dodała lub zmieniła styl bezpośrednio w tagu HTML, np. <body style="background-color: #123456;">.
    }, 1000); // Zmień kolor tła co sekundę.
  });

  //Nasłuchiwanie na przycisku "Stop": Gdy przycisk "Stop" jest naciśnięty, przycisk "Start" staje się z powrotem aktywny, a zmiana koloru tła jest zatrzymywana poprzez wywołanie clearInterval z identyfikatorem interwału przechowywanym w colorChangeInterval.
  stopButton.addEventListener('click', () => {
    startButton.disabled = false; // Włącz przycisk Start
    clearInterval(colorChangeInterval); // Zatrzymaj zmianę koloru tła
  });
});

// Dodawanie skryptów do package.json
// W pliku package.json projektu dodano skrypty (start i build), które umożliwią łatwe budowanie i uruchamianie projektu z Parcel. Zakładając, że plikiem wejściowym jest src/index.html.
// Aby uruchomić projekt w trybie deweloperskim (z automatycznym odświeżaniem), użyj w Git Bash: npm run start; Aby zbudować projekt do produkcji, użyj: npm run build
// Parcel automatycznie zoptymalizuje pliki dla produkcji podczas budowania.
