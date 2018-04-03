const order = [];

function orderPickLocation(orderSingle, orderDouble){
orderSingle.sort(sortFunction);
orderDouble.sort(sortFunction);
order.push(orderSingle, orderDouble);

order.forEach(function(element) {
  console.log(element);
}, this);

}

function sortFunction(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}

module.exports = orderPickLocation;
