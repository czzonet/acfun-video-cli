import { runBuild } from "./build";

runBuild(process.env.NODE_ENV == "prod");
