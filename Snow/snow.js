console.log("test");

var x=300;
var y=300;
var xSpeed=2
var ySpeed=2
//var g=4;
var canvas =document.getElementById("canvas");

var ctx = canvas.getContext("2d");
var h=window.innerHeight;   // skärmens höjd
var w=window.innerWidth;    // skärmens bredd
canvas.width=w;             // sätter bredden på canvasen (rit ytan)
canvas.height=h;            // sätter höjd på canvasen (rit ytan)

var antalbollar=1000;
var bollar =[];  // skapar arr   (radie , hastighet , färg, x , y)


/*initsierar bollar (ger start värden till bollar).  */
for (var i = 0; i < antalbollar; i++) {

  bollar.push({
    x:Math.floor(Math.random()*w ) ,
    y:Math.floor(Math.random()*h )  ,
    r:Math.random()*5,
    c1:255,
    c2:255,
    c3:255,
    xv:Math.random()*10 ,
    yv:Math.random()*5 });

}



function update(){


  bollar.forEach((boll, bollar) => {


    boll.yv=boll.yv;  /// ökar hastigheten
    boll.xv=boll.xv;
    //ySpeed=ySpeed+g;

    boll.y=boll.y+boll.yv; // förflyttar bollens y pos med hjälp av hastigheten i y led
    boll.x=boll.x+boll.xv;
  //  y=y+ySpeed;


//  if(boll.x>(w-boll.r)){
//    boll.xv*=-1;
//  }if(boll.x < boll.r){
  //  boll.xv*=-1;}






  if(boll.y>(h-boll.r)){   /// tar hand om ner

   boll.y=0;



    //ySpeed=ySpeed*-1;

 }
 if( boll.x>w-boll.r){ //tarhand om uppe

      boll.x=0;
    //ySpeed=ySpeed*-1;


  }



  });







}
function paint(){

      ctx.clearRect(0,0,w,h);

      for (var i = 0; i < antalbollar; i++) {

        var boll= bollar[i];  // plockar ut en array ur arrayen

      ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
      ctx.beginPath();
      ctx.arc(boll.x, boll.y  ,boll.r,0,2*Math.PI); // x,y,r,startvinkel i radianer,slutvinkel i radianer
      ctx.strokeStyle = "rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
      ctx.stroke() ;
      ctx.fill();
    }
  update();
}


paint();


setInterval(paint,30);
