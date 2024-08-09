const express = require("express");
const app = express();
const port = 5000;

app.get("/api/hello", (req, res) => {
  res.send({ message: "Welcome from Express !" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
