let isAscending = false
let subregionCollapseState = {};

document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndDisplayTable();
});

// Fetch data and store it in globalCountriesData
function fetchDataAndDisplayTable() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => {
            // Map the countries to a simpler format
            globalCountriesData = countries.map(country => ({
                name: country.name,
                capital: country.capital ? country.capital : 'N/A',
                population: country.population,
                area: country.area || 0,
                subregion: country.subregion || 'Other',
                sortOrder: '',
                isAscending: true,
            }));

            // Group and display the countries
            let groupedCountries = groupCountriesBySubregion(globalCountriesData);
            populateTableWithGroupedData(groupedCountries);
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data and set up table
    fetchDataAndDisplayTable();

    // Set up sorting buttons
    document.getElementById('sortByName').addEventListener('click', () => sortTableBy('name'));
    document.getElementById('sortByCapital').addEventListener('click', () => sortTableBy('capital'));
    document.getElementById('sortByPopulation').addEventListener('click', () => sortTableBy('population'));
    document.getElementById('sortByArea').addEventListener('click', () => sortTableBy('area'));
});

function sortTableBy(property) {
    // Group countries by subregion
    let groupedCountries = groupCountriesBySubregion(globalCountriesData);

    // Then, sort countries within each subregion
    Object.keys(groupedCountries).forEach(subregion => {
        // Determine the sorting direction
        isAscending = !isAscending;

        // Sort the countries within the subregion
        groupedCountries[subregion].countries.sort((a, b) => {
            if (a[property] < b[property]) return isAscending ? -1 : 1;
            if (a[property] > b[property]) return isAscending ? 1 : -1;
            return 0;
        });
    });

    // Re-display the table with the sorted data
    populateTableWithGroupedData(groupedCountries);
}

function groupCountriesBySubregion(countries) {
    let grouped = {};
    countries.forEach(country => {
        let subregion = country.subregion || 'Other';
        if (!grouped[subregion]) {
            grouped[subregion] = {
                countries: [],
                population: 0,
                area: 0
            };
        }
        grouped[subregion].countries.push({
            name: country.name.common,
            capital: country.capital ? country.capital[0] : 'N/A',
            population: country.population,
            area: country.area
        });
        grouped[subregion].population += country.population;
        grouped[subregion].area += country.area || 0; // Some countries do not have area data
    });
    return grouped;
}

function populateTableWithGroupedData(groupedData) {
    const tableBody = document.querySelector("#country-table tbody");
    tableBody.innerHTML = ""

    Object.entries(groupedData).forEach(([subregion, details], index) => {
        // Create the subregion header row
        const subregionRow = document.createElement("tr");
        subregionRow.innerHTML = `
        <td><button class="collapsible">${subregion}</button></td>
        <td></td>
        <td>${details.area.toLocaleString()}</td>
        <td>${details.population.toLocaleString()}</td>`;
        subregionRow.querySelector('button').onclick = () => toggleVisibility(index);
        tableBody.appendChild(subregionRow);

        if(subregionCollapseState[index] === undefined){
            subregionCollapseState[index] = false;
        }

        // Create the country rows for this subregion
        details.countries.forEach(country => {
            const countryRow = document.createElement("tr");
            countryRow.classList.add(`group-${index}`, "collapsed");
            countryRow.innerHTML = `
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.population.toLocaleString()}</td>
                <td>${country.area ? country.area.toLocaleString() : 'N/A'}</td>`;
            tableBody.appendChild(countryRow);
            if(subregionCollapseState[index]){
                countryRow.classList.remove("collapsed");
            }           
        });
    });
}

function toggleVisibility(index) {
    const rows = document.querySelectorAll(`.group-${index}`);
    const isExpanded = subregionCollapseState[index];

    rows.forEach(row => {
        if (isExpanded) {
            row.classList.add("collapsed");
        } else {
            row.classList.remove("collapsed");
        }
    });
    subregionCollapseState[index] = !isExpanded;
}