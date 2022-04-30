for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var file = "sounds/button-click.mp3";
         playSound(file);
     })
}


for (var i = 0;i < 5; i++) {
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function() {
        var file = "sounds/button-click.mp3";
         playSound(file);
     })
}


function playSound(file) {
    var audio = new Audio(file);
    audio.play();   
}

