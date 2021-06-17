const download = (filename, text) =>{
    let item = document.createElement('a')
    item.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    item.setAttribute('download', filename)

    item.style.display = none
    document.body.appendChild(item)
    console.log(item)
    item.click()
    document.body.removeChild(item)

    // gera esse codigo no html
    //< a href = "data:text/plain;charset=utf-8, teste" download = 'filename' > teste</a >

}

document.getElementById('btn').addEventListener("click", function(){
    var txt = document.getElementById("text").value
    var filename = "download.txt"
    download(filename, txt)
}, false)

const frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("malandro")); // 23
console.log(frase.indexOf("teste")); // -1