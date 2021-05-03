function rain(){
    const rain = document.createElement('div')

    rain.classList.add('rain')

    rain.style.left = Math.random() * 100 + 'vw'

    rain.style.amationDuration = Math.random() * 2 + 3 + 's'

    rain.innerText = ':droplet:'

    document.body.appendChild(rain)
}

setInterval(rain, 300)