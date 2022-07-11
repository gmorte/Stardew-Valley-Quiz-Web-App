import { showRankings } from "./RankingUi.js";

export class HomeUi {
    constructor() {}

    showHome(showQuiz, showRank) {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const addLogo = document.createElement("img");
        addLogo.src = "img/58f367aca4fa116215a923ef.png";
        addLogo.id = "logo-stardew";

        const jugarButton = document.createElement("button");
        jugarButton.className = "button";
        jugarButton.textContent = "Jugar";
        jugarButton.type = "submit";
        jugarButton.onclick = showQuiz;

        const rankingButton = document.createElement("button");
        rankingButton.className = "button";
        rankingButton.textContent = "Ranking";
        rankingButton.type = "submit";
        rankingButton.onclick = showRank;

        element.append(addLogo);
        element.append(jugarButton);
        element.append(rankingButton);
    }
}
