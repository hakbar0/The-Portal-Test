const order = [];
var fs = require('fs');
var csvWriter = require('csv-write-stream')

var writer = csvWriter({ headers: ["Location", "Product Number", "Quantity"]})
writer.pipe(fs.createWriteStream('out.csv'))


function orderPickLocation(orderSingle, orderDouble){
orderSingle.sort(sortFunction);
orderDouble.sort(sortFunction);
order.push(orderSingle, orderDouble);

for(let i =0; i < order.length; i++){
  writer.write([`${order[0][i][0]}`, `${ order[0][i][1]}`, `${order[0][i][2]}`])
}

writer.end()
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
