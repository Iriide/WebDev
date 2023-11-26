function dodajWpis() {
    const imieNazwisko = document.getElementById('imieNazwisko').value;
    const numerTelefonu = document.getElementById('numerTelefonu').value;

    if (walidujImieNazwisko(imieNazwisko) && walidujNumerTelefonu(numerTelefonu)) {
        const lista = document.getElementById('ksiazkaTelefoniczna');
        const wpis = document.createElement('li');
        wpis.innerText = `${imieNazwisko}, nr.tel.: ${numerTelefonu}`;

        const kosz = document.createElement('div');
        kosz.innerText = '🗑';
        kosz.classList.add('kosz');
        kosz.onclick = function() { this.parentElement.remove(); };

        wpis.appendChild(kosz);
        lista.appendChild(wpis);

        document.getElementById('imieNazwisko').value = '';
        document.getElementById('numerTelefonu').value = '';
    } else {
        alert("Nieprawidłowe dane!");
    }
}

function walidujImieNazwisko(imieNazwisko) {
    return /^[A-Z][a-zA-Z-]+(\s[A-Z][a-zA-Z-]+)?$/.test(imieNazwisko);
}

function walidujNumerTelefonu(numer) {
    return /^(?:\+)?(\d\s?){9,12}$/.test(numer.replace(/\s+/g, ' ').trim());
}
