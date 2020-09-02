const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const port = 8080;

app.use(express.static("build"));

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/", router);
let listener = app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${listener.address().port}`);
});
