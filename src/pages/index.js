import { env } from "../util/env";

const Page = () => {
  return (
    <div>
      Hi! - env for "test" is <code>{JSON.stringify(env("test"))}</code>
    </div>
  );
};

export default Page;
