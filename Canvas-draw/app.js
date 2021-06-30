window.addEventListener('load', () => {
    //canvas
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    //layout
    canvas.height = window.innerHeight -100
    canvas.width = window.innerWidth -100
    window.addEventListener('resize', ()=>{
        canvas.height = window.innerHeight -100
        canvas.width = window.innerWidth -100
    })
    //painting
    let painting = false

    const startPosition = (e) =>{
        painting = true
        draw(e)
    }
    const finishedPosition = ()=>{
        painting = false
        context.beginPath()
    }
    const draw = (e) =>{
        if(!painting){
            return
        }
        context.lineWidth = 10
        context.lineCap = 'round'

        context.lineTo(e.clientX, e.clientY)
        context.stroke()
        context.beginPath()
        context.moveTo(e.clientX, e.clientY)
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})
