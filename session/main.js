

//Kita buat sebuah function
//yang akan menghandle submit register

const register = ()=>{

    //kita tampung semua isian form
    //di dalam variable
    
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    console.log(`
username : ${username}
email : ${email}
password : ${password}
    `)

    //munculkan peringatan berhasil
    alert(`username : ${username} berhasil didaftarkan..`)

    // menyimpan data dari user ke Session Storage
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('email', email)
    sessionStorage.setItem('password', password)

    //lempar user ke page login
    window.location.href = 'index.html'

}

const login = ()=>{
    //mendapatkan input dari user
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    //mendapatkan data yang tersimpan di Session Storage
    let dbus = sessionStorage.getItem('username')
    let dbpass = sessionStorage.getItem('password')

    //validasi
    if(username === dbus && password === dbpass){
        alert(`selamat datang ${username}`)

        //buat trigger ke database apabila user sudah login
        sessionStorage.setItem('isLogin', true)

        //lempar user ke page home
        window.location.href = 'home.html'

    }else{
        alert('check kembali username / password anda..')
    }

}

const logout = ()=>{

    // hapus semua data di session
    sessionStorage.clear()

    //lempar kembali ke login
    window.location.href = 'index.html'



}