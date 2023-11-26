document.addEventListener('DOMContentLoaded', function() {
    fetch('user.json')
        .then(response => response.json())
        .then(users => {
            users.forEach((user, index) => {
                const userContainer = document.createElement('div');
                userContainer.className = 'user-container';
                userContainer.innerHTML = `
                    <h2>${user.firstName} ${user.lastName}</h2>
                    <div id="address-${index}" class="user-address">
                        <p>Adres: ${user.Address.Street}, ${user.Address.City}, ${user.Address.Country}</p>
                        <p>Email: ${user.email}</p>
                        <p>Telefon: ${user.phone}</p>
                    </div>
                    <input type="checkbox" id="toggle-${index}" data-index="${index}" checked> Pokaż szczegóły
                `;

                document.getElementById('users').appendChild(userContainer);

                document.getElementById(`toggle-${index}`).addEventListener('change', function(event) {
                    const addressDiv = document.getElementById(`address-${event.target.dataset.index}`);
                    if (event.target.checked) {
                        addressDiv.classList.remove('hidden');
                    } else {
                        addressDiv.classList.add('hidden');
                    }
                });
            });
        })
        .catch(error => console.error('Błąd wczytywania danych:', error));
});
