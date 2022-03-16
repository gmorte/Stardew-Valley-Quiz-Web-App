export { getJugadores, addPlayer, showRankings };

let jugadores = [];

function addPlayer(nombre, puntos) {
  let element = { nombre: nombre, puntos: puntos };

  jugadores.push(element);

  localStorageJugadores(jugadores);
}

function showRankings() {
  const element = document.getElementById("quiz");
  element.innerHTML = "";

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

  for (let index = 0; index < 10; index++) {
    var row = "a" + index;
    row = document.createElement("tr");
    alltable.append(row);

    var nombre = "b" + index;
    nombre = document.createElement("th");
    nombre.innerHTML = jugadores[index].nombre.toString();
    row.append(nombre);

    var puntos = "c" + index;
    puntos = document.createElement("th");
    puntos.innerHTML = jugadores[index].puntos.toString();
    row.append(puntos);
  }

  element.append(alltable);
  element.append(volverButton);


}

function getJugadores() {
  var storedList = localStorage.getItem("localJugadores");
  if (storedList == null) {
    friendList = [];
  } else {
    jugadores = JSON.parse(storedList);
  }
  return jugadores;
}

function localStorageJugadores(array) {
  localStorage.setItem("localJugadores", JSON.stringify(array));
}
