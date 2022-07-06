export { getJugadoresFromLocalStorage, addPlayer, showRankings };

function addPlayer(nombre, puntos) {
    let jugadores = [];
    jugadores = getJugadoresFromLocalStorage();

    let element = { nombre: nombre, puntos: puntos };

    jugadores.push(element);

    saveLocalStorageJugadores(jugadores);
}

function showRankings() {
    let jugadores = [];
    jugadores = getJugadoresFromLocalStorage();
    sortJugadoresArray(jugadores);

    const MAXRANKING = 10;
    if (jugadores.length > MAXRANKING) {
        jugadores = jugadores.slice(0, 10);
    }

    const element = document.getElementById("quiz");
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

    while (getTotalSavedScores.length < MAXRANKING) {
        addNewScoreToRanking("???", "???");
    }

    const inicioButton = document.createElement("button");
    inicioButton.className = "button";
    inicioButton.innerHTML = "Inicio";
    inicioButton.type = "submit";
    inicioButton.id = "btnVolver";
    inicioButton.onclick = function () {
        location.reload();
    };

    element.append(table);

    element.append(inicioButton);
}

function getJugadoresFromLocalStorage() {
    let getJugadores = [];
    var storedList = localStorage.getItem("localJugadores");
    if (storedList == null) {
        storedList = [];
    } else {
        getJugadores = JSON.parse(storedList);
    }
    return getJugadores;
}

function saveLocalStorageJugadores(array) {
    localStorage.setItem("localJugadores", JSON.stringify(array));
}

function addNewScoreToRanking(nombre, puntos) {
    const newScoreRow = document.createElement("tr");
    newScoreRow.className = "scoreRow";
    const newScorePlayerName = document.createElement("td");
    newScorePlayerName.innerHTML = nombre;
    const newScorePlayerPoints = document.createElement("td");
    newScorePlayerPoints.innerHTML = puntos;
    newScoreRow.appendChild(newScorePlayerName);
    newScoreRow.appendChild(newScorePlayerPoints);
    table.appendChild(newScoreRow);
}

function sortJugadoresArray(jugadores) {
    jugadores.sort((a, b) => {
        if (a.puntos < b.puntos) {
            return 1;
        }
        if (a.puntos > b.puntos) {
            return -1;
        }
        if (a.nombre.toLowerCase < b.nombre.toLowerCase) {
            return 1;
        }
        if (a.nombre.toLowerCase > b.nombre.toLowerCase) {
            return -1;
        }
        return 0;
    });
}
