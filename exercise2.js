
    const fs = require('fs');
    fs.writeFile('text.html', 'Hello', function (err) {
        if (err)
        return console.log(err);
        
    });


