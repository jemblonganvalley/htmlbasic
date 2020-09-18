
    //Pendeklarasian Variable
    let name = "fadliselaz"

    //kenapa kita butuh variable..???
    // Sebagai alias code yang panjang dan bisa di panggil dimana saja 

    //Tipe data
    //STRING INTEGER BOOLEAN ARRAY OBJECT 

    // >>> S T R I N G <<<
    // " DOUBLE QUOTES "
    // ' SINGLE QUOTES '
    // ` BACKTICK `

    let dq = "selamat datang fadli <br />"
    let sq = 'selamat datang evalia <br />'
    let bt = `selamat datang ayu <br />`
    
    let mix = ' Selamat datang "fadliselaz" `Evalia`  <br /> '
    let btMl = `
         backtick mempunyai kemampuan untuk <br />
         <b style="color : red;">menulis string secara MULTILINE </b><br />
         tidak seperti String dengan Quotes <br />
         lainnya...
    `

    //document.write(dq)
    //document.write(sq)
    //document.write(bt)
    //document.write(mix)
    //document.write(btMl)

    // >>> I N T E G E R <<<
    // integer adalah ANGKA

    /*let age = 25
    let salary = 60000
    let price = 10000
    let days = 26
    let totalSalary = salary * days
    let thisYear = 2020*/

    //STRING LITERAL
    //document.write( "Tahun lahir Fadli adalah : " , thisYear - age  , "<br />" )

    //Concat
    //document.write(` Gaji kamu bulan ini sebesar : ${ totalSalary } `  )


    /*
        buatlah perhitungan Gaji John,
        apabila gaji perjam John senilai 300000
        setiap hari john bisa bekerja selama 6 jam
        dan dalam sebulan john bekerja selama 25 hari

        Hitung logic dari variable JS untuk 
        total gaji john, yang sudah dikurangi pajak 
        sebanyak 10%

        dan tampilkan ke browser mengunakan STRING LITERAL 
    */

    let perHour = 300000
    let perDay = perHour * 6
    let perMonth = perDay * 25
    let tax = 10 / 100 
    let totalTax = perMonth * tax
    let totalSalary = perMonth - totalTax

    // document.write(` 

    // Gaji John perbulan : ${perMonth}  <br />
    // Total Tax : ${totalTax} <br />
    // Total gaji John :  <b> Rp. ${totalSalary} ,- </b> <br />

    // `)

    //D O M Selector
    // let container = document.getElementById('container')

    let container = document.querySelector('.container')

    let pesan = 'Hallo Bro..'

    container.innerHTML = `
    
        <h1> ${pesan} </h1>
        <small>Baik baik..?</small>
    
    `

    container.innerHTML += `

        <div class="card">
            <h3>Card Title</h3>
            <p>Hello ini title</p>
        </div>
    `

    container.innerHTML += `

        <footer class="footer">
            
            <a href="https://jvalleyschool.com">@jvalley2020</a>

        </footer>
    `

    //MENGUBAH STYLE ELEMENT PADA HTML
    container.style.backgroundColor = 'yellow'
    container.style.width = '100vw'
    container.style.height = '100vh'
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.justifyContent = 'center'
    container.style.alignItems = 'center'

    document.body.style.padding = '0'
    document.body.style.margin = '0'
    document.body.style.overflowX = 'hidden'


    



