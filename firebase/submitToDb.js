const db = require('./connectToDb');

function singleShelfToDb(pick_Location, product_code, quantity){
db.ref('/HistorySingleShelf').push({
  pick_Location,
  product_code,
  quantity,
  Date: new Date(Date.now()).toISOString()
  })
};

function DoubleShelfToDb(pick_Location, product_code, quantity){
  db.ref('/HistoryDoubleShelf').push({
    pick_Location,
    product_code,
    quantity,
    Date: new Date(Date.now()).toISOString()
    })
  };

module.exports = {singleShelfToDb, DoubleShelfToDb};