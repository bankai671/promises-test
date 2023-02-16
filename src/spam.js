const Interface = require('./Interface');

async function spam(num) {
  const excusesPromises = [];
  const adPromises = [];
  const jokesPromises = [];

  for (let i = 0; i < num; i += 1) {
    excusesPromises.push(Interface.getExcuse());
  }

  const excuses = await Promise.all(excusesPromises);

  for (let i = 0; i < num; i += 1) {
    adPromises.push(Interface.isEven(excuses[i].id));
    jokesPromises.push(Interface.getJoke());
  }

  const ads = await Promise.all(adPromises);
  const jokes = await Promise.all(jokesPromises);

  const result = [];

  for (let i = 0; i < num; i += 1) {
    result.push({
      excuse: excuses[i].excuse,
      ad: ads[i].ad,
      joke: jokes[i].value,
    });
  }

  // eslint-disable-next-line no-console
  console.log(result);
}

module.exports = { spam };
