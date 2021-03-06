var arregloImg = ['img-pokemon\\abra.svg','img-pokemon\\backpack.svg', 'img-pokemon\\bellsprout.svg', 'img-pokemon\\bullbasaur.svg', 'img-pokemon\\candy.svg', 
'img-pokemon\\caterpie.svg', 'img-pokemon\\charmander.svg', 'img-pokemon\\clock.svg', 'img-pokemon\\compass.svg', 'img-pokemon\\crown.svg', 'img-pokemon\\dratini.svg', 
'img-pokemon\\eevee.svg', 'img-pokemon\\egg.svg', 'img-pokemon\\heart.svg', 'img-pokemon\\hyper-potion.svg', 'img-pokemon\\incense.svg', 'img-pokemon\\instinct.svg', 
'img-pokemon\\jigglypuff.svg', 'img-pokemon\\lucky-egg.svg', 'img-pokemon\\lure-module.svg', 'img-pokemon\\mankey.svg', 'img-pokemon\\map.svg', 'img-pokemon\\mega-ball.svg',
'img-pokemon\\meowth.svg', 'img-pokemon\\mew.svg', 'img-pokemon\\pidgey.svg', 'img-pokemon\\pikachu.svg', 'img-pokemon\\player-1.svg', 'img-pokemon\\player.svg',
'img-pokemon\\pokebag.svg', 'img-pokemon\\pokedex.svg', 'img-pokemon\\potion.svg', 'img-pokemon\\psyduck.svg', 'img-pokemon\\rattata.svg', 'img-pokemon\\razz-berry.svg',
'img-pokemon\\revive.svg', 'img-pokemon\\snorlax.svg', 'img-pokemon\\squirtle.svg', 'img-pokemon\\super-potion.svg', 'img-pokemon\\superball.svg', 'img-pokemon\\ultra-ball.svg',
'img-pokemon\\venonat.svg', 'img-pokemon\\weedle.svg', 'img-pokemon\\zubat.svg',

'img-pokemon\\abra.svg','img-pokemon\\backpack.svg', 'img-pokemon\\bellsprout.svg', 'img-pokemon\\bullbasaur.svg', 'img-pokemon\\candy.svg', 
'img-pokemon\\caterpie.svg', 'img-pokemon\\charmander.svg', 'img-pokemon\\clock.svg', 'img-pokemon\\compass.svg', 'img-pokemon\\crown.svg', 'img-pokemon\\dratini.svg', 
'img-pokemon\\eevee.svg', 'img-pokemon\\egg.svg', 'img-pokemon\\heart.svg', 'img-pokemon\\hyper-potion.svg', 'img-pokemon\\incense.svg', 'img-pokemon\\instinct.svg', 
'img-pokemon\\jigglypuff.svg', 'img-pokemon\\lucky-egg.svg', 'img-pokemon\\lure-module.svg', 'img-pokemon\\mankey.svg', 'img-pokemon\\map.svg', 'img-pokemon\\mega-ball.svg',
'img-pokemon\\meowth.svg', 'img-pokemon\\mew.svg', 'img-pokemon\\pidgey.svg', 'img-pokemon\\pikachu.svg', 'img-pokemon\\player-1.svg', 'img-pokemon\\player.svg',
'img-pokemon\\pokebag.svg', 'img-pokemon\\pokedex.svg', 'img-pokemon\\potion.svg', 'img-pokemon\\psyduck.svg', 'img-pokemon\\rattata.svg', 'img-pokemon\\razz-berry.svg',
'img-pokemon\\revive.svg', 'img-pokemon\\snorlax.svg', 'img-pokemon\\squirtle.svg', 'img-pokemon\\super-potion.svg', 'img-pokemon\\superball.svg', 'img-pokemon\\ultra-ball.svg',
'img-pokemon\\venonat.svg', 'img-pokemon\\weedle.svg', 'img-pokemon\\zubat.svg']
//
/*'img-pokemon\\abra1.svg','img-pokemon\\backpack1.svg', 'img-pokemon\\bellsprout1.svg', 'img-pokemon\\bullbasaur1.svg', 'img-pokemon\\candy1.svg', 
'img-pokemon\\caterpie1.svg', 'img-pokemon\\charmander1.svg', 'img-pokemon\\clock1.svg', 'img-pokemon\\compass1.svg', 'img-pokemon\\crown1.svg', 'img-pokemon\\dratini1.svg', 
'img-pokemon\\eevee1.svg', 'img-pokemon\\egg1.svg', 'img-pokemon\\heart1.svg', 'img-pokemon\\hyper-potion1.svg', 'img-pokemon\\incense1.svg', 'img-pokemon\\instinct1.svg', 
'img-pokemon\\jigglypuff1.svg', 'img-pokemon\\lucky-egg1.svg', 'img-pokemon\\lure-module1.svg', 'img-pokemon\\mankey1.svg', 'img-pokemon\\map1.svg', 'img-pokemon\\mega-ball1.svg',
'img-pokemon\\meowth1.svg', 'img-pokemon\\mew1.svg', 'img-pokemon\\pidgey1.svg', 'img-pokemon\\pikachu1.svg', 'img-pokemon\\player-11.svg', 'img-pokemon\\player1.svg',
'img-pokemon\\pokebag1.svg', 'img-pokemon\\pokedex1.svg', 'img-pokemon\\potion1.svg', 'img-pokemon\\psyduck1.svg', 'img-pokemon\\rattata1.svg', 'img-pokemon\\razz-berry1.svg',
'img-pokemon\\revive1.svg', 'img-pokemon\\snorlax1.svg', 'img-pokemon\\squirtle1.svg', 'img-pokemon\\super-potion1.svg', 'img-pokemon\\superball1.svg', 'img-pokemon\\ultra-ball1.svg',
'img-pokemon\\venonat1.svg', 'img-pokemon\\weedle1.svg', 'img-pokemon\\zubat1.svg']*/

var contAciertos = 0
var imgSeleccionada = null
var arregloGanadores = new Array()
var contSeg = 0
var cont = 0
var tiempoDeJuego
arregloImg = desordenar(arregloImg)

function mostrarImagen(idImg){
    document.getElementById("img"+idImg).src = arregloImg[idImg-1]
    if(cont == 0){
        tiempoDeJuego = window.setInterval(function(){
            contSeg++
            cont++
        },1000)
    }
}

function voltearImagenesDesiguales(idImg, imgSelecc){
    document.getElementById("img"+idImg).src = 'img-pokemon\\pokeball.svg'
    document.getElementById("img"+imgSelecc).src = 'img-pokemon\\pokeball.svg'
}

function jugar(idImg){
    console.log(idImg)
    console.log(arregloImg[0])
    if(imgSeleccionada == null){
        imgSeleccionada = idImg
        mostrarImagen(idImg)
    }
    else{
        mostrarImagen(idImg)
        if(arregloImg[idImg-1] == arregloImg[imgSeleccionada-1]){
            contAciertos++
            imgSeleccionada = null
            if(contAciertos == 42){
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
    var j
    var temp
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
            ganadoresPuntajes += arregloGanadores[i]            
        }
        document.getElementById("staticGanadores").value = ganadoresPuntajes
    }
}