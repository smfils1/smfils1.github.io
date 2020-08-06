const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");

//Configurations
const config = require("./config");

//Use Middlewares
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet()); //Secure HTTP headers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Deploying client & api on one server
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    );
  });
}

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
