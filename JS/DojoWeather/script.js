function show(element){
    alert("Showing weather for " + element.innerText)
    
}

// function show(element) {
//     var show = document.querySelector(".show")
//     show.remove();
// }

// function hide(){
//     var banner = document.querySelector(".cookie-banner")
//     banner.remove();
// }

// function change(){
//     var CF = document.querySelector('.high');
//     CF.innerText = "70";
// }

function change(eleem) {
    var unit = eleem.value; 

    var highs = document.querySelectorAll(".high");
    var lows = document.querySelectorAll(".low");

    for (var i = 0; i < highs.length; i++) {
        var highC = Number(highs[i].dataset.c);
        var lowC = Number(lows[i].dataset.c);

        if (unit === "C") {
            highs[i].innerText = highC + "°";
            lows[i].innerText = lowC + "°";
        }
        if (unit === "F") {
            highs[i].innerText = Math.round(highC * 9 / 5 + 32) + "°";
            lows[i].innerText = Math.round(lowC * 9 / 5 + 32) + "°";
        }
    }
}