var bmp = require("bmp-js");
var fs = require('fs');
var imageCounter = 0;


var stack = require("./lib/ProtocolStack");
var TCPPHY = require("./lib/TCPPHY");
var FrameCollector = require("./lib/FrameCollector");
var FrameDecoder = require("./lib/FrameDecoder");
var IdleFrameFilter = require("./lib/IdleFrameFilter");
var ErrorFrameFilter = require("./lib/ErrorFrameFilter");
var CommandoFrameFilter = require("./lib/ComandoFrameFilter");
var DataFrameFilter = require("./lib/DataFrameFilter");
var PictureFrameFilter = require("./lib/PictureFrameFilter");
var AcknowledgeFrameFilter = require("./lib/AcknowledgeFrameFilter");
var FinishedFrameType = require("./lib/FinishedFrameType");
var frameType = require('./lib/Frame');
var sending = false;

var stackInstance = new stack();

stackInstance.addLayer(new TCPPHY(8765, "192.168.1.53"));
stackInstance.addLayer(new FrameCollector());
stackInstance.addLayer(new FrameDecoder());
stackInstance.addLayer(new IdleFrameFilter());
stackInstance.addLayer(new AcknowledgeFrameFilter());
stackInstance.addLayer(new FinishedFrameType());
stackInstance.addLayer(new ErrorFrameFilter());
stackInstance.addLayer(new CommandoFrameFilter());
stackInstance.addLayer(new DataFrameFilter());
stackInstance.addLayer(new PictureFrameFilter());



stackInstance.start(function (params, socket) {

    if (!sending) {
        stackInstance.transmit(new frameType(frameType.FRAMEHEADERID, params.header.Seq++, frameType.FRAMEHEADERVERSION, frameType.REQUESTFLAG, frameType.CMDSTARTSEND, Buffer.alloc(0)), socket);
        sending = true;
    }

    // save the image    
    if(params.data.length >= 1024 * 768){
        //var rawData = bmp.encode({ data: params.data, width: 1024, height: 768 });
        
        fs.writeFileSync(__dirname +'/data/image_' + imageCounter + '.bmp', params.data);
        imageCounter = (imageCounter +1)% 12;
    }else{
        console.log("New Frame: " + JSON.stringify(params));
    }


});

//  setTimeout(function(params) {
//      stackInstance.transmit(new frameType(frameType.FRAMEHEADERID, lastFrame.header.Seq, frameType.FRAMEHEADERVERSION, frameType.REQUESTFLAG, frameType.CMDSTOPSEND, Buffer.alloc(0)), lastSocket);

//  }, 20000);

