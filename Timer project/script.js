 function StopBtn() {
    const startBtn = document.querySelector("#start");
    startBtn.classList.toggle("active");
    if (startBtn.classList.contains("active")) {
        
        startBtn.innerHTML = "Stop";
    } else {
        startBtn.innerHTML = "Start";
       
    }

}

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elseapsedTime = 0;
let isRunning = false;

function StartBtn() {
   if (!isRunning) {
        startTime = Date.now() - elseapsedTime;
        timer = setInterval(UpdateDisplay, 10);
        isRunning = true;
    } else {
        clearInterval(timer);
        elseapsedTime = Date.now() - startTime;
        isRunning = false;
    }   

}



function ResetBtn() {
clearInterval(timer);
 startTime = 0;
elseapsedTime = 0;
isRunning = false;
display.textContent = "00:00:00:00";
    
}

function UpdateDisplay() {
   const currentTime = Date.now();
   elseapsedTime = currentTime - startTime;

   let hours =Math.floor (elseapsedTime / (1000 * 60 * 60));
   let minutes =Math.floor (elseapsedTime / (1000 * 60)) % 60;
    let seconds =Math.floor (elseapsedTime / 1000 % 60);
    let milliseconds =Math.floor (elseapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


