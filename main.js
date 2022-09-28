music_1 = "";
music_2 = "";

leftWrist = 0;
RightWrist = 0;

scoreLeftWrist = 0;

songStatus = "";

function preload(){
    music_1 = loadSound("music2.mp3");
    music_2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    
    songStatus = "true";

    fill("FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.004)
    {
        circle(leftWrist, 20);
        songStatus = "false";
        
        if (songStatus = "false")
     {
        song.play(music_1);
        song.setVolume(1);
        song.rate(1);
     }
    }
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
       // scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(" scoreLeftWrist = " + scoreLeftWrist);
//"scoreRightWrist = " + scoreRightWrist " (put in the line above)

        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        console.log("leftWrist = " + leftWrist);

        rightWrist = results[0].pose.rightWrist.x;
        console.log("rightWrist = " + rightWrist);
    }
}