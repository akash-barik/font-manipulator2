function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);

    canvas = createCanvas(550,500)
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
}

     function modelLoaded(){
        console.log('PoseNet is Intialized!');
     }

       function gotPoses(results)
       {
            if (results.length > 0)
            {
                console.log(results);
                leftWristX = resuts[0].pose.lelftwrist.x;
                rightWristX = results[0].pose.rightWrist.x;
                difference = floor(leftWristX - rightWristX)
            } 
        }

       function draw(){
           background('#888c53')
           textsize(diffrence);
           Fill('#252129')
           text('Akash', 50,385);
       }































