// constructor function for the Cat class
const net = require('net');
const IdGenerator = require('shortid');

var TCPPHY = function (port, host) {

    this.upper_layer = null;
    this.lower_layer = null;
    this.port = port;
    this.host = host;
    var self = this;
    this.bufferSplitter = new Transform({
        readableObjectMode: true,
        transform(chunk, encoding, callback) {
            if (this.buffer_collector) {
                this.buffer_collector = Buffer.concat([this.buffer_collector, chunk]);
            } else {
                this.buffer_collector = Buffer.from(chunk);
            }
            if (this.buffer_collector.length >= 16) {
                console.log("Buffer length:" + this.buffer_collector.length);
                var _bufferHeader = Buffer.alloc(16);
                this.buffer_collector.copy(_bufferHeader, 0, 0, 15);
                var header = frameType.decodeHeader(_bufferHeader);
                if (header) {
                    console.log("Data Size:" + header.DataSize);
                    if (this.buffer_collector.length >= header.DataSize + 16) {
                        var sliced_buffer = this.buffer_collector.slice(0, header.DataSize + 16);
                        var rest = Buffer.alloc(this.buffer_collector.length - (header.DataSize + 16));
                        this.buffer_collector.copy(rest, 0, header.DataSize + 16, this.buffer_collector.length);
                        this.buffer_collector = rest;
                        callback(null, sliced_buffer);
                    }
                }
            }
        }
    });

    this.server = net.createServer(
        function (socket) {
            console.log((new Date()) + ' - A client connected to server...' + JSON.stringify(socket.address()));
            socket.id = IdGenerator.generate();
            socket.pipe(this.bufferSplitter).on('data', function (data) {
                self.handleReceived(data, socket);
            });
        }
    );

    this.server.on('error', (err) => {
        throw err;
    });
    this.started = false;
}

TCPPHY.prototype.start = function () {
    var self = this;
    self.server.listen(self.port, self.host, function () {
        console.log("Server listening on port: " + self.port);
    });
    this.started = true;
};

TCPPHY.prototype.stop = function () {
    this.server.stop();
    this.started = false;
};

TCPPHY.prototype.setUpperLayer = function (upper_layer) {
    this.upper_layer = upper_layer;
};

TCPPHY.prototype.setUpperLayer = function (upper_layer) {
    this.upper_layer = upper_layer;
};

TCPPHY.prototype.getUpperLayer = function () {
    return this.upper_layer;
};

TCPPHY.prototype.setLowerLayer = function (lower_layer) {
    this.lower_layer = lower_layer;
};

TCPPHY.prototype.getLowerLayer = function () {
    return this.lower_layer;
};

TCPPHY.prototype.transmit = function (buffer, socket) {
    socket.write(buffer);
};

TCPPHY.prototype.handleReceived = function (buffer, socket) {
    if (this.getUpperLayer()) {
        this.getUpperLayer().handleReceived(buffer, socket);
    }
};

// Now we export the module
module.exports = TCPPHY;