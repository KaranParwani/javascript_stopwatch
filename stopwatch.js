let hr = 0;
let min = 0;
let sec = 0;
let milliseconds = 0;

// timer variable to control the functionality like start, stop, reset
let timer = 0;

// function to start the stopwatch
function start() {
    timer = 1;
    stopWatch()
}

// function to stop the time
function stop() {
    timer = 2;
    stopWatch()
}

// function to reset the timer
function reset() {
    timer = 3;
    stopWatch()
}

// main function
function stopWatch() {  

    if (timer == 1){
        milliseconds = milliseconds + 1;
        
        document.getElementById("milliseconds").innerHTML = milliseconds;

        if (milliseconds == 100){
            sec = sec + 1;
            document.getElementById("seconds").innerHTML = sec;
            milliseconds = 0;
        }

        if (sec == 60){
            min = min + 1;
            document.getElementById("minutes").innerHTML = min;
            sec = 0;
        }

        if  (min == 60){
            hr = hr + 1;
            document.getElementById("hours").innerHTML = hr;
            min = 0;
        }

        setTimeout("stopWatch()", 10);
    }

    else if (timer == 3){
        
        document.getElementById("seconds").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("milliseconds").innerHTML = 0;
        document.getElementById("lap").innerHTML = '';
    }

    else if (timer == 2){

        document.getElementById("seconds").innerHTML = sec;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("hours").innerHTML = hr;
        document.getElementById("milliseconds").innerHTML = milliseconds;

        lapping = hr + ":" + min + ":" + sec + ":" + milliseconds;
        document.getElementById("lap").innerHTML = lapping;

    }

}