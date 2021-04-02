const fs = require("fs");
const path = require("path");

const encoded = process.argv[2];

if (!encoded) throw new Error("No encoded env provided!");

const { public, private } = JSON.parse(
  Buffer.from(encoded, "base64").toString("utf-8")
);

const publicB64 = Buffer.from(JSON.stringify(public)).toString("base64");
const privateB64 = Buffer.from(JSON.stringify(private)).toString("base64");

fs.writeFileSync(
  path.resolve(process.cwd(), ".env.production"),
  `NEXT_PUBLIC_ENV="${publicB64}"\nPRIVATE_ENV="${privateB64}"`,
  { encoding: "utf-8" }
);
