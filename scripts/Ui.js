export class Ui {

    constructor(){}

    showHome(callQuiz, callRank) {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const addLogo = document.createElement("img");
        addLogo.src = "img/58f367aca4fa116215a923ef.png";
        addLogo.id = "logo-stardew";

        const jugarButton = document.createElement("button");
        jugarButton.className = "button";
        jugarButton.textContent = "Jugar";
        jugarButton.type = "submit";
        jugarButton.onclick = callQuiz;

        const rankingButton = document.createElement("button");
        rankingButton.className = "button";
        rankingButton.textContent = "Ranking";
        rankingButton.type = "submit";
        rankingButton.onclick = callRank;

        element.append(addLogo);
        element.append(jugarButton);
        element.append(rankingButton);
    }

    showQuiz() {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const tem = document.createElement("p");
        tem.id = "temporizador";
        element.append(tem);

        const quest = document.createElement("h2");
        quest.id = "question";
        element.append(quest);
        //showQuestion();

        const prog = document.createElement("p");
        prog.id = "progress";
        element.append(prog);
        //showProgress();

        const choi = document.createElement("div");
        choi.id = "choices";
        element.append(choi);
        //showChoices();
    }

    showRankings() {
        let jugadores = [];
        jugadores = getJugadoresFromLocalStorage();
        sortJugadoresArray(jugadores);

        const MAXRANKING = 10;
        if (jugadores.length > MAXRANKING) {
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

        while (getTotalSavedScores.length < MAXRANKING) {
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
}
