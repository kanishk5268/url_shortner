const express = require("express");
const dotenv = require("dotenv");
const URL = require("./models/urlModel");
const { dbConnect } = require("./dbConnect");
const urlRoute = require("./routes/urlRoute");

dotenv.config({ path: "./configure.env" });

const app = express();
const port = 3000;

dbConnect(process.env.DATABASE).then(() =>
  console.log("DB is successfully connected")
);

app.use(express.json());
app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const original = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        history: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(original.redirectURL);
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
