const singleOrder = [];
const doubleOrder = [];
const order = [];
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const db = require('../firebase/connectToDb');
const sortAlphaNum = require('./sort');
const moment = require('moment');


var writer = csvWriter({ headers: ["date","pick_location", "product_code", "quantity"] })
writer.pipe(fs.createWriteStream('./CSV/input.csv'))


function orderPickLocation() {
  return db.ref("/HistoryDoubleShelf").once("value", res => {
  }).then(dbDoubleShelf => {
    doubleShelf = dbDoubleShelf.val()
    return db.ref("/HistorySingleShelf").once("value", res => {
    }).then(dbSingleShelf => {
      singleShelf = dbSingleShelf.val()

      for (let i = 0; i < Object.values(singleShelf).length; i++) singleOrder.push(Object.values(((Object.values(singleShelf))[i])))

      for (let i = 0; i < Object.values(doubleShelf).length; i++) doubleOrder.push(Object.values(((Object.values(doubleShelf))[i])))

      singleOrder.sort(sortAlphaNum);
      doubleOrder.sort(sortAlphaNum);

    if (!doubleOrder.length) order.push(singleOrder);
    else if (!singleOrder.length) order.push(doubleOrder);
    else order.push(singleOrder, doubleOrder);

    const finalOrder = [].concat.apply([], order);

    for (let i = 0; i < finalOrder.length; i++)  writer.write([moment(finalOrder[i][0]).format('LLLL'), finalOrder[i][1], finalOrder[i][2], finalOrder[i][3]])
    writer.end();
    console.log('CSV FILE MADE, PLEASE PRESS CTRL/CMD AND C TO QUIT.')
    })
  })
}

module.exports = orderPickLocation;




