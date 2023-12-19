// api/translate.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5${text}`,
      {
        source: 'en',
        target: 'ko',
        params: {
          appid: `${process.env.REACT_APP_API_KEY}`,
          units: 'metric',
          lang: 'kr',
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to translate text.' });
  }
};
