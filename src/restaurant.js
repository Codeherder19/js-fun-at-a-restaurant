function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
}
return restaurant;
}

function addMenuItem(restaurantName, menuItem) {
if (menuItem.type === 'lunch' && !restaurantName.menus.lunch.includes(menuItem)) {
  restaurantName.menus.lunch.push(menuItem);
} else if (menuItem.type === 'breakfast' && !restaurantName.menus.breakfast.includes(menuItem)) {
  restaurantName.menus.breakfast.push(menuItem);
}
}
//Code below was almost there, time to push your work to github

// function removeMenuItem (restaurantName, menuItem, menuType) {
//   var arrayOfMenuTypes = restaurantName.menus[menuType];
//   for (var i = 0; i < arrayOfMenuTypes.length; i++) {
//     if (menuItem === arrayOfMenuTypes[i].name) {
//      arrayOfMenuTypes.splice(i, 1);
//      return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`;
//  }
//
// }
// return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
// }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
