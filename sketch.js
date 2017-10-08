function setup() {
  createCanvas(500,500);
  frameRate(60);
  angleMode(DEGREES);
  background(0,0,0);
}

function draw() {
  var diametro;
  var numero=6;
  var raggi=40;
  var i,j;
  var segno=1;
  var margini;
  
  diametro=width/numero;
  margini=diametro;
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
    line((diametro/2),(diametro/2)*segno,cos(frameCount*(360/raggi))*(diametro/2),sin(frameCount*(360/raggi))*(diametro/2));
    if(frameCount==raggi)
      noLoop();
  }