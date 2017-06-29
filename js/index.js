const lienzo = document.getElementById('pizarra');
const contexto = lienzo.getContext('2d');

let rango = document.getElementById('rango').value;
let ancho = lienzo.width =  600;
let alto = lienzo.height = 300;
let listaColor = ['#43d996', '#f1c40f', '#9b59b6'];

let GeneratorColor = ()=>{
   let random = Math.floor(Math.random() * listaColor.length);
   return listaColor[random];
}

let trazar = (u)=>{
    
    contexto.lineWidth = 1;
    contexto.fillStyle = 'rgb(0,0,0)';
    contexto.fillRect(0, 0 , ancho, alto);
    for(let i = -60; i < 60; i+=1){
    
       
        contexto.beginPath();
        contexto.moveTo(0, alto / 2);
        // dibujar lineas.
        for(let j = 0; j < ancho; j+=10){
            contexto.lineTo(10 * Math.cos(i) +
            j + (0.008 * j * j),
            Math.floor(alto / 2 + j / rango *
            Math.sin(j / 50 - z / 50 - i / 118) + 
            (i * rango / 10) * Math.random(j / 25 - (i + z) / 65)));
        } 
      
        contexto.stroke();
      }
  }

contexto.strokeStyle = 'white';

let btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
  contexto.strokeStyle = GeneratorColor();                     
})
    
let z = 0;
let setup = ()=> {
   window.requestAnimationFrame(setup);
   z += 5;
   trazar(z);
}

setup();