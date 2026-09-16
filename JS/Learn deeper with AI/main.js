for (var number = 1; number <= 20; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log(number + " is divisble by both 3 and 5");

    } else if (number % 3 === 0) {
        console.log(number + " is divisble by 3");
    } else if (number % 5 === 0) {
        console.log(number + " is divisble by 5");
    } else {
        console.log(number + " is not divisble by 3 or 5");
    }
}


const prices = [4, 10, 7, 15, 3];

function calculateTotal(items) {
    var total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}


function countExpensiveItems(items) {
    var count = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i] > 8) {
            count++;
        }
    }
    return count;      // the return count; was out side of the function
}



const totalPrice = calculateTotal(prices);
const expensiveItems = countExpensiveItems(prices);
console.log("Total prices: " + totalPrice);
console.log("Expensive items: " + expensiveItems);




function chooseColor(button){
    let message = document.querySelector("#message");
    message.innerText = "You selected:" + button.innerText;
    button.style.border = "3px solid black";
}
function previewColor(button){
    let preview = document.querySelector("#preview");
    preview.innerText = "Hover over a button to preview a color";
}