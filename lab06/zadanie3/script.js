function pobierzDaneMiast() {
    return fetch('city.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Problem z Fetch API:', error);
      });
  }
  
  // a) Wyświetl miasta z województwa małopolskiego
  function wyswietlMalopolskie(miasta) {
    const malopolskieMiasta = miasta.filter(m => m.province === 'małopolskie');
    wyswietlNaStronie(malopolskieMiasta.map(m => m.name), 'malopolskie');
  }
  
  // b) Wyświetl miasta z dwoma 'a' w nazwie
  function wyswietlMiastaZDwomaA(miasta) {
    const miastaZDwomaA = miasta.filter(m => (m.name.match(/a/g) || []).length === 2);
    wyswietlNaStronie(miastaZDwomaA.map(m => m.name), 'miastaZDwomaA');
  }
  
  // c) Wyświetl piąte miasto pod względem gęstości zaludnienia
  function wyswietlPiatePodWzgledemGestosci(miasta) {
    const posortowaneMiasta = miasta.sort((a, b) => b.density - a.density);
    wyswietlNaStronie([posortowaneMiasta[4].name], 'piateGestosc');
  }
  
  // d) Dodaj "city" do nazw miast powyżej 100000 mieszkańców
  function dodajCityDoNazw(miasta) {
    const zmienioneMiasta = miasta.map(m => m.people > 100000 ? {...m, name: `${m.name} city`} : m);
    // Aktualizuj dane miast w innym miejscu jeśli to potrzebne
  }
  
  // e) Porównaj liczbę miast powyżej i poniżej 80000 mieszkańców
  function porownajMiasta80000(miasta) {
    const powyzej = miasta.filter(m => m.people > 80000).length;
    const ponizej = miasta.filter(m => m.people <= 80000).length;
    const wynik = `Więcej jest miast ${powyzej > ponizej ? 'powyżej' : 'poniżej'} 80000 mieszkańców. Powyżej: ${powyzej}, Poniżej: ${ponizej}`;
    wyswietlNaStronie([wynik], 'porownanie80000');
  }
  
  // f) Oblicz średnią powierzchnię miast z powiatów na "P"
  function sredniaPowierzchniaNaP(miasta) {
    const miastaNaP = miasta.filter(m => m.township.startsWith('P') || m.township.startsWith('p'));
    const srednia = miastaNaP.reduce((acc, m) => acc + m.area, 0) / miastaNaP.length;
    wyswietlNaStronie([`Średnia powierzchnia: ${srednia.toFixed(2)} km²`], 'sredniaPowierzchnia');
  }
  
  // g) Sprawdź, czy wszystkie miasta z woj. pomorskiego są większe od 5000 mieszkańców
  function sprawdzPomorskie(miasta) {
    const pomorskieMiasta = miasta.filter(m => m.province === 'pomorskie');
    const wszystkieWiekszeOd5000 = pomorskieMiasta.filter(m => m.people > 5000);
    const wynik = `${wszystkieWiekszeOd5000.length === 0 ? 'W' : 'Nie w'}szystkie miasta z województwa pomorskiego są  większe od 5000 osób. Liczba miast: ${wszystkieWiekszeOd5000.length}`;
    wyswietlNaStronie([wynik], 'pomorskieWiekszeOd5000');
  }
  
  // Funkcja pomocnicza do wyświetlania danych na stronie
  function wyswietlNaStronie(dane, sekcjaId) {
    const sekcja = document.getElementById(sekcjaId);
    sekcja.innerHTML = dane.join('<br>');
  }
  
  // Przykładowe wywołanie po załadowaniu strony
  document.addEventListener('DOMContentLoaded', () => {
    pobierzDaneMiast().then(miasta => {
      if (miasta) {
        wyswietlMalopolskie(miasta);
        wyswietlMiastaZDwomaA(miasta);
        wyswietlPiatePodWzgledemGestosci(miasta);
        dodajCityDoNazw(miasta);
        porownajMiasta80000(miasta);
        sredniaPowierzchniaNaP(miasta);
        sprawdzPomorskie(miasta);
      }
    });
  });
  