  import { env } from "deno";

  const myEnv = env();
  console.log(myEnv.SHELL);
  const a: number = 1;
  myEnv['hello'] = a;
  console.log(myEnv)