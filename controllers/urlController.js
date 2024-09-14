const Url = require('../models/Url');
const shortid = require('shortid');

// Shorten URL
exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const baseUrl = process.env.CLIENT_URL;
  const shortId = shortid.generate();
  const shortUrl = `${baseUrl}/${shortId}`;

  try {
    const url = new Url({ originalUrl, shortUrl, user: req.user.id });
    await url.save();
    res.json(url);
  } catch (error) {
    res.status(500).json({ message: 'Error shortening URL' });
  }
};

// Get URLs for a specific user
exports.getUserUrls = async (req, res) => {
  try {
    const urls = await Url.find({ user: req.user.id });
    res.json(urls);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving URLs' });
  }
};
