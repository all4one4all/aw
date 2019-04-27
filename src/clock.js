var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;
var r = (viewWidth>=viewHeight?viewHeight:viewWidth)/2 -5;

var canvas = document.getElementById('clock');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var cxt = canvas.getContext('2d');



function drawClock() {
    cxt.clearRect(0,0,viewWidth,viewHeight);

    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    hour = hour + min/60;
    hour = hour>12?hour-12:hour;

    for(var i =0 ;i<60;i++){
        cxt.save();
        cxt.lineWidth = 2;
        cxt.strokeStyle = "#565656";
        cxt.translate(viewWidth/2,viewHeight/2);
        cxt.rotate(i*6*Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-r);
        cxt.lineTo(0,-(r-25));
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }

    for(var j =0;j<12;j++){
        cxt.save();
        cxt.lineWidth = 2;
        cxt.strokeStyle = "black";
        cxt.translate(viewWidth/2,viewHeight/2);
        cxt.rotate(j*30*Math.PI/180);
        cxt.beginPath();
        cxt.moveTo(0,-r);
        cxt.lineTo(0,-(r-25));
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }


    var hourNum_part01 = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, '05', 10];

    hourNum_part01.forEach(function(num,i){
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r-15);
        var y = Math.sin(rad) * (r-15);
        cxt.font = "bolder 25px sans-serif ";
        cxt.textAlign = "center";
        cxt.textBaseline = "middle";
        cxt.fillStyle='white';
        cxt.save();
        cxt.translate(viewWidth/2,viewHeight/2);
        cxt.fill();
        cxt.fillText(num, x, y);
        cxt.restore();
    });

    var hourNum_part02 = [3,4,5,6,7,8,9,10,11,12,1,2];

    hourNum_part02.forEach(function(num,i){
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r-90);
        var y = Math.sin(rad) * (r-90);
        cxt.font = "bolder 80px sans-serif ";
        cxt.textAlign = "center";
        cxt.textBaseline = "middle";
        cxt.fillStyle='white';
        cxt.save();
        cxt.translate(viewWidth/2,viewHeight/2);
        cxt.fill();
        cxt.fillText(num, x, y);
        cxt.restore();
    });

    //时针-a
    cxt.save();
    cxt.lineWidth = 10;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(hour*30*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,-(r-120));
    cxt.lineTo(0,0);
    cxt.stroke();
    cxt.closePath();

    cxt.beginPath();
    cxt.arc(0,-80,10,0,360,false);
    cxt.fillStyle = "white";
    cxt.rotate(hour*6*Math.PI/180);
    cxt.fill();
    cxt.stroke();
    cxt.closePath();

    cxt.restore();

    //时针-b
    cxt.save();
    cxt.lineWidth = 30;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(hour*30*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,-(r-130));
    cxt.lineTo(0,-80);
    cxt.stroke();
    cxt.closePath();
    cxt.restore();

    //时针-c
    cxt.save();
    cxt.lineWidth = 10;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(hour*30*Math.PI/180);
    cxt.beginPath();
    cxt.strokeStyle="white";
    cxt.arc(0,-(r-130),10,0,360,false);
    cxt.fillStyle = "white";
    cxt.rotate(hour*6*Math.PI/180);
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
    cxt.restore();


    //分针-a
    cxt.save();
    cxt.lineWidth = 10;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(min*6*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,-(r-25));
    cxt.lineTo(0,0);
    cxt.stroke();
    cxt.closePath();

    cxt.beginPath();
    cxt.arc(0,-80,10,0,360,false);
    cxt.fillStyle = "white";
    cxt.rotate(min*6*Math.PI/180);
    cxt.fill();
    cxt.stroke();
    cxt.closePath();

    cxt.restore();

    //分针-c
    cxt.save();
    cxt.lineWidth = 10;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(min*6*Math.PI/180);

    cxt.beginPath();
    cxt.strokeStyle="white";
    cxt.arc(0,-(r-35),10,0,360,false);
    cxt.fillStyle = "white";
    cxt.rotate(min*6*Math.PI/180);
    cxt.fill();
    cxt.stroke();
    cxt.closePath();

    cxt.restore();

    //分针-b
    cxt.save();
    cxt.lineWidth = 30;
    cxt.strokeStyle = "white";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(min*6*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,-(r-35));
    cxt.lineTo(0,-80);
    cxt.stroke();
    cxt.closePath();

    cxt.restore();

    cxt.beginPath();
    cxt.strokeStyle = "white";
    cxt.arc(viewWidth/2,viewHeight/2,15,0,360,false);
    cxt.fillStyle = "white";
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
    cxt.restore();

    //秒针
    cxt.save();
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#f99e26";
    cxt.translate(viewWidth/2,viewHeight/2);
    cxt.rotate(sec*6*Math.PI/180);
    cxt.beginPath();
    cxt.moveTo(0,-r);
    cxt.lineTo(0,20);
    cxt.stroke();
    cxt.closePath();
    cxt.restore();



    cxt.beginPath();
    cxt.strokeStyle = "#f99e26";
    cxt.arc(viewWidth/2,viewHeight/2,10,0,360,false);
    cxt.fillStyle = "#f99e26";
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
    cxt.restore();

    cxt.beginPath();
    cxt.strokeStyle = "black";
    cxt.arc(viewWidth/2,viewHeight/2,5,0,360,false);
    cxt.fillStyle = "black";
    cxt.fill();
    cxt.stroke();
    cxt.closePath();
    cxt.restore();



}
drawClock();
setInterval(drawClock,1000);
