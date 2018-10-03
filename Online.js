var img1;
var downsamp;
var resolution;
var jg;
var starttime;
var refreshDelay;
var halfres;
var fontsize;
var qualtoggle;
var limitedInlineImagesAppendix;
var imageRemoved;
var trymax32kb;
var imgChoice;
var drawSearchROI;
var drawSearchName;
var drawResultROI;
var drawResultText;
var drawCharROI;
var drawCharResult;
var drawCharQual;
var drawCodeGrid;
var drawCodeCells;
var drawHighlighedText;
var drawLocInstanceInfo;
var img_curw;
var img_curh;
var noimagestr = "data:image/jpeg;base64,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"

function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function triggerNextRefresh(wait) {
    window.setTimeout(function () {
        doRefresh();
    }, wait);
}

function doRefresh() {
    var req = new Object();
    req.option = new Object();
    var theRequest;
    var response;
    var rc = -1;
    req.object = 10;
    req.option.resulttype = parseInt(imgChoice);
    req.option.imgsize = downsamp;
    req.option.trymax32kb = trymax32kb;
    starttime = new Date().getTime();
    response = RequestData(JSON.stringify(req));
    if (response.err == 0)
        rc = parseNewImageData(response.object);
    if (rc != 0)
        removeOldResult();
    delete response;
}

function calcScaler() {
    switch (img_orig) {
        case 1600:
            if (downsamp)
                scaler = 5.0;
            else
                scaler = 1.0;
            break;
        default:
            if (downsamp)
                scaler = 2.0;
            else
                scaler = 1.0;
            break;
    }
}

function selectOffset() {
    var theoffset = {
        x: img1.offsetLeft,
        y: img1.offsetTop
    };
    document.getElementById("panel1").style.top = theoffset.y;
    document.getElementById("panel1").style.left = theoffset.x;
    document.getElementById("panel1").style.width = img1.width;
    document.getElementById("panel1").style.height = img1.height;
}

function reloadWrapperInit() {
    var version = getInternetExplorerVersion();
    var IE8OrLower = ((version > -1) && (version <= 8));
    var req = new Object();
    var sysinfo;
    req.object = 0;
    sysinfo = RequestData(JSON.stringify(req));
    img_orig = -1;
    if (sysinfo.err == 0) {
        document.title = sysinfo.object.device.name + " Monitoring";
        var devname = sysinfo.object.device.name.toLowerCase();
        var pos = devname.search(/mv4\d\d/);
        if (pos > -1) {
            var devtype = devname.substr(pos + 6, 2);
            switch (devtype) {
                case "sr":
                    img_orig = 640;
                    break;
                case "hr":
                    img_orig = 1024;
                    break;
                case "ur":
                    img_orig = 1600;
                    break;
            }
        }
    }
    if (img_orig == -1) {
        window.setTimeout(function () {
            reloadWrapperInit();
        }, 1000);
        return;
    }
    resolution = -1;
    downsamp = 1;
    img1 = document.getElementById("img1");
    img1.src = noimagestr;
    refreshDelay = 250;
    setImgOpacity(100);
    imageRemoved = false;
    trymax32kb = IE8OrLower;
    if (jg == null)
        jg = new jsGraphics("panel1");
    triggerNextRefresh(refreshDelay);
    drawSearchROI = document.getElementById("cb_SearchROI").checked;
    drawSearchName = document.getElementById("cb_SearchName").checked;
    drawResultROI = document.getElementById("cb_ResultROI").checked;
    drawResultText = document.getElementById("cb_ResultText").checked;
    drawCharROI = document.getElementById("cb_CharROI").checked;
    drawCharResult = document.getElementById("cb_CharResult").checked;
    drawCharQual = document.getElementById("cb_CharQual").checked;
    drawCodeGrid = document.getElementById("cb_CodeGrid").checked;
    drawCodeCells = document.getElementById("cb_CodeCells").checked;
    drawLocInstanceInfo = document.getElementById("cb_LocInstanceInfo").checked;
    drawHighlighedText = document.getElementById("cb_Highlight").checked;
    imgChoice = document.getElementById("ch_Img").value;
    calcScaler();
}

function parseNewImageData(resultObj) {
    var diff, timestamp;
    var remainingDelay;
    var i, j, k;
    var text;
    qualtoggle = false;
    if ((resultObj.images == undefined) || (resultObj.images.length < 1))
        return 1;
    imageRemoved = false;
    img1.src = resultObj.images[0].data;
    img_curw = resultObj.images[0].width;
    img_curh = resultObj.images[0].height;
    if (img_orig == 1600 && img_curw == 400) {
        img_curw = 320;
        img_curh = 240;
    }
    img1.width = img_curw;
    img1.height = img_curh;
    jg.clear();
    if (img_curw == img_orig / 2 && downsamp == 0)
        halfres = 2;
    else
        halfres = 1;
    selectOffset();
    if (downsamp) {
        jg.setFont("Arial", "10px", Font.PLAIN);
        fontsize = 10;
    } else {
        jg.setFont("Arial", "12px", Font.PLAIN);
        fontsize = 12;
    }
    jg.setStroke(1);
    if (resultObj.stepdetails == undefined)
        return 2;
    var steps = resultObj.stepdetails.length;
    for (i = 0; i < steps; i++) {
        var stepresult = resultObj.stepdetails[i];
        if (stepresult != null) {
            convertCoordArray(stepresult.position);
            if (drawSearchROI)
                drawFrame(stepresult.position, -1);
            if (drawSearchName)
                drawROIName(stepresult.position, stepresult.name, -1);
            if (stepresult.results != null) {
                for (j = 0; j < stepresult.results.length; j++) {
                    var result = stepresult.results[j];
                    convertCoordArray(result.position);
                    if (drawResultROI)
                        drawFrame(result.position, result.classification);
                    if (drawResultText)
                        drawResultString(result.position, result.string, result.classification);
                    if ((result.ct == 'J') && (result.details)) {
                        for (k = 0; k < result.details.length; k++)
                            convertCoordArray(result.details[k].position);
                        if (drawCharROI) {
                            for (k = 0; k < result.details.length; k++) {
                                drawFrame(result.details[k].position, result.details[k].classification);
                            }
                        }
                        if (drawCharResult || drawCharQual) {
                            for (k = 0; k < result.details.length; k++) {
                                text = "";
                                if (drawCharResult) {
                                    text += result.details[k].string;
                                    if (drawCharQual)
                                        text += ": ";
                                }
                                if (drawCharQual)
                                    text += getCharQuality(result.details[k].alternatives, result.details[k].string);
                                drawCharInfo(result.details[k].position, text, result.details[k].classification);
                            }
                        }
                    }
                    if ((result.ct == 'D') && (result.details)) {
                        if (drawCodeCells && result.details.dots)
                            drawDots(result.details.dots);
                        if (drawCodeGrid && result.details.lines)
                            drawLines(result.details.lines);
                    }
                    if ((result.ct == 'l') && (result.details)) {
                        if (drawLocInstanceInfo)
                            drawInstanceInfo(result.position, result.details.x, result.details.y, result.details.description, result.details.reference)
                    }
                }
            }
        }
    }
    jg.paint();
    timestamp = new Date().getTime();
    diff = timestamp - starttime;
    document.getElementById("timebox").innerHTML = "<font size=\"-2\">Request time " + diff + "ms</font>";
    remainingDelay = 100;
    if (diff < refreshDelay)
        remainingDelay += (refreshDelay - diff);
    triggerNextRefresh(remainingDelay);
    return 0;
}

function RequestData(request) {
    var xmlHttpRequest = false;
    var response = null;
    if (!xmlHttpRequest && typeof XMLHttpRequest != 'undefined') {
        try {
            xmlHttpRequest = new XMLHttpRequest();
        } catch (e) {
            xmlHttpRequest = false;
        }
    }
    if (!xmlHttpRequest && window.createRequest) {
        try {
            xmlHttpRequest = window.createRequest();
        } catch (e) {
            xmlHttpRequest = false;
        }
    }
    xmlHttpRequest.open("POST", "webapi/monitor.cgi", false);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.setRequestHeader("Content-length", request.length);
    xmlHttpRequest.setRequestHeader("Connection", "close");
    xmlHttpRequest.send(request);
    if ((xmlHttpRequest.readyState == 4) && (xmlHttpRequest.status == 200)) {
        response = JSON.parse(xmlHttpRequest.responseText);
    }
    delete xmlHttpRequest;
    return response;
}

function removeOldResult() {
    if ((jg != null) && (!imageRemoved)) {
        imageRemoved = true;
        selectOffset();
        jg.clear();
        jg.setColor("d9d9d9");
        jg.fillRect(0, 0, img1.width, img1.height);
        jg.drawImage(noimagestr, (img1.width - 320) / 2, (img1.height - 240) / 2);
        jg.paint();
    }
    triggerNextRefresh(refreshDelay);
}

function drawFrame(coords, classification) {
    var i;
    setColor(classification);
    jg.drawLine(coords[0].x, coords[0].y, coords[1].x, coords[1].y);
    jg.drawLine(coords[1].x, coords[1].y, coords[2].x, coords[2].y);
    jg.drawLine(coords[2].x, coords[2].y, coords[3].x, coords[3].y);
    jg.drawLine(coords[3].x, coords[3].y, coords[0].x, coords[0].y);
}

function convertCoordArray(coords) {
    for (i = 0; i < coords.length; i++) {
        coords[i] = getpoints(coords[i].x, coords[i].y);
    }
}

function getpoints(a, b) {
    var x, y;
    var point = {
        x: 0,
        y: 0
    };
    var leftborder, rightborder, topborder, botborder;
    leftborder = 0;
    topborder = 0;
    rightborder = img1.width;
    botborder = img1.height;
    point.x = ((a / halfres) / scaler + img_curw / 2.0);
    if (point.x < leftborder)
        point.x = leftborder;
    if (point.x > rightborder)
        point.x = rightborder;
    point.y = (img_curh / 2.0 - (b / halfres) / scaler);
    if (point.y < topborder)
        point.y = topborder;
    if (point.y > botborder)
        point.y = botborder;
    return point;
}

function setColor(classification) {
    switch (classification) {
        case 0:
        case 1:
        case 4:
        case 13:
        case 14:
        case 23:
            jg.setColor("green");
            break;
        case 2:
        case 12:
            jg.setColor("yellow");
            break;
        case 3:
        case 5:
        case 11:
        case 20:
        case 21:
        case 22:
            jg.setColor("red");
            break;
        case 10:
            jg.setColor("black");
            break;
        default:
            jg.setColor("blue");
            break;
    }
}

function drawROIName(coords, string, classification) {
    setColor(classification);
    drawString(string, coords[0].x + 1, coords[0].y - fontsize - 3);
}

function drawResultString(coords, string, classification) {
    setColor(classification);
    drawString(string, coords[0].x + 1, coords[0].y - fontsize - 3);
}

function drawCharInfo(coords, string, classification) {
    var y = (qualtoggle) ? coords[3].y + 3 : coords[3].y - fontsize - 3;
    qualtoggle = !qualtoggle;
    setColor(classification);
    drawString(string, coords[3].x + 1, y);
}

function drawDots(dots) {
    var i, point, offset, size;
    size = downsamp ? 2 : 4;
    offset = size / 2;
    for (i = 0; i < dots.length; i++) {
        point = getpoints(dots[i].x, dots[i].y);
        setColor(dots[i].classification);
        jg.fillRect(point.x - offset, point.y - offset, size, size);
    }
}

function drawLines(lines) {
    var i, point1, point2;
    setColor(0);
    for (i = 0; i < lines.length; i++) {
        point1 = getpoints(lines[i][0].x, lines[i][0].y);
        point2 = getpoints(lines[i][1].x, lines[i][1].y);
        jg.drawLine(point1.x, point1.y, point2.x, point2.y);
    }
}

function drawString(string, x, y) {
    if (drawHighlighedText)
        jg.drawHighlightedString(string, x, y, "lightgray");
    else
        jg.drawString(string, x, y);
}

function drawInstanceInfo(coords, xc, yc, description, reference) {
    var descWithRef = description;
    var linelength = 5;
    var p1 = getpoints(xc, yc + linelength);
    var p2 = getpoints(xc, yc - linelength);
    var p3 = getpoints(xc + linelength, yc);
    var p4 = getpoints(xc - linelength, yc);
    jg.drawLine(p1.x, p1.y, p2.x, p2.y);
    jg.drawLine(p3.x, p3.y, p4.x, p4.y);
    if (reference) {
        descWithRef += " ("
        descWithRef += reference;
        descWithRef += ")";
    }
    drawString(description, coords[1].x + 1, coords[1].y - fontsize - 3);
}

function getCharQuality(alternatives, string) {
    var i, qual;
    qual = 0;
    for (i = 0; i < alternatives.length; i++) {
        if (alternatives[i].character == string) {
            qual = alternatives[i].confidence;
            break;
        }
    }
    return qual;
}

function setImgOpacity(value) {
    img1.style.opacity = value / 100;
    img1.style.filter = 'alpha(opacity=' + value + ')';
}

function onClicked(control) {
    switch (control.id) {
        case "rb_Small":
            downsamp = 1;
            calcScaler();
            break;
        case "rb_Full":
            downsamp = 0;
            calcScaler();
            break;
        case "cb_Pale":
            setImgOpacity(control.checked ? 30 : 100);
            break;
        case "cb_SearchROI":
            drawSearchROI = control.checked;
            break;
        case "cb_SearchName":
            drawSearchName = control.checked;
            break;
        case "cb_ResultROI":
            drawResultROI = control.checked;
            break;
        case "cb_ResultText":
            drawResultText = control.checked;
            break;
        case "cb_CharROI":
            drawCharROI = control.checked;
            break;
        case "cb_CharResult":
            drawCharResult = control.checked;
            break;
        case "cb_CharQual":
            drawCharQual = control.checked;
            break;
        case "cb_CodeGrid":
            drawCodeGrid = control.checked;
            break;
        case "cb_CodeCells":
            drawCodeCells = control.checked;
            break;
        case "cb_LocInstanceInfo":
            drawLocInstanceInfo = control.checked;
            break;
        case "cb_Highlight":
            drawHighlighedText = control.checked;
            break;
        case "ch_Img":
            imgChoice = control.value;
            break;
        default:
            alert("Unknown control " + control.id);
            break;
    }
    return 1;
}