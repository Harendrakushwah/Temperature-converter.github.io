let celInput = document.querySelector('#cel > input')
let fahInput = document.querySelector('#fah > input')
let kelInput = document.querySelector('#kel > input')

let btn = document.querySelector('.button button')


function roundNum(num){
    return Math.round(num*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celInput.addEventListener('input', function(){
    let celTemp = parseFloat(celInput.value)
    let fahTemp = (celTemp*(9/5)) + 32
    let kelTemp = celTemp + 273.15

    fahInput.value = roundNum(fahTemp)
    kelInput.value = roundNum(kelTemp)
})


/* Fahrenheit to Celcius and Kelvin */
fahInput.addEventListener('input', function(){
    let fahTemp = parseFloat(fahInput.value)
    let celTemp = (fahTemp - 32) * (5/9)
    let kelTemp = (fahTemp -32) * (5/9) + 273.15

    celInput.value = roundNum(celTemp)
    kelInput.value = roundNum(kelTemp)
})

/* Kelvin to Celcius and Fahrenheit */
kelInput.addEventListener('input', function(){
    let kelTemp = parseFloat(kelInput.value)
    let celTemp = kelTemp - 273.15
    let fahTemp = (kelTemp - 273.15) * (9/5) + 32

    celInput.value = roundNum(celTemp)
    fahInput.value = roundNum(fahTemp)
})


btn.addEventListener('click', ()=>{
    celInput.value = ""
    fahInput.value = ""
    kelInput.value = ""
})