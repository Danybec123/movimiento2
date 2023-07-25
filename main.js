var right_wristX=0
var right_wristY=0
var distance=0;
function setup(){
    canvas=createCanvas(640,480)
    background("cyan")
    video=createCapture(VIDEO)
     poseNet=ml5.poseNet(video,listo);
     poseNet.on("pose",resultado);
}
function listo(){
    console.log("listisimo")
}
function resultado(e){
if(e.length>0){
 console.log(e)   
 right_wristY=e[0].pose.rightWrist.y
 right_wristX=e[0].pose.rightWrist.x


}
}
function preload(){
    perico=loadImage("perico.jpg")
}
function draw(){
    background("cyan")
    
    image(perico,right_wristX-100,right_wristY-100,200,200)
}