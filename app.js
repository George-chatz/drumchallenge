
window.addEventListener("keypress",(event)=>{
    let x = event.key;
    if (x == "a") {
        document.getElementById("clap").play();
    }
    else if ( x == "s") {
        document.getElementById("hihat").play();
    }
    else if ( x == "d") {
        document.getElementById("kick").play();
    }
    else if ( x == "f") {
        document.getElementById("openhat").play();
    }
    else if ( x == "g") {
        document.getElementById("boom").play();
    }
    else if ( x == "h") {
        document.getElementById("hide").play();
    }
    else if ( x == "j") {
        document.getElementById("snare").play();
    }
    else if ( x == "k") {
        document.getElementById("tom").play();
    }
    else if ( x == "l") {
        document.getElementById("tink").play();
    }
    
});
