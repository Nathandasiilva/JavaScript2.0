const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) { 
    for (let file of files) {
        const fileFullpath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullpath);

        if(/\.git/g.test(fileFullpath)) continue;
        if(/\node_modules/g.test(fileFullpath)) continue;
        

        if(stats.isDirectory()) {
            readdir(fileFullpath);
            continue;
        }
        if (
            !/\.html$/g.test(fileFullpath)
        )continue;
        console.log(fileFullpath);
    }
}

readdir('/estudos/JavaScript2.0/JavaScript2.0/JavaScript2.0/JavaScript2.0/')