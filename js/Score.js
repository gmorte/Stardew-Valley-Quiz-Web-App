export class Score {
    constructor() {
        this.score = 0;
    }

    setScore(points) {
        this.score += points;
    }

    getScore() {
        return this.score;
    }
}
