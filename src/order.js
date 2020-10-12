function takeOrder(orderNum, deliveryOrders) {
  if (deliveryOrders.length < 3) {deliveryOrders.push(orderNum)
  }
}
//CODE BELOW PASSES TEST 6
// function refundOrder(orderNum, deliveryOrders) {
//   deliveryOrders.splice(orderNum.orderNumber, 1);
// }

//CODE BELOW SHOULD PASS TEST 7
function refundOrder(orderNum, deliveryOrders) {
  deliveryOrders.splice((orderNum - 1), 1);
}
//CODE BELOW SHOULDS PASS TEST 9
function listItems(deliveryOrders) {
  return deliveryOrders.item



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
