var reA = /[^a-zA-Z]/g;
var reN = /[^0-9]/g;

function sortAlphaNum(a,b) {
  var AInt = parseInt(a[1], 10);
  var BInt = parseInt(b[1], 10);

  if(isNaN(AInt) && isNaN(BInt)){
      var aA = a[1].replace(reA, "");
      var bA = b[1].replace(reA, "");
      if(aA === bA) {
          var aN = parseInt(a[1].replace(reN, ""), 10);
          var bN = parseInt(b[1].replace(reN, ""), 10);
          return aN === bN ? 0 : aN > bN ? 1 : -1;
      } else {
          return aA > bA ? 1 : -1;
      }
  }else if(isNaN(AInt)){
      return 1;
  }else if(isNaN(BInt)){
      return -1;
  }else{
      return AInt > BInt ? 1 : -1;
  }
}

module.exports = sortAlphaNum;