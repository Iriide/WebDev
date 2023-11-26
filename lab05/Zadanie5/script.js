
const names = ['Grzegorz', 'Wiktoria', 'Mateusz', 'Ania', 'Sandra', 'Kasia', 'Izabela', 'Weronika'];

let  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];


const countries = [
    { name: 'Nigeria', continent: 'Africa'},
    { name: 'Nepal', continent: 'Asia'},
    { name: 'Angola', continent: 'Africa'},
    { name: 'Poland', continent: 'Europe'},
    { name: 'Kenya', continent: 'Africa'},
    { name: 'Greece', continent: 'Europe'},
	{ name: 'France', continent: 'Europe'},
	{ name: 'China', continent: 'Asia'}
]

let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

let duplicateName = ['John', 'Paul', 'George', 'Ringo', 'Paul', 'Paul', 'Ringo'];


// 1. Na stronach internetowych wyświetlają się nazwy zawierające znak "r".  ( tablica names)
const namesWithR = names.filter(name => name.toLowerCase().includes('r'));
document.getElementById('section1').textContent = namesWithR.join(', ');

// 2. sprawdź czy tablica zawiera tylko elementy mniejsze niż 9. wynik wyswietl na stronei w sekcji 2
//      sprawdź, czy tablica zawiera jakieś elementy mniejsze niż 6 wyników. wynik wyświetl w przeglądarce w sekcji 2
//      inkrementuj wszystkie elementy w tablicy numbers. Nastepnie stwórz nowa tablice zawierajaca tylko elementy nieparzyste. 
//      Nesteopnie Oblicz sumę wszystkich elementów z tablicy. Wynik wyswietl w sekcji 2

const allLessThanNine = numbers.every(num => num < 9);
document.getElementById('section2').textContent = `Wszystkie elementy mniejsze niż 9: ${allLessThanNine}`;

const anyLessThanSix = numbers.some(num => num < 6);
document.getElementById('section2').append(`\nCzy zawiera elementy mniejsze niż 6: ${anyLessThanSix}`);

const incrementedOddNumbers = numbers.map(num => num + 1).filter(num => num % 2 !== 0);

const sum = incrementedOddNumbers.reduce((acc, num) => acc + num, 0);
document.getElementById('section2').append(`\nSuma: ${sum}`);

// 3. Na stronach internetowych wyświetlają się kraje z Europy

const europeanCountries = countries.filter(country => country.continent === 'Europe').map(country => country.name);
document.getElementById('section3').textContent = europeanCountries.join(', ');

// 4. Znajdź nazwiska wszystkich osób, które mają e-maile „replicant.io”. wyświetlanie wyników na stronach internetowych.

const replicantEmails = people.filter(person => person.email.endsWith('replicant.io')).map(person => person.name);
document.getElementById('section4').textContent = replicantEmails.join(', ');

// 5. usuwanie zduplikowanych wartości z tablicy nazwaduplikatu

const uniqueNames = [...new Set(duplicateName)];
document.getElementById('section5').textContent = uniqueNames.join(', ');