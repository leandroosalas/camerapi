
var Camera = require("./index");

var cam = new Camera();

cam.baseFolder('/YOUR_BASE_DIRECTORY');

cam.prepare({"timeout" : 150, 
         "width" : 2592,
         "height" : 1944,
         "quality" : 85
       }).takePicture();


cam.prepare({"timeout" : 150, 
         "width" : 2592,
         "height" : 1944,
         "quality" : 85
       }).takePicture("mypicture.jpg");


cam.prepare({"timeout" : 150, 
         "width" : 2592,
         "height" : 1944,
         "quality" : 85,
         "output" : "mypicture.jpg"
       }).takePicture();


cam.prepare({"timeout" : 150, 
         "width" : 2592,
         "height" : 1944,
         "quality" : 85
       }).takePicture("mypicture.jpg",callback);


function callback(file,error){

    //do some fun stuff
	if (!error) {
		console.log("Picture filename:" + file);
	}else{
		console.log("Error:" + error) 
	}

}


cam.timeout(150).width(1024).height(768).quality(75).opacity(50).rotation(180).takePicture();


cam.timeout(150).width(1024).height(768).quality(75).opacity(50).rotation(180).takePicture("mypicture.jpg");


cam.timeout(150).width(1024).height(768).quality(75).opacity(50).rotation(180).takePicture("mypicture.jpg", callback);


cam.timeout(150);
cam.width(1024);
cam.height(768);
cam.quality(75);
cam.takePicture();


cam.timeout(150).width(1024).height(768).quality(75).opacity(50).rotation(200).takePicture();

cam.reset();

cam.timeout(5000)
.bitrate(3500000)
.framerate(5)
.fullscreen()
.recordVideo("myvideo.h264");

