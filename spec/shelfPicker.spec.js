const { expect } = require('chai');
const db = require('../firebase/connectToDb');



describe('Database Test', () => {
  it('Able to retrieve all orders in an object format test 1.', () => {
    db.ref("/HistoryDoubleShelf").once("value", orders => {
      expect(typeof orders.val()).to.equal('object');
    })
  })
  it('Able to retrieve all orders in an object format test 2.', () => {
    db.ref("/HistorySingleShelf").once("value", orders => {
      expect(typeof orders.val()).to.equal('object');
    })
  })
  it('Expect the orders to have the keys, date, pick_location, product_code, quantity.', () => {
    return db.ref("/HistoryDoubleShelf").once("value", orders => {
      orderKeys = Object.keys((Object.values(orders.val()))[0]);
    }).then(somthing => {
      expect(orderKeys).to.eql(['Date', 'pick_Location', 'product_code', 'quantity']);
    })
  })
  it('Updates total number of orders in the database by 1.', () => {
    return db.ref("/HistoryDoubleShelf").once("value", orders => {
    }).then(orders => {
      orderLength = Object.entries(orders.val()).length;
    }).then(placeHolder => {
      return db.ref('/HistoryDoubleShelf').push({
        pick_Location: 'AB 4',
        product_code: '12345',
        quantity: '10',
        Date: new Date(Date.now()).toISOString()
      }).then(placeHolder => {
        return db.ref("/HistoryDoubleShelf").once("value", orders => {
        }).then(newOrder => {
          newOrderLength = Object.entries(newOrder.val()).length;
        }).then(placeHolder => {
          expect(orderLength + 1).to.equal(newOrderLength)
        })
      })
    })
  })
});

