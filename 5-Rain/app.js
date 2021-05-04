function rain(){
    const rain = document.createElement('div')

    rain.classList.add('rain')

    rain.style.left = Math.random() * 100 + 'vw'

    rain.style.amationDuration = Math.random() * 2 + 3 + 's'

    rain.innerHTML = '&#128167;'

    document.body.appendChild(rain)

    setTimeout(() => {
        rain.remove()
    }, 5000)
}

setInterval(rain, 300)