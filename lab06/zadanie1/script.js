const counter = 0;
const propagation = true

    document.addEventListener('DOMContentLoaded', () => {
    const area1 = document.getElementById('area1');
    const area2 = document.getElementById('area2');
    const area3 = document.getElementById('area3');

    area3.addEventListener('click', (e) => {
        counter = counter + 5;
        const lista = document.getElementById('log');

        const log = document.createElement('li');
        log.innerText = "Dodano 5 punktów"

        lista.appendChild(log)
    });

    area2.addEventListener('click', (e) => {
        if (!area3.contains(e.target)) {
            counter = counter + 2
            const lista = document.getElementById('log');

            const log = document.createElement('li');
            log.innerText = "Dodano 2 punkty"

            lista.appendChild(log)
        }
    });
    area1.addEventListener('click', (e) => {
        if (!area2.contains(e.target)) {
            counter = counter + 1;
            const lista = document.getElementById('log');

            const log = document.createElement('li');
            log.innerText = "Dodano 1 punkt"

            lista.appendChild(log)
        }

        
    });
});

