
var header = document.getElementById("header")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modelx")
var my = document.getElementById("modely")
var model = document.getElementById("model")
var speed = document.getElementById("speed")
var mph = document.getElementById("mph")
var mi = document.getElementById("mi")

ms.onclick = function(){
    header.style.backgroundImage = "url(../images/image-1.png)"
    model.innerHTML = "Model S";
    speed.innerHTML = "1.9 s";
    mph.innerHTML = "200 mph";
    mi.innerHTML = "396 mi";
}

m3.onclick = function(){
    header.style.backgroundImage = "url(../images/image-2.png)"
    model.innerHTML = "Model 3";
    speed.innerHTML = "1.7 s";
    mph.innerHTML = "220 mph";
    mi.innerHTML = "415 mi";
}

mx.onclick = function(){
    header.style.backgroundImage = "url(../images/image-3.png)"
    model.innerHTML = "Model X";
    speed.innerHTML = "1.5 s";
    mph.innerHTML = "240 mph";
    mi.innerHTML = "458 mi";
}

my.onclick = function(){
    header.style.backgroundImage = "url(../images/image-4.png)"
    model.innerHTML = "Model Y";
    speed.innerHTML = "1.3 s";
    mph.innerHTML = "250 mph";
    mi.innerHTML = "510 mi";
}