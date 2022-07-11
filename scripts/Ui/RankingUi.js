import { addNewScoreToRanking } from "../Players.js";

export function showRankings() {
    let jugadores = [];
    //jugadores = getJugadoresFromLocalStorage();
    //sortJugadoresArray(jugadores);

    const MAX_RANKING = 10;
    if (jugadores.length > MAX_RANKING) {
        jugadores = jugadores.slice(0, 10);
    }

    const element = document.getElementById("app");
    element.innerHTML = "";

    const rankingTitle = document.createElement("h1");
    rankingTitle.id = "rankingTitle";
    rankingTitle.innerHTML = "!RANKING!";
    element.append(rankingTitle);

    const table = document.createElement("table");
    table.id = "table";
    element.append(table);

    const tableHeader = document.createElement("tr");
    table.append(tableHeader);

    const headName = document.createElement("th");
    headName.innerHTML = "Nombre";
    tableHeader.append(headName);

    const headPoints = document.createElement("th");
    headPoints.innerHTML = "Puntos";
    tableHeader.append(headPoints);

    jugadores.forEach((jugadores) => {
        addNewScoreToRanking(jugadores.nombre, jugadores.puntos);
    });

    const getTotalSavedScores = document.getElementsByClassName("scoreRow");

    while (getTotalSavedScores.length < MAX_RANKING) {
        addNewScoreToRanking("???", "???");
    }

    const inicioButton = document.createElement("button");
    inicioButton.className = "button";
    inicioButton.innerHTML = "Inicio";
    inicioButton.type = "submit";
    inicioButton.id = "btnVolver";
    inicioButton.onclick = function () {
        showHome();
    };

    element.append(table);

    element.append(inicioButton);
}

