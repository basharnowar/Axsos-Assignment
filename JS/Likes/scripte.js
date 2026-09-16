// var like1 = document.querySelector("#neil");

// function increase(){
//     let int = parseInt(like1.innerText)
//     var num = int + 1
//     like1.innerText = num + " like(s)"
// }

function increaseLike(button) {
    const label = button.previousElementSibling;
    const num = parseInt(label.innerText) + 1;
    label.innerText = num + " like(s)";
    
    alert("increaseLikes");
    button.style.backgroundColor= 'blue'
}
