song="";
leftWrist=0;
leftWrist=0;
rightWrist=0;
rightWrist=0;

function preload()
{
    song=loadSound("music.mp3");  
}
function setup() {
    canvas=createCanvas(600, 500);
    canvas.center();
    
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.lInitilizedog('PoseNet IsInitialized');
}

function draw() {
     image(video, 0, 0, 600, 500);
}

function play()
{
    song.play(); 
    song.setVolume(1);
    song.rate(1);   
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWrist=" + leftWristX +"leftWrist=" + leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log(" rightWrist=" +  rightWristX +" rightWrist=" +  rightWristY);
    }
}
