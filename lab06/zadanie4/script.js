document.addEventListener('DOMContentLoaded', () => {
    const area = document.getElementById('area');
    const circle = document.getElementById('circle');

    area.addEventListener('click', (e) => {
        const x = e.clientX - area.offsetLeft - (circle.offsetWidth / 2);
        const y = e.clientY - area.offsetTop - (circle.offsetHeight / 2);

        circle.style.transform = `translate(${x}px, ${y}px)`;
    });

    document.addEventListener('click', (e) => {
        if (!area.contains(e.target)) {
            const message = document.createElement('div');
            message.textContent = 'Naciśnięcie poza obszarem!';
            message.style.position = 'absolute';
            message.style.left = `${e.clientX}px`;
            message.style.top = `${e.clientY}px`;

            document.body.appendChild(message);

            setTimeout(() => message.remove(), 2000);
        }
    });
});