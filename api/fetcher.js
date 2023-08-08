const axios = require('axios');

module.exports = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: `${process.env.REACT_APP_API_KEY}`,
    units: 'metric',
    lang: 'kr',
  },
});
