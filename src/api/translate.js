// api/translate.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      'https://openapi.naver.com/v1/papago/n2mt',
      {
        source: 'en',
        target: 'ko',
        text: text,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
        },
      },
    );

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to translate text.' });
  }
};
