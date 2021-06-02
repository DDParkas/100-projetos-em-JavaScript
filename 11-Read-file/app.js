
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')


const upload = () =>{
    let files = input.files

    if(files.length == 0) return

    const file = files[0]

    let reader = new FileReader()

    reader.onload = e =>{
        const file  = e.target.result
        const lines = file.split(/\r\n|\n/)
        textarea.value = lines.join('\n')
    
    }
    reader.onerror = e => alert(e.target.error.name)
    
    reader.readAsText(file)

}



input.addEventListener('change', upload)


// read file 
