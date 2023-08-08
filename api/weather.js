const axios = require('axios');

const instance = axios.create({
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

module.exports = async (params) => {
  try {
    console.log(params);
    const response = await instance.get(`/weather,`, { params });

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to weather api.' });
  }
};
