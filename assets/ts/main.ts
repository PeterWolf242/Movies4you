import { movies } from './movie-data';

// * DOM-Elemente holen
const btnSearch = document.querySelector<HTMLButtonElement>("#btnSearch");
const movieContainer = document.querySelector<HTMLDivElement>("#movie_container");
const btnYearUp = document.querySelector<HTMLButtonElement>("#btnyearup");
const btnYearDown = document.querySelector<HTMLButtonElement>("#btnyeardown");
const btnbestRate = document.querySelector<HTMLButtonElement>("#btnbestRate");

// * Funktion zum Anzeigen der Filme
function showMovies() {
    if (movieContainer) {
        // Container-Inhalt löschen, um doppelte Einträge zu vermeiden
        movieContainer.innerHTML = "";

        movies.forEach(element => {
            // *
            const box = document.createElement("div");
            box.classList.add("movieBox");
            movieContainer.appendChild(box);

            // * Filmtitel ausgeben
            box.innerHTML = `<h3>${element[0]}</h3>`;
            // * Erscheinungsjahr ausgeben
            box.innerHTML += `<div><span class="inner_highlight">Erscheinungsjahr: </span><p>${element[1]}</p></div>`;
            // * Regisseur ausgeben
            box.innerHTML += `<div><span class="inner_highlight">Regisseur: </span><p>${element[2]}</p></div>`;
            // * Spielzeit ausgeben
            box.innerHTML += `<div><span class="inner_highlight">Spielzeit: </span><p>${element[3]}</p></div>`;
            // * Kategorie ausgeben
            box.innerHTML += `<div><span class="inner_highlight">Kategorie: </span><p>${element[4].join(", ")}</p></div>`;
            // * Bewertung ausgeben
            box.innerHTML += `<div><span class="inner_highlight">Bewertung: </span><p>${element[5]}</p></div>`;
        });
    }
}

// Event-Handler hinzufügen
if (movieContainer && btnSearch && btnYearUp && btnYearDown && btnbestRate) {
    // Filme beim Laden der Seite anzeigen
    showMovies();

    // Movies direkt bei Eingabe im Inputfeld suchen
    const inputText = document.querySelector("#inputText")?.addEventListener("input", () => {
        const searchInput = document.querySelector<HTMLInputElement>("#inputText");
        const searchInputValue = searchInput?.value || "";
        const inputFilter = movies.filter(movie => movie[0].includes(searchInputValue));
        if (inputFilter) {
        }
    });

    // Movies aufsteigend nach Erscheinungsjahr sortieren
    btnYearUp.addEventListener("click", () => {
        movies.sort((a, b) => Number(a[1]) - Number(b[1]));
        showMovies(); // Neu anzeigen
    });

    // Movies absteigend nach Erscheinungsjahr sortieren
    btnYearDown.addEventListener("click", () => {
        movies.sort((a, b) => Number(b[1]) - Number(a[1]));
        showMovies(); // Neu anzeigen
    });

    // Movies absteigend nach Erscheinungsjahr sortieren
    btnbestRate.addEventListener("click", () => {
        movies.sort((a, b) => Number(b[5]) - Number(a[5]));
        showMovies(); // Neu anzeigen
    });
};
