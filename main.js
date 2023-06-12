let interior = document.querySelector(".interior");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let coin = document.getElementById("moneda");
let cara = 0;
let cruz = 0;

function desactivaBoton(){
    start.disabled = true;
    setTimeout(function(){
            start.disabled = false;
    },6500);
}


start.addEventListener("click", ()=>{
     let i = Math.floor(Math.random()*2);

desactivaBoton();

const chiquitoSound =['chiquito0', 'chiquito1', 'chiquito2', 'chiquito3'];
let counter = Math.floor(Math.random()*4);
let sound = chiquitoSound[counter];

  
if (i === 0) {
   
    let nodo = document.createElement("img");
    nodo.setAttribute("src", "img/girando.png");
    nodo.setAttribute("class", "img-fluid h-50 moneda");
    nodo.setAttribute("id", "imgAnimated");
    const ruido = new Audio("sounds/coinRodando.wav")
        ruido.play();
    coin.appendChild(nodo);
    cruz++;  
    nodo.addEventListener("animationend", () => {
        coin.removeChild(nodo);
        let nudo = document.createElement("img");
        nudo.setAttribute("src", "img/cruz.png");
        nudo.setAttribute("class", "img-fluid  h-80 moneda");
        const ruido = new Audio("sounds/coinFin.wav");        
            ruido.play();
        coin.appendChild(nudo);
        setTimeout(function(){
            coin.removeChild(nudo);
        }, 3000);
    })
    
} else {
    let nodo = document.createElement("img");
    nodo.setAttribute("src", "img/girando.png");
    nodo.setAttribute("class", "img-fluid h-50 moneda");
    nodo.setAttribute("id", "imgAnimated");
    const ruido = new Audio("sounds/coinRodando.wav")
        ruido.play();
    coin.appendChild(nodo);
    cara++;
    nodo.addEventListener("animationend", () => {
        coin.removeChild(nodo);
         let nudo = document.createElement("img");
        nudo.setAttribute("src", "img/moneda_chiquito.png");
        nudo.setAttribute("class", "img-fluid h-80 moneda");
        let sonidoChiqui = `sounds/${sound}.wav`;
        const ruido = new Audio(sonidoChiqui);
            ruido.play();
        coin.appendChild(nudo);
        setTimeout(function(){
            coin.removeChild(nudo);
        }, 3000);
      
    })
}
setTimeout(contadorMoneda, 4000);
});


function contadorMoneda(){
    document.querySelector("#contadorCara").textContent = `${cara}`;
    document.querySelector("#contadorCruz").textContent = `${cruz}`;
}

reset.addEventListener("click", () => {
   cara = 0;
   cruz = 0;
   contadorMoneda();
 }) 