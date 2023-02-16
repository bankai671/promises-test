const fs = require('fs');
const Interface = require('./Interface');

async function generateFile() {
  const { appendFile } = fs.promises;
  const { id: excuseID, excuse } = await Interface.getExcuse();
  const { ad } = await Interface.isEven(excuseID);

  const adNumbers = ad.split('').filter(Number);
  let lastNumber = 1;

  if (adNumbers.length) {
    lastNumber = Number(adNumbers[adNumbers.length - 1]);
  }

  appendFile('./toGranny.txt', `excuse: ${excuse}\n\n`, {
    encoding: 'utf-8',
  });

  appendFile('./toGranny.txt', `ad: ${ad}\n\njokes: `, {
    encoding: 'utf-8',
  });

  const jokesPromises = [];

  for (let i = 0; i < lastNumber; i += 1) {
    jokesPromises.push(Interface.getJoke());
  }

  const jokesData = (await Promise.all(jokesPromises)).map((joke) => joke.value);

  appendFile('./toGranny.txt', `${jokesData.join('\n')}\n\n`, {
    encoding: 'utf-8',
  });
}

module.exports = { generateFile };
