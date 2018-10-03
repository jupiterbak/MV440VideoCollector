var stack = require("./lib/ProtocolStack");
var TCPPHY = require("./lib/TCPPHY");
var FrameCollector = require("./lib/FrameCollector");
var FrameDecoder = require("./lib/FrameDecoder");
var IdleFrameFilter = require("./lib/IdleFrameFilter");
var ErrorFrameFilter = require("./lib/ErrorFrameFilter");
var CommandoFrameFilter = require("./lib/ComandoFrameFilter");
var DataFrameFilter = require("./lib/DataFrameFilter");
var PictureFrameFilter = require("./lib/PictureFrameFilter");

var stackInstance = new stack(
    function (params) {
        
    }, function (params) {
        
    }, function (params) {
        
    });

stackInstance.addLayer(new TCPPHY(8080));
stackInstance.addLayer(new FrameCollector());
stackInstance.addLayer(new FrameDecoder());
stackInstance.addLayer(new IdleFrameFilter());
stackInstance.addLayer(new ErrorFrameFilter());
stackInstance.addLayer(new CommandoFrameFilter());
stackInstance.addLayer(new DataFrameFilter());
stackInstance.addLayer(new PictureFrameFilter());

stackInstance.start();