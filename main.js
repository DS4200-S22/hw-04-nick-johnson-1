let clicks = 0;

function circle1Clicked() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
let visible = true;

function circle3Clicked() {
    
    visible = !visible;
    if(visible) {
        
    document.getElementById("button3").style.opacity = "0.0";
        
    }
    else {
        
        document.getElementById("button3").style.opacity = "1.0";
    }
};
