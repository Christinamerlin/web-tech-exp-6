function change(){
    var div = document.getElementById("box");

    var bgcolor = document.getElementById("bgcolor").value;
    div.style.backgroundColor = bgcolor;

    var tcolor = document.getElementById("tcolor").value;
    div.style.color = tcolor;

    var tsize = document.getElementById("tsize").value;
    div.style.fontSize = tsize + "px";

    var width = document.getElementById("width").value;
    div.style.width = width + "px";

    var height = document.getElementById("height").value;
    div.style.height = height + "px";

    var bdradius = document.getElementById("bdradius").value;
    div.style.borderRadius = bdradius + "%";
}


//2
var car = null;
var timer = null;
function init(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left ="4px";
}

function move(){
    car.style.left= parseInt(car.style.left) + 10 + "px";
    timer = setTimeout(move,200)
    x=parseInt(car.style.left)
    if(x >= 1200){
        document.getElementById("dangermsg").innerHTML="DANGER";
        dangermsg.style.display = "block";
        clearTimeout(timer);
    }
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    init();
}