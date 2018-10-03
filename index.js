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
var lastFrame = null;
var lastSocket = null;
var stackInstance = new stack(
    function (params,socket) {
        console.log("New Frame: " + JSON.stringify(params));
        lastFrame = params;
        lastSocket = socket;
    });

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

stackInstance.start();

 setTimeout(function(params) {
     stackInstance.transmit(new frameType(frameType.FRAMEHEADERID, lastFrame.header.Seq, frameType.FRAMEHEADERVERSION, frameType.REQUESTFLAG, frameType.CMDSTARTSEND, Buffer.alloc(0)), lastSocket);

 }, 20000);

