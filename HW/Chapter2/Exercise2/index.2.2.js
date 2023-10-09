const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const fileStat = util.promisify(fs.stat);

const printFilePath = async dir => {
    try {
        const files = await readDir(dir);    
        files.forEach(async file => {
            
            const filePath = path.join(dir, file);
            const stats = await fileStat(filePath);

            if(stats.isDirectory()) await printFilePath(filePath);
            else if (path.extname(filePath) === '.js') console.log(filePath);
        });
    } catch (err) {
        console.error(err);
    }
};


printFilePath('./test');
