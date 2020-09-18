
// alert('mantab bro.. sudah terhubung')


// SELECTOR PADA JAVASCRIPT
// SELECTOR CLASS
//document.getElementsByClassName( 'textOne' )

//SELECTOR ID
//document.getElementById('textTwo')

//SELECTOR TAG
//document.getElementsByTagName('h3')

// SELETOR Query
//document.querySelector('.textOne')
//document.querySelector('#textTwo')
//document.querySelector('h3')

let textOne = document.querySelector('.textOne')

console.log(textOne)


// manipulasi styling
textOne.style.color = 'red'

//manipulasi content
textOne.innerHTML = "Hacked.."




let h3 = document.querySelector('h3')
h3.style.color = "cyan"
h3.innerHTML = "H A C K E D . . . "

// document.body.style.backgroundColor = 'black'

let con = document.querySelector('.container')

con.innerHTML += `

    <h1 style="color : red;">
        hayo lu...
    </h1>

`

const tanya = ()=> {

    let tanyaNama = prompt('Siapakah nama mantan kamu ?')
    alert(`Nama mantan kamu adalah : ${tanyaNama}`)

}

// tanya()

const changeText = ()=>{

    let textTwo = document.querySelector('#textTwo')
    textTwo.style.color = "orange"
    textTwo.innerHTML = "H A C K E D . . . "

}




