export { getJugadoresFromLocalStorage, addPlayer, sortJugadoresArray, addNewScoreToRanking};

function addPlayer(nombre, puntos) {
    let jugadores = [];
    jugadores = getJugadoresFromLocalStorage();

    let element = { nombre: nombre, puntos: puntos };

    jugadores.push(element);

    saveLocalStorageJugadores(jugadores);
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

//PASAR A RANKINGUI.JS?
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
