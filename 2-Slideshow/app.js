'use strict'

const images = [
    { 'id': '1', 'url': 'images/1.jpg'},
    { 'id': '2', 'url': 'images/2.jpg' },
    { 'id': '3', 'url': 'images/3.jpg' },
    { 'id': '4', 'url': 'images/4.jpg' },
    { 'id': '5', 'url': 'images/5.jpg' },
    { 'id': '6', 'url': 'images/6.jpg' },
    { 'id': '7', 'url': 'images/7.jpg' }
]

const container = document.querySelector('.items')

const loadImages = (images, container) => {
    images.forEach( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages(images, container)

let items = document.querySelectorAll('.item')

const previous = () => {
    container.appendChild(items[0])
    items = document.querySelectorAll('.item')
}
const next = () =>{
    const lastItem = items[items.length - 1]
    container.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', previous)
document.getElementById('next').addEventListener('click', next)



setInterval(previous, 5000)
// += concatena