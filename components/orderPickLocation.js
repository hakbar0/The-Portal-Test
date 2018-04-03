const order = [];
const fs = require('fs');
const csvWriter = require('csv-write-stream')
const { getDoubleShelf, getSingleShelf } = require('../firebase/retrieveDb');


// var writer = csvWriter({ headers: ["pick_location", "product_code", "quantity"] })
// writer.pipe(fs.createWriteStream('./CSV/input.csv'))


// function orderPickLocation() {
  

//   orderSingle.sort(sortFunction);
//   orderDouble.sort(sortFunction);

//   if (!orderDouble.length) order.push(orderSingle);
//   else if (!orderDouble.length) order.push(rderDouble);
//   else order.push(orderSingle, orderDouble);

//   for (let i = 0; i < order.length; i++)  writer.write([order[0][i][0], order[0][i][1], order[0][i][2]])
//   writer.end()
// }

// function sortFunction(a, b) {
//   if (a[0] === b[0]) return 0;
//   else return (a[0] < b[0]) ? -1 : 1;
// }


module.exports = orderPickLocation;
