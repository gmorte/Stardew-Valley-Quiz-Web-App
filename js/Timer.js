export class Timer {

    constructor(seconds) {
        this.seconds = seconds;
        this.idTimer;
    }

    setTimer(callback) {
        const TIME_DELAY = -2;
        let sec = this.seconds;
        this.idTimer = setInterval(() => {
            let timer = document.querySelector("#temporizador");
            timer.innerHTML = sec;
            sec--;
            if (sec == TIME_DELAY) {
                clearInterval(this.idTimer);
                callback();
            }
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.idTimer);
    }

}