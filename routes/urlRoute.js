const express = require('express');
const {handleNewShortURL,handleAnalysis} = require('../controllers/urlController')

const router = express.Router();

router.post('/', handleNewShortURL);

router.get('/analysis/:shortId',handleAnalysis)

module.exports = router;