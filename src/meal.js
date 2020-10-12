function nameMenuItem(food) {
  return 'Delicious ' + food
};


function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType
  }
  return menuItem
};

function addIngredients(ingredientAdded, ingredients) {
  if (!ingredients.includes(ingredientAdded)) {
  ingredients.push(ingredientAdded)}
};

function formatPrice(initialPrice) {
  return '$' + initialPrice
};

function decreasePrice(decreasedPrice) {
return decreasedPrice * .9
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}









module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
