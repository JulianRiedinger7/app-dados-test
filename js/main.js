let boton = document.getElementById("btn");
let imagen = document.getElementById("image");
let txt = document.getElementById("txt");

let randomizar = (max,min)=>{
    return Math.round(Math.random()*(max-min)+min);
}

let dados = [
    {numero:"1",foto:"./images/uno.png"},
    {numero:"2",foto:"./images/dos.png"},
    {numero:"3",foto:"./images/tres.png"},
    {numero:"4",foto:"./images/cuatro.png"},
    {numero:"5",foto:"./images/cinco.png"},
    {numero:"6",foto:"./images/seis.png"},
]

boton.addEventListener("click", ()=>{
    imagen.src = "./images/roll-the-dice.gif";
    txt.innerHTML = "Rodando...";
    let numeroRandom = randomizar(5,0);
    setTimeout(()=>{
        if (numeroRandom == 2){
            imagen.style.background = "white";
        }  
        imagen.src = dados[numeroRandom].foto;
        txt.innerHTML = "Te salio el "+dados[numeroRandom].numero;
    },1500)
})
