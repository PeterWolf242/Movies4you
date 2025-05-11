"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var movie_data_1 = require("./movie-data");
// * DOM-Elemente holen
var btnSearch = document.querySelector("#btnSearch");
var movieContainer = document.querySelector("#movie_container");
var btnYearUp = document.querySelector("#btnyearup");
var btnYearDown = document.querySelector("#btnyeardown");
var btnbestRate = document.querySelector("#btnbestRate");
// * Funktion zum Anzeigen der Filme
function showMovies() {
    if (movieContainer) {
        // Container-Inhalt löschen, um doppelte Einträge zu vermeiden
        movieContainer.innerHTML = "";
        movie_data_1.movies.forEach(function (element) {
            // *
            var box = document.createElement("div");
            box.classList.add("movieBox");
            movieContainer.appendChild(box);
            // * Filmtitel ausgeben
            box.innerHTML = "<h3>".concat(element[0], "</h3>");
            // * Erscheinungsjahr ausgeben
            box.innerHTML += "<div><span class=\"inner_highlight\">Erscheinungsjahr: </span><p>".concat(element[1], "</p></div>");
            // * Regisseur ausgeben
            box.innerHTML += "<div><span class=\"inner_highlight\">Regisseur: </span><p>".concat(element[2], "</p></div>");
            // * Spielzeit ausgeben
            box.innerHTML += "<div><span class=\"inner_highlight\">Spielzeit: </span><p>".concat(element[3], "</p></div>");
            // * Kategorie ausgeben
            box.innerHTML += "<div><span class=\"inner_highlight\">Kategorie: </span><p>".concat(element[4].join(", "), "</p></div>");
            // * Bewertung ausgeben
            box.innerHTML += "<div><span class=\"inner_highlight\">Bewertung: </span><p>".concat(element[5], "</p></div>");
        });
    }
}
// Event-Handler hinzufügen
if (movieContainer && btnSearch && btnYearUp && btnYearDown && btnbestRate) {
    // Filme beim Laden der Seite anzeigen
    showMovies();
    // Movies direkt bei Eingabe im Inputfeld suchen
    var inputText = (_a = document.querySelector("#inputText")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function () {
        var searchInput = document.querySelector("#inputText");
        var searchInputValue = (searchInput === null || searchInput === void 0 ? void 0 : searchInput.value) || "";
        var inputFilter = movie_data_1.movies.filter(function (movie) { return movie[0].includes(searchInputValue); });
        if (inputFilter) {
        }
    });
    // Movies aufsteigend nach Erscheinungsjahr sortieren
    btnYearUp.addEventListener("click", function () {
        movie_data_1.movies.sort(function (a, b) { return Number(a[1]) - Number(b[1]); });
        showMovies(); // Neu anzeigen
    });
    // Movies absteigend nach Erscheinungsjahr sortieren
    btnYearDown.addEventListener("click", function () {
        movie_data_1.movies.sort(function (a, b) { return Number(b[1]) - Number(a[1]); });
        showMovies(); // Neu anzeigen
    });
    // Movies absteigend nach Erscheinungsjahr sortieren
    btnbestRate.addEventListener("click", function () {
        movie_data_1.movies.sort(function (a, b) { return Number(b[5]) - Number(a[5]); });
        showMovies(); // Neu anzeigen
    });
}
;
