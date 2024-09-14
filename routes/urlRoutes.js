const express = require('express');
const { shortenUrl, getUserUrls } = require('../controllers/urlController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/shorten', auth, shortenUrl);
router.get('/urls', auth, getUserUrls);

module.exports = router;
