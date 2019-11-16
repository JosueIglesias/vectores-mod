//Ejemplo 1
var btn01 = document.querySelector('#btnEjemplo01')

btn01.addEventListener('click',() => {
    //se declara el vector
    let v1 = []
    let v2 = new Array(9, 3, 6, 8, 3)
    let v3 = Array(4)

    //Asignar valores
    v1[0] = 'Juan Perez'
    v1[1] = 'María Ramos'
    v1[2] = 'Jesús Ivan'

    v3[0] = 'Hola'
    v3[2] = 'Mundo'

    //Imprimir en consola
    console.log(v1)
    console.log(v2)
    //console.log(v3)

    //Mostrar  contenido del vector
    for(let i=0; i < 3 ; i++){
        console.log(v1[i])
    }

    let tabla = document.querySelector('#tabla01')
    tabla.textContent = ''
    for (let i = 0; i < 3; i++) {
        let row = tabla.insertRow(-1)
        let col01 = row.insertCell(0)
        let col02 = row.insertCell(1)

        col01.textContent = i
        col02.textContent = v1[i]
    }

})

 //Ejemplo 2

 var btn02 = document.querySelector('#btnEjemplo02')

 btn02.addEventListener('click', () => {
    let v1 = new Array(5)
    let tabla = document.querySelector('#tabla02')
    tabla.textContent= ''
    for(let indice = 0; indice < 5; indice++) {
         v1[indice] = prompt('Ingresa un numero')
     }

     for(let indice = 0 ; indice<5; indice ++) {
         let renglon = tabla.insertRow(-1)
         let col01 = renglon.insertCell(0)
         let col02 = renglon.insertCell(1)

         col01.textContent = indice
         col02.textContent = v1[indice]

     }

 })

 //Ejemplo 3 

 var btn03 = document.querySelector('#btnEjemplo03')
 var numero03 = document.querySelector('#numero03')
 var tabla03 = document.querySelector('#tabla03')

 btn03.addEventListener('click', () => {
     let num = Number(numero03.value)
     let v1 = new Array
     let i = 0
     while (i<num) {
         v1[i] = prompt('ingresa un numerito')
         i++
     } 

     let indice = 0

     while (indice < num) {
         let fila = tabla03.insertRow(-1)
         let celda1 = fila.insertCell(0)
         let celda2 = fila.insertCell(1)
         celda1.textContent = indice
         celda2.textContent = v1[indice]
         indice++
     }
    
 })

 //Ejemplo 4
 var btn04 = document.querySelector('#btnEjemplo04')
 var numero04 = document.querySelector('#numero04')
 var tabla1 = document.querySelector('#tabla04A')
 var tabla2 = document.querySelector('#tabla04B')

 btn04.addEventListener('click', () => {
    let num = Number(numero04.value)
    let i = 0
    let vPar = new Array 
    let vImpar = new Array
    indicePar = 0
    indiceImpar = 0
    if (num <= 15 ) {
        while(i<num){
            let ran = Math.trunc(Math.random() * 100) + 100
            if (ran % 2 === 0){
                vPar[indicePar] = ran
                let fila = tabla04B.insertRow(-1)
                let celda1 = fila.insertCell(0)
                let celda2 = fila.insertCell(1)
                celda1.textContent = indicePar
                celda2.textContent = vPar[indicePar]
                indicePar++
            } else {
                vImpar[indiceImpar] = ran
                let fila = tabla04A.insertRow(-1)
                let celda1 = fila.insertCell(0)
                let celda2 = fila.insertCell(1)
                celda1.textContent = indiceImpar
                celda2.textContent = vImpar[indiceImpar]
                indiceImpar++
            }
    
            i++
        }
        
    }
    else {
        alert('El número debe ser menor o igual 15')
    }

    

 })