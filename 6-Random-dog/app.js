// const aPromise = new Promise((resolve, reject) => {
//     const aNumber = 39
//     const hnumber = 41
//     const resultado = aNumber + hnumber
//     resolve(resultado)
// })
// aPromise.then(value => {
//     console.log(value)
// })

const url = 'https://dog.ceo/api/breeds/image/random'
const dog = document.getElementById('dog')


const validadeHTTPStatus = dogData => {
    if (!dogData.ok) {
        throw new Error(`HTTP error, status ${dogData.status}`)
    }
    return dogData.json()
}

fetch(url)
    .then(validadeHTTPStatus)
    .then(({message}) => {
        dog.innerHTML =  `<img src='${message}'>`
    })
    .catch(error =>{
        console.log(error.message)
    })