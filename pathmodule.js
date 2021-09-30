const path = require('path');

const baseName = path.basename('C:\\temp\\myfile.html');
const directoryName = path.dirname('C:\\temp\\myfile.html');
const extensionName = path.extname(__filename);
console.log(baseName);
console.log(directoryName);
console.log(extensionName);