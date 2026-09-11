function pizzaOven(crust, cheeses, sauce, toppings) {
return { crust: crust, sauce: sauce, cheeses: cheeses, toppings: toppings };
}

var pizza1 = pizzaOven("deep dish", ["mozzarella"], "traditional", ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", ["mozzarella","feta"], "marinara", ["mushrooms","olives","onions"]);
console.log(pizza2)

var pizza3 = pizzaOven("thin crust", ["cheddar","parmesan"], "pesto", ["chicken","bacon","pineapple"]);
console.log(pizza3)

var pizza4 = pizzaOven("thin crust", ["ricotta","mozzarella"], "buffalo",["ground beef", "lettuce", "tomatoes"]);
console.log(pizza4)




console.log(Math.random());



console.log(Math.random(), Math.random(), Math.random(), Math.random());

var arr = ["apple", "banana", "cherry"];
console.log(arr[3]);

function randomPizza() {
  var crusts = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
  var sauces = ["traditional", "marinara", "pesto", "bbq"];
  var cheeses = ["mozzarella", "feta", "cheddar", "parmesan"];
  var toppings = ["pepperoni", "mushrooms", "onions", "bacon", "olives"];

  var randomCrust = crusts[Math.floor(Math.random() * crusts.length)];
  var randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
  var randomCheese = [cheeses[Math.floor(Math.random() * cheeses.length)]];
  var randomToppings = [toppings[Math.floor(Math.random() * toppings.length)], toppings[Math.floor(Math.random() * toppings.length)]];

  return pizzaOven(randomCrust, randomCheese, randomSauce, randomToppings);
}

var pizza5 = randomPizza();
console.log(pizza5);