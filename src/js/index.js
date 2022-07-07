'Use Strict'
let b="";
let c="";
const a= document.querySelector(".pokeInfo");
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let num1 = "";

function crearHabilidades(ress){
    for (let i = 0; i < ress.abilities.length; i++) {
        b += `<p class="poke_habilidad">${ress.abilities[i].ability.name}</p>`;
    }

    return b;
}
function crearTipo(ress){
    for (let i = 0; i < ress.types.length; i++) {
        c += `<p class="poke_tipo ${ress.types[i].type.name}">${ress.types[i].type.name}</p>`;
    }

    return c;
}
function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}


fetch(url)
    .then(res => res.json())
    .then(res => {
        if(num1 == null || num1 == ""){
            num1 = Math.floor(Math.random() * (905 - 1) + 1);
            console.log(num1)
        }
        const url2 = res.results[num1].url;
        fetch(url2)
            .then(res => res.json())
            .then(res =>  {
                b= crearHabilidades(res);
                c= crearTipo(res);
                d = zfill(res.id, 3);
                a.innerHTML= 
                `<div class="sprite ${res.types[0].type.name}">
                    <img src="${res.sprites.front_default}" alt="pokemon">
                </div>
                <div class="info">
                    <div class="poke_info">
                        <p class="poke_nombre">${res.species.name}</p>
                        <p class="poke_id">${d}</p>
                    </div>
                    <div class="tipo">
                    ${c}
                    </div>
                    <div class="habilites">
                    ${b}
                    </div>
                    
                </div>`})
    })


    
