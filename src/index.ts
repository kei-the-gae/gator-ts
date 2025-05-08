import { readConfig, setUser } from "./config";

function main() {
  setUser("kei");
  const cfg = readConfig();
  console.log(cfg);
}

main();
