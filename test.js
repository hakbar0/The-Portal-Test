var fs = require('fs');
var csvWriter = require('csv-write-stream')

var writer = csvWriter({ headers: ["hello", "foo"]})
writer.pipe(fs.createWriteStream('out.csv'))
for(let i = 0; i < 5; i++){
writer.write(['world', 'bar'])
}
writer.end()