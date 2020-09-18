// SELECT elemen div.container
let con = document.querySelector('.container')

//INJECT con dengan div.card
con.innerHTML += `

    <div class='card'>
        <h3>Card 1</h3>
        <p>ini adalah card 1</p>
    </div>

`

con.innerHTML += `

    <div class='card'>
        <h3>Card 2</h3>
        <p>ini adalah card 2</p>
    </div>

`

con.innerHTML += `

    <div class='card'>
        <h3>Card 2</h3>
        <p>ini adalah card 2</p>
    </div>

`