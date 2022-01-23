let hello = () => {
    let hoursDisplay = document.getElementById("clock-hours");
    let minutesDisplay = document.getElementById("clock-minutes");
    let secondsDisplay = document.getElementById("clock-seconds");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
 
    hoursDisplay.innerText = `${hours}`;
    minutesDisplay.innerText = `${minutes}`;
    secondsDisplay.innerText = `${seconds}`;
    
    setInterval(hello, 1000);
};