const { expect } = require('chai');
const db = require('../firebase/connectToDb');


describe('Database Test', () => {
  it('Able to retrieve all orders in an object format test 1.', () => {
    db.ref("/HistoryDoubleShelf").once("value", orders => {
      expect(typeof orders.val()).to.equal('object');
    })
  })
  it('Able to retrieve all orders in an object format test 2.', () => {
    db.ref("/HistorySingleShelf").once("value", order => {
      expect(typeof order.val()).to.equal('object');
    })
  })
});