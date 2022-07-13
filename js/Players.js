export {
    getPlayersFromLocalStorage,
    addPlayer,
    sortPlayersArray,
    addNewScoreToRanking,
};

function addPlayer(name, points) {
    let players = [];
    players = getPlayersFromLocalStorage();
    let element = { name: name, points: points };
    players.push(element);
    saveLocalStoragePlayers(players);
}

function getPlayersFromLocalStorage() {
    let getPlayers = [];
    var storedList = localStorage.getItem("localPlayers");
    if (storedList == null) {
        storedList = [];
    } else {
        getPlayers = JSON.parse(storedList);
    }
    return getPlayers;
}

function saveLocalStoragePlayers(array) {
    localStorage.setItem("localPlayers", JSON.stringify(array));
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

function sortPlayersArray(players) {
    players.sort((a, b) => {
        if (a.points < b.points) {
            return 1;
        }
        if (a.points > b.points) {
            return -1;
        }
        if (a.name.toLowerCase < b.name.toLowerCase) {
            return 1;
        }
        if (a.name.toLowerCase > b.name.toLowerCase) {
            return -1;
        }
        return 0;
    });
}
