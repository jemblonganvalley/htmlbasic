
//kita buat sebuah fungsi yang akan 
//memunculkan MODAL

const showModal = ()=>{

    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    //kita atus STYLE dari element tersebut
    //jadikan dia terlihat
    modal.style.display = 'flex'

}

//kita buat fungsi untuk hide element
const hideModal = ()=>{
    //kita ambil element yang akan di SHOW
    let modal = document.querySelector('.modalMenu')

    //kita atus STYLE dari element tersebut
    //jadikan dia tersembunyi
    modal.style.display = 'none'
}

const closeAlert = ()=>{
    let aboutAlert = document.querySelector('.aboutAlert')

    aboutAlert.style.display = 'none'
}