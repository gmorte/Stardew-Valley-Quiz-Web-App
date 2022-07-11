export class Timer{

    constructor(seconds){
        this.seconds = seconds;
        this.idTimer;
    }

    setTimer(){
        let sec = this.seconds;
        this.idTimer = setInterval(() => {
            let timer = document.querySelector("#temporizador");
            timer.innerHTML = sec--;
            if (sec == -1) {
                clearInterval(this.idTimer);
            }
        }, 1000);
    }

    clearTimer(){
        clearInterval(this.idTimer);
    }

}