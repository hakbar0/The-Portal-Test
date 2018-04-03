const db = require('./connectToDb');


function getDoubleShelf() { return db.ref("/HistoryDoubleShelf").on("value", res => {return res.val(); })};

function getSingleShelf() { return db.ref("/HistorySingleShelf").on("value", res => {return res.val(); })};

module.exports = {getDoubleShelf, getSingleShelf};