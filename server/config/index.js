const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const PORT = process.env.PORT || process.env.REACT_APP_BACKEND_PORT;
const URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL
    : `http://localhost:${PORT}`;

const config = {
  PORT,
  URL,
};

module.exports = config;
