const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'files');

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirpath}/hello${i}.txt`, `i am savege from brt`);
// }



fs.readdir(dirpath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    files.forEach((item) => {
        console.log('file name is ' + item);
    });
});
