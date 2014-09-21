
# Camerapi

Camera PI is a module that allow to use the Raspberry PI camera from Node.JS

## To Install

	npm install camerapi

## Usage

	var Camera = require("camerapi");

	var cam = new Camera();

By default if you don't specify any file name,it tries to find a folder called pictures inside the module
you can set the directory with : 

	cam.baseDirectory('/YOUR_BASE_DIRECTORY');

	cam.prepare({"timeout" : 150, 
			 "width" : 2592,
			 "height" : 1944,
			 "quality" : 85
		   }).takePicture();
		   
If you decided to use this type of implementation you can use any parameter, just add it as a 
key:value attribute.

	cam.prepare({"timeout" : 150, 
			 "width" : 2592,
			 "height" : 1944,
			 "quality" : 85,
			 "vflip" : "",
			 ..,
			 ..,
			 ..
		   }).takePicture();
 

Or

	cam.prepare({"timeout" : 150, 
			 "width" : 2592,
			 "height" : 1944,
			 "quality" : 85
		   }).takePicture("mypicture.jpg");


Or 

	cam.prepare({"timeout" : 150, 
			 "width" : 2592,
			 "height" : 1944,
			 "quality" : 85,
			 "output" : "mypicture.jpg"
		   }).takePicture();


Or


	cam.prepare({"timeout" : 150, 
			 "width" : 2592,
			 "height" : 1944,
			 "quality" : 85
		   }).takePicture("mypicture.jpg",callback);
		   
	function callback(file,error){
	
		//do some fun stuff
	
	}
		 
Or		 
		   
	cam.timeout(150)
	.width(1024)
	.height(768)
	.quality(75)
	.opacity(50)
	.rotation(180)
	.takePicture();

Or


	cam.timeout(150)
	.width(1024)
	.height(768)
	.quality(75)
	.opacity(50)
	.rotation(180)
	.takePicture("mypicture.jpg");

Or

	cam.timeout(150)
	.width(1024)
	.height(768)
	.quality(75)
	.opacity(50)
	.rotation(180)
	.takePicture("mypicture.jpg", callback);

Or

	cam.timeout(150);
	cam.width(1024);
	cam.height(768);
	cam.quality(75);
	cam.takePicture();

Resting all settings

	cam.reset();

Recording Video

	cam.timeout(5000)
	.bitrate(3500000)
	.framerate(5)
	.streamVideo("foo.h264")
	.fullscreen()
	.recordVideo();

Or

	cam.timeout(5000)
	.bitrate(3500000)
	.framerate(5)
	.fullscreen()
	.recordVideo("myvideo.h264");

Or

	cam.timeout(5000)
	.bitrate(3500000)
	.framerate(5)
	.fullscreen()
	.recordVideo("myvideo.h264",callback);

	function callback(file,error){
	
		//do some fun stuff
	
	}

So every time you take a picture without filename it creates a file with the current date in the base folder.
  
## More information

For more information about the raspberry pi camera module, see the [official documentation](http://www.raspberrypi.org/documentation/raspbian/applications/camera.md)

 

## License

(The MIT License)

Copyright (c) 2014 Leandro Salas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
