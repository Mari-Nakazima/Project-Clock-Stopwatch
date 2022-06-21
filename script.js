//Relógio

var timer

timer = setInterval(showTime, 1000);

function Local(){
    clearInterval(timer);
    timer = setInterval(showTime, 1000);   
}

function UTC(){ 
    clearInterval(timer);  
    timer = setInterval(UTCTime, 1000);      
}

function showTime(){
    let d = new Date();
    let h = (d.getHours() <= 9) ? '0'+ d.getHours(): d.getHours();
    let m = (d.getMinutes() <= 9) ? '0'+ d.getMinutes(): d.getMinutes();
    let s = (d.getSeconds() <= 9) ? '0'+ d.getSeconds(): d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.clock').innerHTML = txt;
}

function UTCTime(){
    let d = new Date();
    let h = (d.getUTCHours() <= 9) ? '0'+ d.getUTCHours(): d.getUTCHours();
    let m = (d.getUTCMinutes() <= 9) ? '0'+ d.getUTCMinutes(): d.getUTCMinutes();
    let s = (d.getUTCSeconds() <= 9) ? '0'+ d.getUTCSeconds(): d.getUTCSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.clock').innerHTML = txt;
}

//Cronômetro

var min = 00;
var sec = 00;
var ms = 00;
var appendMin = document.getElementById('min');
var appendSec = document.getElementById('sec');
var appendMs = document.getElementById('ms');
var interval;

function Start(){
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

function Stop(){
    clearInterval(interval);
}

function Reset(){
    clearInterval(interval);
    min = '00';
    sec = '00';
    ms = '00';

    appendMin.innerHTML = min;
    appendSec.innerHTML = sec;
    appendMs.innerHTML = ms;
}

function startTimer(){
    ms++;

    if(ms <= 9){
        appendMs.innerHTML = '0' + ms;
    }

    if(ms > 9){
        appendMs.innerHTML = ms;
    }

    if(ms > 99){
        console.log('seconds');
        sec++;
        appendSec.innerHTML = '0' + sec;
        ms = 0;
        appendMs.innerHTML = '0' + 0;
    }

    if(sec > 9){
        appendSec.innerHTML = sec;
    }

    if(sec > 59){
        min++;
        appendMin.innerHTML = '0' + min;
        sec = 0;
        appendSec.innerHTML = '0' + 0;       
    }

    if(min > 9){
        appendMin.innerHTML = min;
    }
        
}





