import { get } from "lodash";

const publicEnvB64 = process.env.NEXT_PUBLIC_ENV;
const privateEnvB64 = process.env.PRIVATE_ENV;

const publicEnv = JSON.parse(
  typeof window === "undefined"
    ? Buffer.from(publicEnvB64, "base64").toString("utf-8")
    : atob(publicEnvB64)
);

const privateEnvVal = JSON.parse(
  typeof window === "undefined"
    ? Buffer.from(privateEnvB64, "base64").toString("utf-8")
    : "0"
);

export const env = (path) => get(publicEnv, path);
export const privateEnv = (path) => {
  if (!privateEnvVal)
    throw new Error("Cannot get private env values on the client-side!");
  return get(privateEnvVal, path);
};
