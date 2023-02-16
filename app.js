const { generateFile } = require('./src/generateFile');
const { spam } = require('./src/spam');

generateFile();

spam(10);
