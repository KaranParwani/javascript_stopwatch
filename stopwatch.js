let hr = 0;
let min = 0;
let sec = 0;
let milliseconds = 0;


let timer = 0;

function start() {
    timer = 1;
    stopWatch()
}

function stop() {
    timer = 2;
    stopWatch()
}

function reset() {
    timer = 3;
    stopWatch()
}


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

    else{
        document.getElementById("seconds").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("milliseconds").innerHTML = 0;
     }
}