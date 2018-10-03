// constructor function for the Cat class
var frameType = require('./Frame');

function FrameCollector() {
    var self = this || {};
    this.upper_layer = null;
    this.lower_layer = null;
    this.main_buffer = {
        header:null,
        buffer:null
    };
    this.started = false;
}

FrameCollector.prototype.setUpperLayer = function(upper_layer) {
    this.upper_layer = upper_layer;
};

FrameCollector.prototype.getUpperLayer = function() {
    return this.upper_layer;
};

FrameCollector.prototype.setLowerLayer = function(lower_layer) {
    this.lower_layer = lower_layer;
};

FrameCollector.prototype.getLowerLayer = function() {
    return this.lower_layer;
};

FrameCollector.prototype.transmit = function(buffer,socket) {
    if(!this.started) return;
    if(this.getLowerLayer()){
        this.getLowerLayer().transmit(buffer,socket);
    }
};

FrameCollector.prototype.handleReceived = function(buffer,socket) {
    if(!this.started) return;
    var self = this;
    if(self.main_buffer.header !== null){
        // Frame has been started, collect incomming datas
        self.main_buffer.buffer = Buffer.concat(self.main_buffer.buffer,buffer);        
         
    }else{
        // new incoming frame
        if(buffer.length >= 16){
            _bufferHeader = Buffer.alloc(16);
            buffer.copy(_bufferHeader,0,0,15);
            var header = frameType.decodeHeader(_bufferHeader);
            if(header){
                self.main_buffer.header = header;
                self.main_buffer.buffer = buffer;
            }
        }        
    } 
    
    if(self.main_buffer.header.DataSize + 16 === self.main_buffer.buffer.length){
        if(self.getUpperLayer()){
            self.getUpperLayer().handleReceived(Buffer.from(self.main_buffer.buffer),socket);
            self.main_buffer = {
                header:null,
                buffer:null
            };
        }
    }else{
        console.log("Big Header");
    }
};

FrameCollector.prototype.start = function() {
    this.started = true;
};

FrameCollector.prototype.stop = function() {
    this.started = false;
};

// Now we export the module
module.exports = FrameCollector;