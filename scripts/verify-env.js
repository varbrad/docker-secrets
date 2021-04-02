const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

try {
  const envBuffer = fs.readFileSync(
    path.resolve(process.cwd(), ".env.production")
  );
  const config = dotenv.parse(envBuffer);

  const publicEnv = JSON.parse(
    Buffer.from(config.NEXT_PUBLIC_ENV, "base64").toString("utf-8")
  );

  const privateEnv = JSON.parse(
    Buffer.from(config.PRIVATE_ENV, "base64").toString("utf-8")
  );

  if (publicEnv.test && privateEnv.something) {
    console.log("All good!");
    process.exit(0);
  } else {
    console.log("uh oh!");
    process.exit(1);
  }
} catch (error) {
  console.log("Something bad happened");
  process.exit(1);
}
