const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(
  path.resolve(process.cwd(), "./docker-env.json")
);
fs.writeFileSync(
  path.resolve(process.cwd(), "./docker-env"),
  content.toString("base64"),
  { encoding: "utf-8" }
);

console.log("Encoded json!");
