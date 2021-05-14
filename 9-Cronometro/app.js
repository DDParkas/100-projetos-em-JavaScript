const counterText = document.getElementById('counter')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const stopButton = document.getElementById('stop')

var hour = 0
var minute = 0
var second = 0
var mill = 1000

var counter 

var validate = true

const start = () =>{
    if(validate){
        counter = setInterval(timer, mill)
        validate = false
    }
}
const pause = () =>{
    clearInterval(counter)
    validate = true
}

const reset = () =>{
    pause()
    hour = 0
    minute = 0
    second = 0
    counterText.innerText = '00:00:00'
    
}

const timer = () =>{

    second++
    if(second == 59){
        second = 0
        minute++
        if(minute == 59){
            minute = 0
            hour++
        }
    }

    time = (hour < 10 ? '0' + hour : hour ) + ':' + (minute < 10 ? '0' + minute : minute )+ ':' + (second < 10 ? '0' + second : second)
    counterText.innerText = time
}

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', reset)