function FRAMETYPE(ID, Seq, Version, Flags, Type, data_buffer) {
    this.header = {
        ID: ID,
        Seq: Seq,
        Version: Version,
        Flags: Flags,
        Type: Type,
        DataSize: data_buffer.length
    };
    this.data = data_buffer;

}

FRAMETYPE.prototype.isValid = function () {
    if (!this.header) return false;

    if ((!this.header.ID) || this.header.ID === 0) return false;
    if ((!this.header.Seq) || this.header.Seq === 0) return false;
    if ((!this.header.Version) || this.header.Version === 0) return false;
    if ((!this.header.Flags) || this.header.Flags === 0) return false;
    if ((!this.header.Type)) return false;
    if ((!this.header.DataSize)) return false;

    return true;
};

FRAMETYPE.prototype.decode = function (buffer) {

    if (!Buffer.isBuffer(buffer)) return null;
    if (buffer.length < 16) return null;

    var frame = new Frame();
    // Parse buffer and construct frame (Little-Endian-Format)
    frame.header.ID = data.readUInt32LE(0);
    frame.header.Seq = data.readUInt32LE(4);
    frame.header.Version = data.readUInt8(8);
    frame.header.Flags = data.readUInt8(9);
    frame.header.Type = data.readUInt16LE(10);
    frame.header.DataSize = data.readUInt32LE(12);
    frame.data = Buffer.alloc(buffer.length - 16);
    buffer.copy(frame.data, 0, 16, buffer.length - 1);

    if (!frame.isValid()) return null;

    return frame;
};

FRAMETYPE.prototype.encode = function (frame) {
    if (!frame.isValid()) return null;
    var buf = Buffer.alloc(16 + frame.header.DataSize);

    // Parse buffer and construct buffer (Little-Endian-Format)
    buf.writeUInt32LE(frame.header.ID, 0);
    buf.writeUInt32LE(frame.header.Seq, 4);
    buf.writeUInt8(frame.header.Version, 8);
    buf.writeUInt8(frame.header.Flags, 9);
    buf.writeUInt16LE(frame.header.Type, 10);
    buf.writeUInt32LE(frame.header.DataSize, 12);
    if (frame.data.length > 0) {
        frame.data.copy(buf, 16, 0, frame.data.length - 1);
    }
    return buf;
};

FRAMETYPE.prototype.decodeHeader = function (buffer) {
    if (!Buffer.isBuffer(buffer)) return null;
    if (buffer.length < 16) return null;

    var header = {
        ID: 0,
        Seq: 0,
        Version: 0,
        Flags: 0,
        Type: 0,
        DataSize: 0
    };

    // Parse buffer and construct frame (Little-Endian-Format)
    header.ID = data.readUInt32LE(0);
    header.Seq = data.readUInt32LE(4);
    header.Version = data.readUInt8(8);
    header.Flags = data.readUInt8(9);
    header.Type = data.readUInt16LE(10);
    header.DataSize = data.readUInt32LE(12);
    if (FRAMETYPE.isValidHeader(header)) {
        return header;
    } else {
        return null;
    }
};

FRAMETYPE.prototype.isValidHeader = function (header) {
    if (!header) return false;

    if ((!header.ID) || header.ID === 0) return false;
    if ((!header.Seq) || header.Seq === 0) return false;
    if ((!header.Version) || header.Version === 0) return false;
    if ((!header.Flags) || header.Flags === 0) return false;
    if ((!header.Type)) return false;
    if ((!header.DataSize)) return false;

    return true;
};

FRAMETYPE.prototype.FRAMEHEADERID = 0x78315356;
FRAMETYPE.prototype.FRAMEHEADERVERSION = 0x10;
FRAMETYPE.prototype.FRAMEHEADER_SIZE = 16;


// Constants for the different flags
FRAMETYPE.prototype.ERRORFLAG = 0x8;
FRAMETYPE.prototype.FINISHEDFLAG = 0x10;
FRAMETYPE.prototype.ACKNOWLEDGEFLAG = 0x20;
FRAMETYPE.prototype.REQUESTFLAG = 0x40;
FRAMETYPE.prototype.SOURCEFLAG = 0x80;

FRAMETYPE.prototype.IDLEFRAMETYPE = 0x00;
FRAMETYPE.prototype.DATAFRAMETYPELOW = 0x0001;
FRAMETYPE.prototype.DATAFRAMETYPEHIGH = 0x7FFF;
FRAMETYPE.prototype.CMDFRAMETYPELOW = 0x8000;
FRAMETYPE.prototype.CMDFRAMETYPEHIGH = 0xFFFF;

FRAMETYPE.prototype.IMAGEFRAMETYPE = 0x0180;

module.exports = FRAMETYPE;