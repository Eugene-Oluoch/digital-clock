let hello = () => {
    let hoursDisplay = document.getElementById("clock-hours");
    let minutesDisplay = document.getElementById("clock-minutes");
    let secondsDisplay = document.getElementById("clock-seconds");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds <= 9) {
        secondsDisplay.innerText = `0${seconds}`;
    } else if (minutes <= 9) {
        minutesDisplay.innerText = `0${minutes}`;
    } else if (hours <= 9) {
        minutesDisplay.innerText = `0${hours}`;
    } else {
        hoursDisplay.innerText = `${hours}`;
        minutesDisplay.innerText = `${minutes}`;
        secondsDisplay.innerText = `${seconds}`;
    }
    setInterval(hello, 1000);
};