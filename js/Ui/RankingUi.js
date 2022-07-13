import { addNewScoreToRanking, getPlayersFromLocalStorage, sortPlayersArray } from "../Players.js";

export function showRankings(main) {
    let players = [];
    players = getPlayersFromLocalStorage();
    sortPlayersArray(players);

    const MAX_RANKING = 10;
    if (players.length > MAX_RANKING) {
        players = players.slice(0, 10);
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

    players.forEach((players) => {
        addNewScoreToRanking(players.name, players.points);
    });

    const getTotalSavedScores = document.getElementsByClassName("scoreRow");

    while (getTotalSavedScores.length < MAX_RANKING) {
        addNewScoreToRanking("???", "???");
    }

    const inicioButton = document.createElement("button");
    inicioButton.className = "button";
    inicioButton.innerHTML = "Inicio";
    inicioButton.onclick = main;

    element.append(table);

    element.append(inicioButton);
}
