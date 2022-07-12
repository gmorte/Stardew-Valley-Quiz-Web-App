export class Timer {
    constructor(seconds) {
        this.seconds = seconds;
        this.idTimer;
    }

    setTimer(nextQuestion) {
        const TIME_DELAY = -2;
        let sec = this.seconds;
        this.idTimer = setInterval(() => {
            let timer = document.querySelector("#temporizador");
            timer.innerHTML = sec;
            this.seconds = sec;
            sec--;
            if (sec == TIME_DELAY) {
                clearInterval(this.idTimer);
                nextQuestion();
            }
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.idTimer);
    }

    getSeconds(){
        return this.seconds;
    }
}
