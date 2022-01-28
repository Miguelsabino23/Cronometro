var seg=0
var min=0
var hr=0

var interval

function doisdigitos(digito){
    if(digito<10){
        return('0' + digito)
    }
    else{
        return(digito)
    }
}

function iniciar() {
  relogio()
  interval =  setInterval(relogio, 1000)
}

function pausar() {
    clearInterval(interval)
}

function parar() {
    clearInterval(interval)
    seg=0
    min=0
    document.getElementById('cronometro').innerHTML='00:00:00'
}

function relogio() {
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('cronometro').innerHTML= doisdigitos(hr) + ':' + doisdigitos(min) + ':' + doisdigitos(seg);
}