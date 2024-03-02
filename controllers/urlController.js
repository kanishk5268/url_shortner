const  shortid = require("shortid");
const URLshortid = require("../models/urlModel");

const handleNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = shortid(10);
  const url = await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    history: [],
  });
  return res.json({ id: shortID });
};

module.exports = {
  handleNewShortURL,
};
