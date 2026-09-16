function show(element){
    alert("Showing weather for " + element.innerText)
}

function hide(){
    var banner = document.querySelector(".cookie-banner")
    banner.remove();
}

function change(){
    var CF = document.querySelector('.high');
    CF.innerText = "70";
}

// function anything(eleem) {
//     var unit = eleem.value; 

//     var highs = document.querySelectorAll(".high");
//     var lows = document.querySelectorAll(".low");

//     var nums = document.querySelector("p span");
    

//     for (var i = 0; i < highs.length; i++) {
//         if (unit === "C") {
//             highs[i].innerText = highC[i] + "°";
//             lows[i].innerText = lowC[i] + "°";
//         } else {
//             highs[i].innerText = Math.round(highC[i] * 9 / 5 + 32) + "°";
//             lows[i].innerText = Math.round(lowC[i] * 9 / 5 + 32) + "°";
//         }
//     }
// }