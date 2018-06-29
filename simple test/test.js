var path = require('path');
var fs = require('fs');
var Px2rem = require('../lib/px2rem')

var px2remIns = new Px2rem({
    excludeProperty: ['font-size']
})

var srcPath = path.join(__dirname, 'test.css')
var srcText = fs.readFileSync(srcPath, {encoding: 'utf8'});

var outputText = px2remIns.generateRem(srcText)

console.log(outputText)
