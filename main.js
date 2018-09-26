var arregloImg = ['img-pokemon\\abra.svg','img-pokemon\\backpack.svg', 'img-pokemon\\bellsprout.svg', 'img-pokemon\\bullbasur.svg', 'img-pokemon\\candy.svg', 
'img-pokemon\\caterpie.svg', 'img-pokemon\\charmander.svg', 'img-pokemon\\clock.svg', 'img-pokemon\\compass.svg', 'img-pokemon\\crown.svg', 'img-pokemon\\dratini.svg', 
'img-pokemon\\eevee.svg', 'img-pokemon\\egg.svg', 'img-pokemon\\heart.svg', 'img-pokemon\\hyper-potion.svg', 'img-pokemon\\incense.svg', 'img-pokemon\\instinct.svg', 
'img-pokemon\\jigglypuff.svg', 'img-pokemon\\lucky-egg', 'img-pokemon\\lure-module', 'img-pokemon\\mankey.svg', 'img-pokemon\\map-svg', 'img-pokemon\\mega-ball.svg',
'img-pokemon\\meowth.svg', 'img-pokemon\\mew.svg', 'img-pokemon\\pidgey.svg', 'img-pokemon\\pikachu.svg', 'img-pokemon\\player-1.svg', 'img-pokemon\\player.svg',
'img-pokemon\\pokebag.svg', 'img-pokemon\\pokedex.svg', 'img-pokemon\\potion.svg', 'img-pokemon\\psyduck.svg', 'img-pokemon\\rattata.svg', 'img-pokemon\\razz-berry.svg',
'img-pokemon\\revive.svg', 'img-pokemon\\snorlax.svg', 'img-pokemon\\squirtle.svg', 'img-pokemon\\super-potion.svg', 'img-pokemon\\superball.svg', 'img-pokemon\\ultraball.svg',
'img-pokemon\\venonat.svg', 'img-pokemon\\weedle.svg', 'img-pokemon\\zubat.svg',
//
'img-pokemon\\abra.svg','img-pokemon\\backpack.svg', 'img-pokemon\\bellsprout.svg', 'img-pokemon\\bullbasur.svg', 'img-pokemon\\candy.svg', 
'img-pokemon\\caterpie.svg', 'img-pokemon\\charmander.svg', 'img-pokemon\\clock.svg', 'img-pokemon\\compass.svg', 'img-pokemon\\crown.svg', 'img-pokemon\\dratini.svg', 
'img-pokemon\\eevee.svg', 'img-pokemon\\egg.svg', 'img-pokemon\\heart.svg', 'img-pokemon\\hyper-potion.svg', 'img-pokemon\\incense.svg', 'img-pokemon\\instinct.svg', 
'img-pokemon\\jigglypuff.svg', 'img-pokemon\\lucky-egg', 'img-pokemon\\lure-module', 'img-pokemon\\mankey.svg', 'img-pokemon\\map-svg', 'img-pokemon\\mega-ball.svg',
'img-pokemon\\meowth.svg', 'img-pokemon\\mew.svg', 'img-pokemon\\pidgey.svg', 'img-pokemon\\pikachu.svg', 'img-pokemon\\player-1.svg', 'img-pokemon\\player.svg',
'img-pokemon\\pokebag.svg', 'img-pokemon\\pokedex.svg', 'img-pokemon\\potion.svg', 'img-pokemon\\psyduck.svg', 'img-pokemon\\rattata.svg', 'img-pokemon\\razz-berry.svg',
'img-pokemon\\revive.svg', 'img-pokemon\\snorlax.svg', 'img-pokemon\\squirtle.svg', 'img-pokemon\\super-potion.svg', 'img-pokemon\\superball.svg', 'img-pokemon\\ultraball.svg',
'img-pokemon\\venonat.svg', 'img-pokemon\\weedle.svg', 'img-pokemon\\zubat.svg']

var contAciertos = 0
var imgSeleccionada
var arregloGanadores = new Array()
var contSeg = 0
var cont = 0
var tiempoDeJuego

function mostrarImagen(idImg){
    var i
    i = arregloImg.indexOf(idImg)
    document.getElementById(idImg).src = arregloImg[i]
    if(cont == 0){
        tiempoDeJuego = window.setInterval(function(){
            contSeg++
            cont++
        },1000)
    }
}

function voltearImagenesDesiguales(idImg, imgSelecc){
    document.getElementById(idImg).src = 'img-pokemon\\pokeball.svg'
    document.getElementById(imgSelecc).src = 'img-pokemon\\pokeball.svg'
}

function jugar(idImg){
    console.log(idImg)
    console.log(arregloImg[0])
    if(imgSeleccionada == null){
        imgSeleccionada = idImg
        mostrarImagen(idImg)
    }
    else{
        if(arregloImg.indexOf(imgSeleccionada) > -1){
            contAciertos++
            imgSeleccionada = null
            if(contAciertos == 45){
                clearInterval(tiempoDeJuego)
                document.getElementById('aviso').innerHTML = 'Felicidades usted ha ganado!'
                document.getElementById('staticPuntaje').value = tiempoDeJuego
            }
        }
        else{
            window.setTimeout(voltearImagenesDesiguales, 1000, idImg, imgSeleccionada)
            imgSeleccionada = null
        }
    }
}

function desordenar(arr) {
    var i
        j
        temp
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr    
}

function registrarGanador(nom){
    arregloGanadores.push([nom, tiempoDeJuego])
}

function mostrarGanadores(){
    var ganadoresPuntajes = ''
    if(arregloGanadores.length > -1)
    {
        for (i = 0; i < arregloGanadores.length; i++) {
            ganadoresPuntajes += arregloDeOperaciones[i]            
        }
        document.getElementById("staticGanadores").value = ganadoresPuntajes
    }
}