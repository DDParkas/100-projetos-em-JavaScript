const button = document.getElementById('button')
const box =  document.getElementById('box')


const notification = () =>{
    const notice = document.createElement('div')
    notice.classList.add('notice')
    notice.innerText = 'Fui clicado'
    box.appendChild(notice)

    setTimeout(() => {notice.remove()}, 3000)
}


button.addEventListener('click', notification)

