// api/translate.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${url}${text}`,
      {
        source: 'en',
        target: 'ko',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          appid: `${process.env.REACT_APP_API_KEY}`,
          units: 'metric',
          lang: 'kr',
        },
      },
    );

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to translate text.' });
  }
};
