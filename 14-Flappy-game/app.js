var pipe = document.getElementById('pipe')
var hole = document.getElementById('hole')
var bird = document.getElementById('bird')
var game = document.getElementById('game')
var jumping = false
var score = 0

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150)
    hole.style.top = random + 'px'
    score++
    
})


const birdFunction = () =>{
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
    
    if( jumping == false){
        bird.style.top = (birdTop + 3) + 'px'
    }
   
    var blockLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500 - birdTop);
    if ((birdTop > 480) || ((blockLeft < 30) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        alert("game over")
        bird.style.top = 50 + "px"
    }

    
}
var fall = setInterval(birdFunction, 10)

const jump = () => {
    jumping = true
    let count = 0
    var jumpingInterval  = setInterval(function(){
        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue('top'))
        if((birdTop > 6) && (count < 15)){
            bird.style.top = (birdTop - 3 ) + 'px'
        }
        if (count > 20) {
           clearInterval(jumpingInterval)
           jumping = false
           count = 0
        }
        count++
        
    },10)
}



game.addEventListener('click', jump)