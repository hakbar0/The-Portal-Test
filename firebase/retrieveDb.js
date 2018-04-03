const db = require('./connectToDb');

function getDoubleShelf() { db.ref("/HistoryDoubleShelf").on("value", res => {return res.val(); })};

function getSingleShelf() { db.ref("/HistorySingleShelf").on("value", res => {return res.val(); })};

module.exports = {getDoubleShelf, getSingleShelf};