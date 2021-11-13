const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
console.log("Ingredients using for loop: ");
while(i < ingredients.length){
	console.log(ingredients[i]);
	i++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients using while loop: ")
for (let i = 0; i < ingredients.length; i++) {
	console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Ingredients in reverse using for loop: ")
for (let i = ingredients.length - 1; i >= 0; i--) {
	console.log(ingredients[i]);
}