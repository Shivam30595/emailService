const express = require("express");
const dbConnect = require("./config/database");
const app = express();
const emailRoutes = require("./routes/email");

app.use(express.json());
app.use(express.text());

app.use("/email", emailRoutes);
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({
    statusCode: 500,
    message: err.message || "Internal Server Error",
    errData: err.errData || [],
  });
});

dbConnect()
  .then(() => {
    app.listen(3000, (r) => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Issue comes up while connecting to database!!!", err);
  });
