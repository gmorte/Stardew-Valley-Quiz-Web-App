import { main } from "../app.js";
export { addPlayer, showRankings };

let jugadores = [];

function addPlayer(nombre, puntos) {
  let element = { nombre: nombre, puntos: puntos };

  jugadores.push(element);

  jugadores.sort((a, b) => {
    if (a.puntos > b.puntos) {
      return 1;
    }
    if (a.puntos < b.puntos) {
      return -1;
    }
    if (a.nombre.toLowerCase > b.nombre.toLowerCase) {
      return 1;
    }
    if (a.nombre.toLowerCase < b.nombre.toLowerCase) {
      return -1;
    }
    return 0;
  });
}

function showRankings() {
  const alltable = document.createElement("table");
  alltable.id = "table";
  const row1 = document.createElement("tr");

  const cap1 = document.createElement("th");
  cap1.innerHTML = "Nombre";
  const cap2 = document.createElement("th");
  cap2.innerHTML = "Puntos";

  alltable.append(row1);
  row1.append(cap1);
  row1.append(cap2);

  for (let index = 0; index < jugadores.length; index++) {
    var row = "a" + index;
    row = document.createElement("tr");
    alltable.append(row);

    var nombre = "b" + index;
    nombre = document.createElement("th");
    nombre.innerHTML = jugadores[index].nombre.toString();

    var puntos = "c" + index;
    puntos = document.createElement("th");
    puntos.innerHTML = jugadores[index].puntos.toString();

    row.append(nombre);
    row.append(puntos);

    alltable.append(row);

    const element3 = document.getElementById("quiz");
    element3.append(alltable);

    const element = jugadores[index];
    console.log(element);
  }

  const volverButton2 = document.createElement("button");
  volverButton2.className = "button";
  volverButton2.innerHTML = "Inicio";
  volverButton2.type = "submit";
  volverButton2.id = "btnVolver2";
  volverButton2.onclick = function () {
    location.reload()
  };

  const element = document.getElementById("quiz");
  element.append(alltable);
  element.append(volverButton2);

  document.getElementById("logo-stardew").style.display = "none";
  document.getElementById("jugarButton").style.display = "none";
  document.getElementById("rankingButton").style.display = "none";
  document.getElementById("barra").style.display = "none";
}
