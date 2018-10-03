// constructor function for the Cat class
const net = require('net');
const IdGenerator = require('shortid');

function TCPPHY(port) {
    var self = this || {};
    this.upper_layer = null;
    this.lower_layer = null;
    this.port = port;
    this.server = net.createServer(
        function(socket) {
            console.log((new Date())+'A client connected to server...');
            socket.id = IdGenerator.generate();
            socket.on('data', function(data) {
                self.handleReceived(data,socket);
            });
        }
    );
    this.started = false;
}

TCPPHY.prototype.start = function() {
    var self = this;
    this.server.listen(this.port,function(){
        console.log("Server listening on port: " + self.port);
    });
    this.started = true;
};

TCPPHY.prototype.stop = function() {
    this.server.stop();
    this.started = false;
};

TCPPHY.prototype.setUpperLayer = function(upper_layer) {
    this.upper_layer = upper_layer;
};

TCPPHY.prototype.setUpperLayer = function(upper_layer) {
    this.upper_layer = upper_layer;
};

TCPPHY.prototype.getUpperLayer = function() {
    return this.upper_layer;
};

TCPPHY.prototype.setLowerLayer = function(lower_layer) {
    this.lower_layer = lower_layer;
};

TCPPHY.prototype.getLowerLayer = function() {
    return this.lower_layer;
};

TCPPHY.prototype.transmit = function(buffer,socket) {
    socket.write(buffer);
};

TCPPHY.prototype.handleReceived = function(buffer,socket) {
    if(this.getUpperLayer()){
        this.getUpperLayer().handleReceived(buffer,socket);
    }
};

// Now we export the module
module.exports = TCPPHY;