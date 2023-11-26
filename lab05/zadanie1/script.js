document.getElementById('welcomeButton').addEventListener('click', function () {
    const name = prompt("Proszę wprowadzić swoje imię:");
    if (name) {
        const greeting = name.endsWith('a') ? `Witam panią: ${name}` : `Witam pana: ${name}`;
        document.getElementById('greeting').textContent = greeting;
    }
});
