let b="",c="",existe=!0;const a=document.querySelector(".pokeInfo"),url="https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";let num1="",missigno=["build/img/missigno1.png","build/img/missigno2.png","build/img/missigno3.png","build/img/missigno4.png"];function crearHabilidades(e){for(let n=0;n<e.abilities.length;n++)b+=`<p class="poke_habilidad">${e.abilities[n].ability.name}</p>`;return b}function crearTipo(e){for(let n=0;n<e.types.length;n++)c+=`<p class="poke_tipo ${e.types[n].type.name}">${e.types[n].type.name}</p>`;return c}function zfill(e,n){var i=Math.abs(e),t=e.toString().length;return n<=t?e<0?"-"+i.toString():i.toString():e<0?"-"+"0".repeat(n-t)+i.toString():"0".repeat(n-t)+i.toString()}function getValue(e){const n=document.getElementById("valorDeBusqueda");let i=parseInt(n.value);if(resultado="",isNaN(i)){let t=n.value.toLowerCase(),s=0,a="",o="";for(;;){a=e.results[s].name,o="";for(let e=0;e<a.length;e++){let n=a[e];if("-"==n)break;o+=n}if(t==o||t==a){existe=!0;break}if(s>905){s=984,existe=!1;break}s++}i=s,resultado=i}else i<=0?(existe=!1,i=984,resultado=i):(i-=1,resultado=i);return resultado}function Actualizar(e=!1){fetch(url).then(e=>e.json()).then(n=>{1==e?(valor=Math.floor(904*Math.random()+1),existe=!0):valor=getValue(n);const i=n.results[valor].url;fetch(i).then(e=>e.json()).then(e=>{b=crearHabilidades(e),c=crearTipo(e),d=zfill(e.id,3),a.innerHTML=existe?`<div class="sprite ${e.types[0].type.name}">\n                        <img src="${null==e.sprites.front_default?missigno[Math.floor(4*Math.random())]:e.sprites.front_default}" alt="pokemon">\n                    </div>\n                    <div class="info">\n                        <div class="poke_info">\n                            <p class="poke_nombre">${e.species.name}</p>\n                            <p class="poke_id">${d}</p>\n                        </div>\n                        <div class="tipo">\n                        ${c}\n                        </div>\n                        <div class="habilites">\n                        ${b}\n                        </div>\n                        \n                    </div>`:`<div class="sprite ${e.types[0].type.name}">\n                        <img src="${e.sprites.front_default}" alt="pokemon">\n                    </div>\n                    <div class="info">\n                        <div class="poke_info">\n                            <p class="poke_nombre">No existe ese pokemon</p>\n                            <p class="poke_id">---</p>\n                        </div>\n                        <div class="tipo">\n                        <p class="poke_tipo ${e.types[0].type.name}">Ninguno</p>\n                        </div>\n                        <div class="habilites">\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        <p class="poke_habilidad">Ninguna</p>\n                        </div>\n                        \n                    </div>`})}),c="",b=""}fetch(url).then(e=>e.json()).then(e=>{null!=num1&&""!=num1||(num1=Math.floor(904*Math.random()+1));const n=e.results[num1].url;fetch(n).then(e=>e.json()).then(e=>{b=crearHabilidades(e),c=crearTipo(e),d=zfill(e.id,3),a.innerHTML=`<div class="sprite ${e.types[0].type.name}">\n                <img src="${null==e.sprites.front_default?missigno[Math.floor(4*Math.random())]:e.sprites.front_default}" alt="pokemon">\n                </div>\n                <div class="info">\n                    <div class="poke_info">\n                        <p class="poke_nombre">${e.species.name}</p>\n                        <p class="poke_id">${d}</p>\n                    </div>\n                    <div class="tipo">\n                    ${c}\n                    </div>\n                    <div class="habilites">\n                    ${b}\n                    </div>\n                    \n                </div>`})});var input=document.getElementById("valorDeBusqueda");input.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),document.getElementById("btnBuscar").click())})),function(e,n,i){function t(e,n){return typeof e===n}function s(e){var n=c.className,i=A._config.classPrefix||"";if(d&&(n=n.baseVal),A._config.enableJSClass){var t=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");n=n.replace(t,"$1"+i+"js$2")}A._config.enableClasses&&(n+=" "+i+e.join(" "+i),d?c.className.baseVal=n:c.className=n)}function a(e,n){if("object"==typeof e)for(var i in e)p(e,i)&&a(i,e[i]);else{var t=(e=e.toLowerCase()).split("."),o=A[t[0]];if(2==t.length&&(o=o[t[1]]),void 0!==o)return A;n="function"==typeof n?n():n,1==t.length?A[t[0]]=n:(!A[t[0]]||A[t[0]]instanceof Boolean||(A[t[0]]=new Boolean(A[t[0]])),A[t[0]][t[1]]=n),s([(n&&0!=n?"":"no-")+t.join("-")]),A._trigger(e,n)}return A}var o=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var i=this;setTimeout((function(){n(i[e])}),0)},addTest:function(e,n,i){l.push({name:e,fn:n,options:i})},addAsyncTest:function(e){l.push({name:null,fn:e})}},A=function(){};A.prototype=r,A=new A;var p,c=n.documentElement,d="svg"===c.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;p=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,i){return e.call(n,i)}}(),r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),A.hasOwnProperty(e)&&setTimeout((function(){A._trigger(e,A[e])}),0)},r._trigger=function(e,n){if(this._l[e]){var i=this._l[e];setTimeout((function(){var e;for(e=0;e<i.length;e++)(0,i[e])(n)}),0),delete this._l[e]}},A._q.push((function(){r.addTest=a})),A.addAsyncTest((function(){function e(e,n,i){function t(n){var t=!(!n||"load"!==n.type)&&1==s.width;a(e,"webp"===e&&t?new Boolean(t):t),i&&i(n)}var s=new Image;s.onerror=t,s.onload=t,s.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],i=n.shift();e(i.name,i.uri,(function(i){if(i&&"load"===i.type)for(var t=0;t<n.length;t++)e(n[t].name,n[t].uri)}))})),function(){var e,n,i,s,a,r;for(var p in l)if(l.hasOwnProperty(p)){if(e=[],(n=l[p]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(i=0;i<n.options.aliases.length;i++)e.push(n.options.aliases[i].toLowerCase());for(s=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)1===(r=e[a].split(".")).length?A[r[0]]=s:(!A[r[0]]||A[r[0]]instanceof Boolean||(A[r[0]]=new Boolean(A[r[0]])),A[r[0]][r[1]]=s),o.push((s?"":"no-")+r.join("-"))}}(),s(o),delete r.addTest,delete r.addAsyncTest;for(var u=0;u<A._q.length;u++)A._q[u]();e.Modernizr=A}(window,document);
//# sourceMappingURL=bundle.js.map
