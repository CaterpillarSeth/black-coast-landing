const fs = require('fs');
const p1 = fs.readFileSync('p1.html', 'utf8');
const p2 = fs.readFileSync('p2.html', 'utf8');
const p3 = fs.readFileSync('p3.html', 'utf8');
fs.writeFileSync('index.html', p1 + '\n' + p2 + '\n' + p3);
console.log('index.html written. Size:', fs.statSync('index.html').size);
