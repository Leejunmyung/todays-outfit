// api/translate.js
const axios = require('axios');

module.exports = async (req, res) => {
  const { url, params } = req.body;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}${url}`,
      {
        source: 'en',
        target: 'ko',
        params: params,
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
