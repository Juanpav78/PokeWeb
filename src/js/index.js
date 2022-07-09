'Use Strict'
let b="";
let c="";
let existe=true;
const a= document.querySelector(".pokeInfo");
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let num1 = "";
let missigno =[
    "build/img/missigno1.png",
    "build/img/missigno2.png",
    "build/img/missigno3.png",
    "build/img/missigno4.png"
]

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
                <img src="${res.sprites.front_default == null ? missigno[(Math.floor(Math.random() * (4 - 0)))] : res.sprites.front_default }" alt="pokemon">
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

function getValue(ress){
    const inputPokemon = document.getElementById("valorDeBusqueda") ;
    let valor =parseInt(inputPokemon.value);
    resultado ="";
    if(isNaN(valor)){
        let valorNombre = inputPokemon.value;
        let nombre = valorNombre.toLowerCase();
        let  i= 0;
        let auxString ="", auxString2="";
        while(true){
            auxString= ress.results[i].name;
            auxString2="";
            for (let i = 0; i < auxString.length; i++) {
                let a = auxString[i];
                if (a=="-" ){
                    break;
                }
                auxString2+=a;
                
            }

            if(nombre == auxString2 || nombre == auxString){
                existe=true;
                break;
            }

            if(i>905){
                i=984;
                existe=false;
                break;
            }
            
            i++;
        }
        valor= i;
        resultado = valor;

    }else if(valor<=0 || valor > 905){
        existe=false;
        valor=984;
        resultado =valor;
    }else{
        existe=true;
        valor=valor-1;
        resultado =valor;
    }

    return resultado;

}



function Actualizar(random =false){
    
    fetch(url)
    .then(res => res.json())
    .then(res => {
        
        if (random == true){
            valor = Math.floor(Math.random() * (905 - 1) + 1);
            existe = true;
        }else{
            valor= getValue(res);
        }
        const url2 = res.results[valor].url;
        fetch(url2)
            .then(res => res.json())
            .then(res =>  {
                b= crearHabilidades(res);
                c= crearTipo(res);
                d = zfill(res.id, 3);

                if(existe){


                    a.innerHTML= 
                    `<div class="sprite ${res.types[0].type.name}">
                        <img src="${res.sprites.front_default == null ? missigno[(Math.floor(Math.random() * (4 - 0)))] : res.sprites.front_default }" alt="pokemon">
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
                        
                    </div>`
                }else{
                    a.innerHTML= 
                    `<div class="sprite ${res.types[0].type.name}">
                        <img src="${res.sprites.front_default}" alt="pokemon">
                    </div>
                    <div class="info">
                        <div class="poke_info">
                            <p class="poke_nombre">No existe ese pokemon</p>
                            <p class="poke_id">---</p>
                        </div>
                        <div class="tipo">
                        <p class="poke_tipo ${res.types[0].type.name}">Ninguno</p>
                        </div>
                        <div class="habilites">
                        <p class="poke_habilidad">Ninguna</p>
                        <p class="poke_habilidad">Ninguna</p>
                        <p class="poke_habilidad">Ninguna</p>
                        <p class="poke_habilidad">Ninguna</p>
                        </div>
                        
                    </div>`
                }
                })
    })
    c="";
    b="";
}

var input = document.getElementById("valorDeBusqueda");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnBuscar").click();
  }
});
