const path = require("path");

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env"),
});

const publicEnv = JSON.parse(
  Buffer.from(process.env.NEXT_PUBLIC_ENV, "base64").toString("utf-8")
);
const privateEnv = JSON.parse(
  Buffer.from(process.env.PRIVATE_ENV, "base64").toString("utf-8")
);

module.exports = { publicEnv, privateEnv };
