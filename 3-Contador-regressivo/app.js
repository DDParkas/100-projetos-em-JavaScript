let daySpace = document.getElementById('days')
let hourSpace = document.getElementById('hours')
let minuteSpace = document.getElementById('minutes')
let secondSpace = document.getElementById('seconds')

let dayValue = document.getElementById('inputDay')
let hourValue = document.getElementById('inputHour')
let minuteValue = document.getElementById('inputMinute')
let secondValue = document.getElementById('inputSecond')

let alert = document.getElementById('alert')

var cliecked = false

const init = () =>{
    if(!cliecked){
        cliecked = true
        var day = dayValue.value
        var hour = hourValue.value
        var minute = minuteValue.value
        var second = secondValue.value
        if( day !== '' && hour !== '' && minute !== '' && second !== ''){
            var day = parseInt(dayValue.value)
            var hour = parseInt(hourValue.value)
            var minute = parseInt(minuteValue.value)
            var second = parseInt(secondValue.value)
            if(day > 7){ 
                alert.innerHTML = ' <p>Só temos suporte para o máximo de 7 dias :c </p>'
                cliecked = false
            }
            else{
                daySpace.textContent = day
                hourSpace.textContent = hour
                minuteSpace.textContent = minute
                secondSpace.textContent = second
            
                var totalTime = second + (minute * 60) + ( hour * 60 * 60) + (day * 24 * 60 * 60 )

                i = totalTime + 1
                while (i > 0) {
                    task(i);
                    i--;
                }
                function task(i) {
                    setTimeout(function () {   
                        if (second > 0){
                            second--
                            secondSpace.textContent = second
                        }
                        else if (minute > 0){
                            minute--
                            minuteSpace.textContent = minute
                            second = 59
                            secondSpace.textContent = second
                        }
                        else if(hour > 0){
                            hour--
                            hourSpace.textContent = hour
                            minute = 59
                            second = 59
                            minuteSpace.textContent = minute
                            secondSpace.textContent = second
                        }
                        else if(day > 0){
                            day--
                            daySpace.textContent = day
                            hour = 23
                            minute = 59
                            second = 59
                            hourSpace.textContent = hour
                            minuteSpace.textContent = minute
                            secondSpace.textContent = second
                        }
                        else {
                            console.log('tempo terminou')
                            cliecked = false                        
                        }
                    }, 1000 * i)
                }
            }
        }
        else{
            alert.innerHTML =' <p>preencha todos os campos pode ser com zeros :) </p>'
            cliecked = false
        }
    }
}

document.querySelector('#init').addEventListener('click', init)
