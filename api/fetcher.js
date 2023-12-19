// api/translate.js
const baseApi = require('../src/apiClient/Fetcher');

module.exports = async (req, res) => {
  const { url, params } = req.body;

  try {
    const response = await baseApi.get(url, params);

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to translate text.' });
  }
};
