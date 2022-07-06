export { getJugadoresFromLocalStorage, addPlayer, showRankings };

//let jugadores = [];

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

  const MAXRANKING = 10;
  if(jugadores.length > MAXRANKING){
    jugadores = jugadores.slice(0,10);
  }

  const element = document.getElementById("quiz");
  element.innerHTML = "";

  const rankingTitle = document.createElement("h1");
  rankingTitle.id = "rankingTitle";
  rankingTitle.innerHTML = "!RANKING!"
  element.append(rankingTitle);

  const alltable = document.createElement("table");
  alltable.id = "table";
  element.append(alltable);

  const row1 = document.createElement("tr");
  alltable.append(row1);

  const cap1 = document.createElement("th");
  cap1.innerHTML = "Nombre";
  row1.append(cap1);

  const cap2 = document.createElement("th");
  cap2.innerHTML = "Puntos";
  row1.append(cap2);

  const volverButton = document.createElement("button");
  volverButton.className = "button";
  volverButton.innerHTML = "Inicio";
  volverButton.type = "submit";
  volverButton.id = "btnVolver";
  volverButton.onclick = function () {
    location.reload();
  };

  element.append(volverButton);

  var ranking = 1;

  for (let index = 0; index < jugadores.length; index++) {
    var row = "a" + index;
    row = document.createElement("tr");
    alltable.append(row);

    var nombre = "b" + index;
    nombre = document.createElement("th");
    
    if (jugadores.length == 0) { 
      nombre.innerHTML = "?";
      row.append(nombre);
    } else {
      nombre.style.textAlign = "left";
      nombre.innerHTML = ranking + "-" + jugadores[index].nombre.toString();
      ranking++;
      row.append(nombre);
    }

    var puntos = "c" + index;
    puntos = document.createElement("th");

    if (jugadores.length == 0) { 
      puntos.innerHTML = "?";
      row.append(puntos);
    }

    puntos.innerHTML = jugadores[index].puntos.toString();
    row.append(puntos);
  }

  element.append(alltable);
  
  element.append(volverButton);

}

function getJugadoresFromLocalStorage() {
  let getJugadores = []
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
