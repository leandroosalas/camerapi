var util = require('util');

module.exports = function Camera(){
	
	this.ENCODING_JPEG = "jpg";
	this.ENCODING_BMP = "bmp";
	this.ENCODING_GIF = "gif";
	this.ENCODING_PNG = "png";
	
	this.filename = null;
	this.folder = null;
	this.args = "raspistill";
	this.parameters= [];
	
	this.takePicture = function(){
		this.takePicture(null,undefined);
	},
	this.takePicture = function(file){
		this.takePicture(file,undefined);
	},
	
	this.takePicture = function takePicture(file, callback){
		
		if(!this.folder){
			this.folder = util.format("%s/pitures", __dirname);
		}
		
		if(file){
			this.filename = util.format("%s/%s", this.folder, file);
		}else{
			this.filename = util.format("%s/%s.jpg", this.folder, new Date().toJSON());
		}
		
		this.output(this.filename);
		
		this.args = "raspistill";
		
		
		for(key in this.parameters){
		    
			if(this.parameters[key]){
				this.args+= util.format(' %s %s ', key, this.parameters[key]);
			}
			
		}
		
		var exec = require('child_process').exec,child;
		
		child = exec(this.args,function (error, stdout, stderr) {
			
			if(callback!==undefined){
				callback(this.filename,null);
			}
			
			
		});
	},
	this.prepare = function(parameters){
		
		for(key in parameters){
			this[key](parameters[key]);
		}
		
		return this;
		
	},
	this.quality = function(value){
		
		this.parameters['-q']= value;
		
		return this;
	},
	this.width = function(value){
		
		this.parameters['-w']= value;
		
		return this;
	},
	this.height = function(value){
		
		this.parameters['-h']= value;
		
		return this;
	},
	this.preview = function(value){
		
		this.parameters["-p"] = value;
		
	},
	this.fullscreen = function(value){ 
		
		this.parameters["-f"] = value;
		
		return this;
		
	},
	this.nopreview  = function(value) {
		
		this.parameters["-n"] = value;
		
		return this;
		
	},    
	this.opacity  = function(value){
		
		this.parameters["-op"] = value;
		
		return this;
		
	},
	this.sharpness= function(value){
		
		this.parameters["-sh"] = value;
		
		return this;
		
	},
	this.contrast= function(value){
		
		this.parameters["-co"] = value;
		
		return this;
		
	},
	this.brightness= function(value){
		
		this.parameters["-br"] = value;
		
		return this;
		
	},
	this.saturation= function(value){
		
		this.parameters["-sa"] = value;
		
		return this;
		
	},
	this.ISO= function(value){
		
		this.parameters["-ISO"] = value;
		
		return this;
		
	},
	this.vstab= function(value){
		
		this.parameters["-vs"] = value;
		
		return this;
		
	},
	this.ev= function(value){
		
		this.parameters["-ev"] = value;
		
		return this;
		
	},
	this.exposure= function(value){
		
		this.parameters["-ex"] = value;
		
		return this;
		
	},
	this.awb= function(value){
		
		this.parameters["-awb"] = value;
		
		return this;
		
	},
	this.imxfx= function(value){
		
		this.parameters["-ifx"] = value;
		
		return this;
		
	},
	this.colfx= function(value){
		
		this.parameters["-cfx"] = value;
		
		return this;
		
	},
	this.metering= function(value){
		
		this.parameters["-mm"] = value;
		
		return this;
		
	},
	this.rotation= function(value){
		
		this.parameters["-rot"] = value;
		
		return this;
		
	},
	this.hflip= function(value){
		
		this.parameters["-hf"] = value;
		
		return this;
		
	},
	this.vflip= function(value){
		
		this.parameters["-vf"] = value;
		
		return this;
		
	},
	this.roi= function(value){
		
		this.parameters["-roi"] = value;
		
		return this;
		
	},
	this.shutter= function(value){
		
		this.parameters["-s"] = value;
		
		return this;
		
	},
	this.drc= function(value){
		
		this.parameters["-drc"] = value;
		
		return this;
		
	},
	this.raw= function(value){
		
		this.parameters["-r"] = value;
		
		return this;
		
	},
	this.output= function(value){
		
		this.filename = value;
		this.parameters["-o"] = value;
		
		return this;
		
	},
	this.latest= function(value){
		
		this.parameters["-l"] = value;
		
		return this;
		
	},
	this.verbose= function(value){
		
		this.parameters["-v"] = value;
		
		return this;
		
	},
	this.timeout= function(value){
		
		this.parameters["-t"] = value;
		
		return this;
		
	},
	this.timelapse= function(value){
		
		this.parameters["-tl"] = value;
		
		return this;
		
	},
	this.thumb= function(value){
		
		this.parameters["-th"] = value;
		
		return this;
		
	},
	this.demo= function(value){
		
		this.parameters["-d"] = value;
		
		return this;
		
	},
	this.encoding= function(value){
		
		this.parameters["-e"] = value;
		
		return this;
		
	},
	this.exif= function(value){
		
		this.parameters["-x"] = value;
		
		return this;
		
	},
	this.fullpreview= function(value){
		
		this.parameters["-fp"] = value;
		
		return this;
		
	},
	this.keypress= function(value){
		
		this.parameters["-k"] = value;
		
		return this;
		
	},
	this.signal= function(value){
		
		this.parameters["-s"] = value;
		
		return this;
		
	},
	this.baseFolder = function(directory){
		this.folder = directory;
	}
};

