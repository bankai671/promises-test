const axios = require('axios');

class Interface {
  static getJoke() {
    return axios('https://api.chucknorris.io/jokes/random').then((res) => res.data);
  }

  static getExcuse() {
    return axios('https://excuser-three.vercel.app/v1/excuse').then((res) => res.data[0]);
  }

  static isEven(number) {
    return axios(`https://api.isevenapi.xyz/api/iseven/${number}`).then((res) => res.data);
  }
}

module.exports = Interface;
