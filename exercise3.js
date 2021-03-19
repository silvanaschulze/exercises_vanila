
var fs = require('fs');
fs.readFile('text.html', 'utf8' , (err,data) => {
    if(err) throw err;
        
    console.log(data);
});

