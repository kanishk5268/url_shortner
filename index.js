const express = require("express");
const dotenv = require("dotenv");
const { dbConnect } = require("./dbConnect");
const urlRoute = require("./routes/urlRoute");

dotenv.config({ path: "./configure.env" });

const app = express();
const port = 3000;

dbConnect(process.env.DATABASE).then(() =>
  console.log("DB is successfully connected")
);

app.use("/url", urlRoute);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
