let b="",c="",existe=!0;const a=document.querySelector(".pokeInfo"),url="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";let num1="";function crearHabilidades(e){for(let n=0;n<e.abilities.length;n++)b+=`<p class="poke_habilidad">${e.abilities[n].ability.name}</p>`;return b}function crearTipo(e){for(let n=0;n<e.types.length;n++)c+=`<p class="poke_tipo ${e.types[n].type.name}">${e.types[n].type.name}</p>`;return c}function zfill(e,n){var t=Math.abs(e),i=e.toString().length;return n<=i?e<0?"-"+t.toString():t.toString():e<0?"-"+"0".repeat(n-i)+t.toString():"0".repeat(n-i)+t.toString()}function getValue(e){const n=document.getElementById("valorDeBusqueda");let t=parseInt(n.value);if(resultado="",isNaN(t)){let i=n.value.toLowerCase(),a=0,s="",o="";for(;;){s=e.results[a].name,o="";for(let e=0;e<s.length;e++){let n=s[e];if("-"==n)break;o+=n}if(i==o||i==s){existe=!0;break}if(a>905){a=984,existe=!1;break}a++}t=a,resultado=t}else t<=0?(existe=!1,t=984,resultado=t):(t-=1,resultado=t);return resultado}function Actualizar(e=!1){fetch(url).then(e=>e.json()).then(n=>{1==e?(valor=Math.floor(904*Math.random()+1),existe=!0):valor=getValue(n);const t=n.results[valor].url;fetch(t).then(e=>e.json()).then(e=>{b=crearHabilidades(e),c=crearTipo(e),d=zfill(e.id,3),a.innerHTML=existe?`<div class="sprite ${e.types[0].type.name}">\n                        <img src="${e.sprites.front_default}" alt="pokemon">\n                    </div>\n                    <div class="info">\n                        <div class="poke_info">\n                            <p class="poke_nombre">${e.species.name}</p>\n                            <p class="poke_id">${d}</p>\n                        </div>\n                        <div class="tipo">\n                        ${c}\n                        </div>\n                        <div class="habilites">\n                        ${b}\n                        </div>\n                        \n                    </div>`:`<div class="sprite ${e.types[0].type.name}">\n                        <img src="${e.sprites.front_default}" alt="pokemon">\n                    </div>\n                    <div class="info">\n                        <div class="poke_info">\n                            <p class="poke_nombre">No existe ese pokemon</p>\n                            <p class="poke_id">---</p>\n                        </div>\n                        <div class="tipo">\n                        <p class="poke_tipo ${e.types[0].type.name}">Ninguno</p>\n                        </div>\n                        <div class="habilites">\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        </div>\n                        \n                    </div>`})}),c="",b=""}fetch(url).then(e=>e.json()).then(e=>{null!=num1&&""!=num1||(num1=Math.floor(904*Math.random()+1));const n=e.results[num1].url;fetch(n).then(e=>e.json()).then(e=>{b=crearHabilidades(e),c=crearTipo(e),d=zfill(e.id,3),a.innerHTML=`<div class="sprite ${e.types[0].type.name}">\n                    <img src="${e.sprites.front_default}" alt="pokemon">\n                </div>\n                <div class="info">\n                    <div class="poke_info">\n                        <p class="poke_nombre">${e.species.name}</p>\n                        <p class="poke_id">${d}</p>\n                    </div>\n                    <div class="tipo">\n                    ${c}\n                    </div>\n                    <div class="habilites">\n                    ${b}\n                    </div>\n                    \n                </div>`})});var input=document.getElementById("valorDeBusqueda");input.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),document.getElementById("btnBuscar").click())})),function(e,n,t){function i(e,n){return typeof e===n}function a(e){var n=c.className,t=A._config.classPrefix||"";if(d&&(n=n.baseVal),A._config.enableJSClass){var i=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(i,"$1"+t+"js$2")}A._config.enableClasses&&(n+=" "+t+e.join(" "+t),d?c.className.baseVal=n:c.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)p(e,t)&&s(t,e[t]);else{var i=(e=e.toLowerCase()).split("."),o=A[i[0]];if(2==i.length&&(o=o[i[1]]),void 0!==o)return A;n="function"==typeof n?n():n,1==i.length?A[i[0]]=n:(!A[i[0]]||A[i[0]]instanceof Boolean||(A[i[0]]=new Boolean(A[i[0]])),A[i[0]][i[1]]=n),a([(n&&0!=n?"":"no-")+i.join("-")]),A._trigger(e,n)}return A}var o=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout((function(){n(t[e])}),0)},addTest:function(e,n,t){l.push({name:e,fn:n,options:t})},addAsyncTest:function(e){l.push({name:null,fn:e})}},A=function(){};A.prototype=r,A=new A;var p,c=n.documentElement,d="svg"===c.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;p=i(e,"undefined")||i(e.call,"undefined")?function(e,n){return n in e&&i(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),A.hasOwnProperty(e)&&setTimeout((function(){A._trigger(e,A[e])}),0)},r._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout((function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)}),0),delete this._l[e]}},A._q.push((function(){r.addTest=s})),A.addAsyncTest((function(){function e(e,n,t){function i(n){var i=!(!n||"load"!==n.type)&&1==a.width;s(e,"webp"===e&&i?new Boolean(i):i),t&&t(n)}var a=new Image;a.onerror=i,a.onload=i,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,(function(t){if(t&&"load"===t.type)for(var i=0;i<n.length;i++)e(n[i].name,n[i].uri)}))})),function(){var e,n,t,a,s,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],(n=l[p]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=i(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)1===(r=e[s].split(".")).length?A[r[0]]=a:(!A[r[0]]||A[r[0]]instanceof Boolean||(A[r[0]]=new Boolean(A[r[0]])),A[r[0]][r[1]]=a),o.push((a?"":"no-")+r.join("-"))}}(),a(o),delete r.addTest,delete r.addAsyncTest;for(var u=0;u<A._q.length;u++)A._q[u]();e.Modernizr=A}(window,document);
//# sourceMappingURL=bundle.js.map
