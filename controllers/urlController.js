const shortid = require("shortid");
const URL = require("../models/urlModel");

const handleNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortId = shortid(10);
  const url = await URL.create({
    shortId,
    redirectURL: req.body.url,
    history: [],
  });
  return res.json({ id: shortId });
};

const handleAnalysis = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.history.length,
    analysis: result.history,
  });
};

module.exports = {
  handleNewShortURL,
  handleAnalysis,
};
