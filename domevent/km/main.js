

//kita buat sebuah fungsi untuk
//memunculkan MODAL

const showModal = ()=>{
    //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'flex'

}

const closeModal = ()=>{
  //kita dapatkan element MODAL
    //yang mau di munculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'none'

}

