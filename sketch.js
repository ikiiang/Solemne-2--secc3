
// cantidad de figuras
let cantidad =12;
// separación entre figuras
let separacion = 20;
function setup(){

  createCanvas(600,600);

  // dibujar elipses desde el centro
  ellipseMode(CENTER);
}
function draw(){
// fondo blanco
background(255);

  // recorrer columnas
for(let x = 80; x < width; x += 120){

    // recorrer filas
for(let y = 80; y < height; y += 120){

push();

// mover cada sistema
translate(x,y);

// distancia entre mouse y figura
      let distancia = dist(x,y,mouseX,mouseY);
  
// rotación dinámica
let angulo = map(distancia,0,width,1,-1);
rotate(angulo);

// dibujar muchos círculos
      for(let i = cantidad; i > 0; i--){

// tamaño base
let tamano = i * separacion;

cambiarColor(i);
if(distancia < 150){

strokeWeight(3);
 } else {

strokeWeight(1);
}
stroke(0);

// deformación horizontal
let ancho = tamano + map(mouseX,0,width,-20,20);
// deformación vertical
let alto = tamano + map(mouseY,0,height,20,-20);
 // si el mouse está cerca
if(distancia < 250){
 // círculos deformados
ellipse(0,0,ancho * 0.5,alto * 0.5);
} else {
          
// círculos normales
ellipse(0,0,tamano,tamano);
        }
      }
      pop();
    }
  }
}
function cambiarColor(i){
  // alternar colores
  if(i % 2 == 0){

    fill(0);
} else {
fill(255);
  }
}
