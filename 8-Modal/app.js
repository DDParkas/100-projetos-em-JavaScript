const modal = document.getElementById('modal')
const active = document.getElementById('active-modal')


const initModal = () => {

    modal.classList.add('display')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'modal' || e.target.id == 'close'){
            modal.classList.remove('display')
        }
    })
}


active.addEventListener('click', initModal)