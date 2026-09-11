function show(element){
    alert("Showing weather for " + element.innerText)
}

function hide(){
    var banner = document.querySelector(".cookie-banner")
    banner.remove();
}