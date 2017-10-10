var numero=1;
var raggi=40;
var time;

function setup() {
  createCanvas(500,500);
  frameRate(60);
  angleMode(DEGREES);
  background(0,0,0);
}


 
function draw() {
  var diametro;
  var i,j;
  var segno=1;
  var margini;
  
  time=frameCount;
  time=time%raggi;
  margini=75;
  diametro=(width-(2*margini))/numero;
  
  fill(255,255,255);
  noStroke();
  textSize(15);
  text("Tasto SX = più conchiglie / Tasto DX = meno conchiglie",75,475);
  noFill();
  strokeWeight(1);
  
  for(i=(diametro/2)+margini;i<=width-margini;i+=diametro){
    if(segno==1){
        segno=-1;
        stroke(255,255,255); //arancione
      }else{
        segno=1;
        stroke(255,255,255); //blu
      }
      
    for(j=(diametro/2)+margini;j<=height-margini;j+=diametro){
      //disegno
      translate(i,j);
      ruota(i,j,diametro,raggi,segno);
      translate(-i,-j);
      if(segno==1){
        segno=-1;
        stroke(255,255,255); //arancione
      }else{
        segno=1;
        stroke(255,255,255); //blu
      }
    }
  }
}

function ruota(i,j,diametro,raggi,segno){
  line((diametro/2),(diametro/2),cos(time*(360/raggi))*(diametro/2),sin(time*(360/raggi))*(diametro/2));
  if(frameCount%raggi==0){
    noLoop();
    time=time%raggi;
  }
}
  
function mousePressed() {
  if(time==0){
    if(mouseButton==LEFT)
      if(numero<=20)
          numero += 1;
    if(mouseButton==RIGHT)
      if(numero>1)
          numero -= 1;
    if(numero>=1 || numero<=20){
      clear();
      background(0,0,0);
      redraw();
      loop();
      time=time%raggi;
    }
  }
  
   
 }