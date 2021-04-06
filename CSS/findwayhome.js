var mar=document.querySelector('marquee')
var dig=document.querySelector('#digital-clock')
function getColor(){
var letters="0123456789ABCDEF"
var color="#"
for(var i=0;i<6;i++){
    var r=Math.floor(Math.random()*16)
    color=color+letters[r]
}
return color;
}
function changeColor(){
mar.style.color=getColor()
dig.style.color=getColor()
}
setInterval(changeColor,1000)
var i = 0;
var images = []; //array
var time = 5000; // time in millie seconds

//images

images[0] = "url(./home.jpg)";
images[1] = "url(./bkgd5.jpg)";
images[2] = "url(./home4.jpg)";
images[3] = "url(./home5.jpg)";
//function

function changeImage() {
    var el = document.getElementById('body');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;
alert("thank you for visiting our website")
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}

// example usage: realtime clock
setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);