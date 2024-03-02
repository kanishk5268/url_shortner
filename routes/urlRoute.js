const express = require('express');
const {handleNewShortURL} = require('../controllers/urlController')

const router = express.Router();

router.post('/', handleNewShortURL);

module.exports = router;